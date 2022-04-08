import React, { useState } from 'react';
import { Alert, message, Form } from 'antd';
import { history, History, useModel, useRequest } from 'umi';
import UserLayout from '@/layouts/user-layout';
import { LoginParamsType } from '@/common/types/login';
import LoginForm from './components';
import { fetchLogin } from '@/services/login';
import { setCookie } from '@/utils/cookie';
import styles from './style.less';

const {
  Tab,
  Username,
  Password,
  Submit
} = LoginForm;

const LoginMessage: React.FC<{ content: string;}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/**
 * 此方法会跳转到 redirect 参数所在的位置
 */
const replaceGoto = () => {
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    if (!redirect) {
      history.replace('/');
      return;
    }
    (history as History).replace(redirect);
  }, 10);
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const { initialState, setInitialState } = useModel('@@initialState');
  const [form] = Form.useForm();
  const [type, setType] = useState<string>('account');

  const loginRequest = useRequest(
    (values: LoginParamsType) => {
      return fetchLogin({ ...values, type })
    },
    {
      manual: true,
      onSuccess: (data) => {
        if (data.token) {
          loginSuccess(data.token);
          return;
        }
        setUserLoginState(data);
      }
    }
  );

  const loginSuccess = async (token: string) => {
    if (initialState && token) {
      message.success('登录成功！');
      setCookie(token);
      const currentUser = await initialState?.fetchUserInfo();
      setInitialState({
        ...initialState,
        currentUser,
      });
      replaceGoto();
    }
  }

  // const handleCaptcha = async () => {
  //   const { mobile } = await form.validateFields(['mobile']);

  //   if (mobile) {
  //     const result = await fetchCaptcha(mobile);
  //     if (result?.code === 200) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  const { status, type: loginType } = userLoginState;

  const handleSubmit = (values: LoginParamsType) => {
    loginRequest.run(values);
  };

  return (
    <UserLayout>
      <div className={styles.main}>
        <LoginForm activeKey={type} form={form} onTabChange={setType} onSubmit={handleSubmit}>
          <Tab key="account" tab="登录">
            {status === 'error' && loginType === 'account' && !loginRequest.loading && (
              <LoginMessage content="账户或密码错误" />
            )}

            <Username
              name="username"
              placeholder="用户名: admin or user"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <Password
              name="password"
              placeholder="密码: 123456"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </Tab>
          <Submit loading={loginRequest.loading}>登录</Submit>
        </LoginForm>
      </div>
    </UserLayout>
  );
};

export default Login;
