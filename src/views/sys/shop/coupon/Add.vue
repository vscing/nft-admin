<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="手机号" name="phone">
        <Input v-model:value="formData.phone" placeholder="请输入" />
      </FormItem>
      <FormItem label="密码" name="password">
        <Input v-model:value="formData.password" placeholder="请输入" />
      </FormItem>
      <FormItem label="店铺名称" name="nickname">
        <Input v-model:value="formData.nickname" placeholder="请输入" />
      </FormItem>
      
      <FormItem :wrapper-col="{ span: 14, offset: 4 }">
        <Button @click="resetForm">取消</Button>
        <Button style="margin-left: 10px" type="primary" @click="onSubmit">确定</Button>
      </FormItem>
    </Form>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { Form, FormItem, Input, Button } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { addInfo } from '/@/api/sys/shop';

const router = useRouter();

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();

const formRef = ref();
const rules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  nickname: [
    { required: true, message: '请输入店铺名称', trigger: 'blur' },
  ],
};

const formData = reactive<any>({
  phone: '',
  password: '',
  nickname: ''
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await addInfo({...formData});
      if(res) {
        createMessage.success('新增成功');
        router.replace('/shop/store');
      }
    })
    .catch((error: any) => {
      console.log('error', error);
    });
}

const resetForm = () => {
  formRef.value.resetFields();
};
</script>  
