<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="objData.formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="奖励产品" name="goods_id">
        <Select
          v-model:value="objData.formData.goods_id"
          style="width: 100%"
          placeholder="请选择"
          :options="options"
        >
        </Select>
      </FormItem>
      <FormItem label="产品数量" name="count">
        <Input v-model:value="objData.formData.count" placeholder="请输入" />
      </FormItem>
      <FormItem label="产品状态" name="status">
        <Select
          v-model:value="objData.formData.status"
          style="width: 100%"
          placeholder="请选择"
          :options="options2"
        >
        </Select>
      </FormItem>
      <FormItem label="排序">
        <Input v-model:value="objData.formData.sort" placeholder="请输入" />
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
import { getGoodsAll, getPlayNeedInfo, updatePlayNeedInfo } from '/@/api/sys/goods';

const router = useRouter();
const route = useRoute();
const { id = 0, pid = 0 } = route.params || {}

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();


const options = ref([
  {
    label: '请选择',
    value: '0'
  }
]);

const init2 = async() => {
  const res = await getGoodsAll({});
  console.log('%c [ res ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  if(res) {
    options.value = options.value.concat(res.list)
  }
}

init2();

const options2 = ref([
  {
    value: '10',
    label: '已上线',
  },
  {
    value: '20',
    label: '已下线',
  },
])

const init = async () => {
  const res = await getPlayNeedInfo({
    id
  })
  if(res) {
    let formData = res.data;
    formData.status = String(formData.status);
    objData.formData = formData
  }
}

init();

const formRef = ref();

const rules = {
  goods_id: [{ required: true, message: '请选择', trigger: 'change' }],
  status: [{ required: true, message: '请选择', trigger: 'change' }],
  count: [{ required: true, message: '请输入', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const objData = reactive<any>({
  formData:{
    goods_id: '0',
    count: '1',
    sort: '0',
    status: ''
  }
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await updatePlayNeedInfo({...objData.formData, id: id, play_id: pid});
      if(res) {
        createMessage.success('修改成功');
        router.replace(`/playing/compound_sku/${pid}`);
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
