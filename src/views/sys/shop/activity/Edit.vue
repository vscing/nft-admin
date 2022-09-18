<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="objData.formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="可接待人数" name="num">
        <Input v-model:value="objData.formData.num" placeholder="请输入" />
      </FormItem>
      <FormItem label="使用说明" name="info">
        <Input.TextArea v-model:value="objData.formData.info" :rows="5" placeholder="请输入" :maxlength="200" />
      </FormItem>
      <FormItem label="状态" name="status">
        <Select
          v-model:value="objData.formData.status"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="0">关闭</Select.Option>
          <Select.Option :value="1">开启</Select.Option>
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
import { Form, FormItem, Input, Upload, Image, Button, Select } from 'ant-design-vue';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
// import { useGlobSetting } from '/@/hooks/setting';
// import { getToken } from '/@/utils/auth';
import { getShopCoupon, editShopCoupon } from '/@/api/sys/shop';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {}

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();
// const { uploadUrl } = useGlobSetting();

// const token = getToken();
const loading = ref<boolean>(false);
// const headers = ref({
//   Authorization: `Bearer ${token}`
// })

const init = async () => {
  const res = await getShopCoupon({
    id
  })
  if(res) {
    let formData = res.data;
    objData.formData = {
      num: formData.num,
      info: formData.info,
      status: formData.status
    }
  }
}

init();

const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
  if (!isJpgOrPng) {
    createMessage.error('上传图片格式不正确');
  }
  const isLt2M = file.size / 1024 / 1024 < 3;
  if (!isLt2M) {
    createMessage.error('请上传3MB以下图片!');
  }
  return isJpgOrPng && isLt2M;
}

const handleChange = (info: any) => {
  const file = info.file;
  const status = file?.status;
  const url = file?.response?.result?.url;

  if (status === 'uploading') {
    if (!loading.value) {
      loading.value = true;
    }
  } else if (status === 'done') {
    objData.formData.avatar = url;
    loading.value = false;
  } else if (status === 'error') {
    loading.value = false;
    createMessage.error('上传失败');
  }
}

const formRef = ref();

const rules = {
  num: [
    { required: true, message: '请输入', trigger: 'blur' },
  ],
  info: [{ required: true, message: '请输入', trigger: 'blur' }],
  status: [{ required: true, message: '请选择', trigger: 'change' }],
};

const objData = reactive<any>({
  formData:{
    num: '',
    info: '',
    status: 1
  }
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const params = {
        ...objData.formData, 
        id: id
      }
      const res = await editShopCoupon(params);
      if(res) {
        createMessage.success('修改成功');
        router.replace('/shop/activity');
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
