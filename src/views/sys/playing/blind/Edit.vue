<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="objData.formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="奖励产品" name="goods_id">
        <Select
          v-model:value="objData.formData.goods_id"
          style="width: 100%"
          placeholder="请选择奖励产品"
          :options="options"
        >
        </Select>
      </FormItem>
      <FormItem label="奖品数量" name="num">
        <Input v-model:value="objData.formData.num" placeholder="请输入奖品数量" />
      </FormItem>
      <FormItem label="奖品剩余数量" name="overplus_num">
        <Input v-model:value="objData.formData.overplus_num" placeholder="请输入奖品数量" />
      </FormItem>
      <FormItem label="中奖概率" name="rate">
        <Input v-model:value="objData.formData.rate" placeholder="请输入中奖概率" suffix="%" />
      </FormItem>
      <FormItem label="描述" name="desc">
        <Tinymce v-model:value="objData.formData.desc" @change="(value) => objData.formData.desc = value" />
      </FormItem>
      <FormItem label="奖品状态">
        <Select
          v-model:value="objData.formData.state"
          style="width: 100%"
          placeholder="请选择奖品状态"
        >
          <SelectOption value="1">正常</SelectOption>
          <SelectOption value="2">禁用</SelectOption>
        </Select>
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
import { Form, FormItem, Input, Button, Select, SelectOption } from 'ant-design-vue';
import { Tinymce } from '/@/components/Tinymce/index';
import { useMessage } from '/@/hooks/web/useMessage';
import { getGoodsAll, getBlindInfo, updateBlindInfo } from '/@/api/sys/goods';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {}

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();

const options = ref([
  {
    label: '请选择',
    value: '0'
  }
]);

const init1 = async() => {
  const res = await getGoodsAll({});
  console.log('%c [ res ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  if(res) {
    options.value = options.value.concat(res.list)
  }
}

init1();

const init = async () => {
  const res = await getBlindInfo({
    id
  })
  if(res) {
    let formData = res.data;
    formData.state = String(formData.state);
    objData.formData = formData
  }
}

init();

const formRef = ref();

const rules = {
  goods_id: [{ required: true, message: '请输入', trigger: 'change' }],
  num: [{ required: true, message: '请输入', trigger: 'blur' }],
  rate: [{ required: true, message: '请输入', trigger: 'blur' }],
  overplus_num: [{ required: true, message: '请输入', trigger: 'blur' }],
  state: [{ required: true, message: '请输入', trigger: 'change' }],
  desc: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const objData = reactive<any>({
  formData:{
    goods_id: '0',
    num: '1',
    rate: '1',
    state: '1',
    desc: '',
    overplus_num: '1',
  }
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await updateBlindInfo({...objData.formData, id: id});
      if(res) {
        createMessage.success('修改成功');
        router.replace('/playing/blind');
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
