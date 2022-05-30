<template>
  <PageWrapper :title="`用户` + data.nickname + `的资料`" content="用户资料详情页面" contentBackground @back="goBack">
    <template #footer>
      <Tabs default-active-key="detail" v-model:activeKey="currentKey">
        <Tabs.TabPane key="detail" tab="用户资料" />
        <Tabs.TabPane key="bankCard" tab="用户银行卡" />
        <Tabs.TabPane key="parent" tab="上级" />
        <Tabs.TabPane key="son" tab="下级" />
        <Tabs.TabPane key="logs" tab="操作日志" />
      </Tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'detail'">
        <Card title="用户信息" :bordered="false" class="mt-5">
          <Descriptions size="small" :column="2">
            <Descriptions.Item label="用户昵称"> {{ data.nickname }} </Descriptions.Item>
            <Descriptions.Item label="用户手机号"> {{ data.phone }} </Descriptions.Item>
            <Descriptions.Item label="用户真实姓名"> {{ data.real_name }} </Descriptions.Item>
            <Descriptions.Item label="用户身份证号"> {{ data.id_number }} </Descriptions.Item>
            <Descriptions.Item label="用户状态"> {{ data.state ? '正常' : '禁用' }} </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card title="用户金额" :bordered="false" class="mt-5">
          <Descriptions size="small" :column="2">
            <Descriptions.Item label="用户总金额"> {{ data.total_money }} </Descriptions.Item>
            <Descriptions.Item label="用户可用金额"> {{ data.use_money }} </Descriptions.Item>
            <Descriptions.Item label="用户冻结金额"> {{ data.freeze_money }} </Descriptions.Item>
            <Descriptions.Item label="累积分销(佣金)金额"> {{ data.distribut_total_money }} </Descriptions.Item>
            <Descriptions.Item label="累积提现金额"> {{ data.withdrawal_total_money }} </Descriptions.Item>
            <Descriptions.Item label="钱包地址"> {{ data.polygon_address }} </Descriptions.Item>
          </Descriptions>
          <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
            <FormItem label="用户总金额" name="total_money">
              <Input v-model:value="formData.total_money" placeholder="请输入" />
            </FormItem>
            <FormItem label="B账户可用金额" name="use_money">
              <Input v-model:value="formData.use_money" placeholder="请输入" />
            </FormItem>
            <FormItem label="B账户冻结金额" name="freeze_money">
              <Input v-model:value="formData.freeze_money" placeholder="请输入" />
            </FormItem>
            <FormItem label="A账户可用金额" name="a_use_money">
              <Input v-model:value="formData.a_use_money" placeholder="请输入" />
            </FormItem>
            <FormItem label="A账户冻结金额" name="a_freeze_money">
              <Input v-model:value="formData.a_freeze_money" placeholder="请输入" />
            </FormItem>
            <FormItem :wrapper-col="{ span: 14, offset: 4 }">
              <Button style="margin-left: 10px" type="primary" @click="onSubmit">确定</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="用户操作" :bordered="false" class="mt-5">
          <Descriptions size="small" :column="2">
            <Descriptions.Item label="用户创建时间"> {{ columnToDateTime(data.created_at) }} </Descriptions.Item>
            <Descriptions.Item label="最后登录日期"> {{ data.login_at && columnToDateTime(data.login_at) }}
            </Descriptions.Item>
            <Descriptions.Item label="用户数据更新时间"> {{ columnToDateTime(data.updated_at) }} </Descriptions.Item>
          </Descriptions>
        </Card>
      </template>
      <template v-if="currentKey == 'bankCard'">
        <Table :dataSource="bankCardList" :columns="bankCardColumns" />
      </template>
      <template v-if="currentKey == 'parent'">
        <Table :dataSource="parentList" :columns="userColumns" />
      </template>
      <template v-if="currentKey == 'son'">
        <Table :dataSource="sonList" :columns="childColumns" :position="position">
          <template #created_at="{ record }">
            <span>{{columnToDateTime(record.created_at)}}</span>
          </template>
        </Table>
      </template>
      <template v-if="currentKey == 'logs'">
        <div>用户{{ data.nickname }}操作日志(待集成到elk)</div>
      </template>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { useGo } from '/@/hooks/web/usePage';
import { useTabs } from '/@/hooks/web/useTabs';
import { Card, Tabs, Descriptions, Table, Form, FormItem, Input, Button } from 'ant-design-vue';
import { getUserInfo, updatePrice } from '/@/api/sys/member';
import { columnToDateTime } from '/@/utils/dateUtil';
import { bankCardColumns, userColumns, childColumns } from './user.data'
import { useMessage } from '/@/hooks/web/useMessage';

const route = useRoute();
const go = useGo();

const { createMessage } = useMessage();

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const formRef = ref();

const rules = {
  total_money: [
    { required: true, message: '请输入', trigger: 'blur' },
  ],
  use_money: [{ required: true, message: '请输入', trigger: 'blur' }],
  freeze_money: [{ required: true, message: '请输入', trigger: 'blur' }]
};

const formData = reactive<any>({
  total_money: '0.00',
  use_money: '0.00',
  freeze_money: '0.00',
  a_use_money: '0.00',
  a_freeze_money: '0.00',
});

const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await updatePrice({...formData, id: data.value.id});
      if(res) {
        createMessage.success('修改成功');
        getInfo();
        return 
      }
      createMessage.error('修改失败');
    })
    .catch((error: any) => {
      console.log('error', error);
    });
}

const userId = ref(route.params?.id);
const data = ref<any>({});
const bankCardList = ref([]);
const parentList = ref([]);
const sonList = ref([]);
const currentKey = ref('detail');
const { setTitle } = useTabs();
const position = ref({
  total: 10
});

// 设置Tab的标题（不会影响页面标题）
setTitle('详情：用户' + userId.value);

// 获取详情信息
const getInfo = async () => {
  const res = await getUserInfo({ id: userId.value });
  data.value = res.data;
  formData.total_money = res.data?.total_money || 0;
  formData.use_money = res.data?.use_money || 0;
  formData.freeze_money = res.data?.freeze_money || 0;
  formData.a_use_money = res.data?.a_use_money || 0;
  formData.a_freeze_money = res.data?.a_freeze_money || 0;
  bankCardList.value = res.bankCardList;
  parentList.value = res.parentList;
  sonList.value = res.sonList
}

getInfo();

// 页面左侧点击返回链接时的操作
function goBack() {
  // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
  go('/member/user');
}
</script>

<style>
</style>
