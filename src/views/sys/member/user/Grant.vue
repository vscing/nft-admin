<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="奖励产品" name="goods_id">
        <Select
          v-model:value="formData.goods_id"
          style="width: 100%"
          placeholder="请选择"
          :options="options"
        >
        </Select>
      </FormItem>
      <FormItem label="产品数量" name="count">
        <Input v-model:value="formData.count" placeholder="请输入" />
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
import { Form, FormItem, Input, Button, Select } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { getGoodsAll } from '/@/api/sys/goods';
import { OnGrant } from '/@/api/sys/member';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {};

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();

const formRef = ref();

const rules = {
  goods_id: [{ required: true, message: '请选择', trigger: 'change' }],
  count: [{ required: true, message: '请输入', trigger: 'blur' }]
};

const formData = reactive<any>({
  goods_id: '0',
  count: '1',
});

const options = ref([
  {
    label: '请选择',
    value: '0'
  }
]);

const init = async() => {
  const res = await getGoodsAll({});
  console.log('%c [ res ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  if(res) {
    options.value = options.value.concat(res.list)
  }
}

init();


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await OnGrant({...formData, user_id: id});
      console.log('%c [ res ]-150', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      if(res) {
        createMessage.success('空投成功');
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
