<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="盲盒数量" name="sum">
        <Input v-model:value="formData.sum" placeholder="请输入" />
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
import { useRouter, useRoute } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { Form, FormItem, Input, Button } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { addBlindSku } from '/@/api/sys/member';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {};

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();

const formRef = ref();

const rules = {
  sum: [{ required: true, message: '请输入', trigger: 'blur' }]
};

const formData = reactive<any>({
  sum: '0',
});

const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await addBlindSku({...formData, user_id: id});
      console.log('%c [ res ]-150', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      if(res) {
        createMessage.success('发放盲盒成功');
        router.replace(`/member/user`);
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
