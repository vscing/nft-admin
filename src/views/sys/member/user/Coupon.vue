<template>
  <PageWrapper title="发放优惠券" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="优惠券名称" name="name">
        <Input v-model:value="formData.name" placeholder="请输入" />
      </FormItem>
      <FormItem label="logo" name="logo">
        <Upload name="file" list-type="picture-card" :show-upload-list="false" :action="uploadUrl" :headers="headers"
          :before-upload="beforeUpload" @change="(info) => handleChange(info)">
          <Image v-if="formData.logo" :src="formData.logo" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="优惠券面额" name="amount">
        <Input v-model:value="formData.amount" placeholder="请输入" />
      </FormItem>
      <FormItem label="优惠券url" name="link">
        <Input.TextArea v-model:value="formData.link" :rows="5" placeholder="请输入" />
      </FormItem>
      <FormItem label="描述" name="desc">
        <Tinymce v-model:value="formData.desc" @change="(value) => formData.desc = value" />
      </FormItem>
      <FormItem label="状态">
        <Select
          v-model:value="formData.status"
          style="width: 100%"
          placeholder="请选择状态"
        >
          <SelectOption value="1">正常</SelectOption>
          <SelectOption value="2">禁用</SelectOption>
        </Select>
      </FormItem>
      <FormItem label="排序">
        <Input v-model:value="formData.sort" placeholder="请输入" />
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
import { Form, FormItem, Input, Upload, Image, Button, Select, SelectOption } from 'ant-design-vue';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { addCoupon } from '/@/api/sys/other';
import { Tinymce } from '/@/components/Tinymce/index';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {};

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();
const { uploadUrl } = useGlobSetting();

const token = getToken();
const loading = ref<boolean>(false);
const headers = ref({
  Authorization: `Bearer ${token}`
})

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
  if (!isJpgOrPng) {
    createMessage.error('上传图片格式不正确');
  }
  const isLt2M = file.size / 1024 / 1024 < 50;
  if (!isLt2M) {
    createMessage.error('请上传50MB以下图片!');
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
    formData.logo = url;
    loading.value = false;
  } else if (status === 'error') {
    loading.value = false;
    createMessage.error('上传失败');
  }
}

const formRef = ref();

const rules = {
  name: [
    { required: true, message: '请输入', trigger: 'blur' },
  ],
  logo: [{ required: true, message: '请选择', trigger: 'change' }],
  amount: [{ required: true, message: '请输入', trigger: 'blur' }],
  link: [{ required: true, message: '请输入', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const formData = reactive<any>({
  name: '',
  logo: '',
  amount: '0.00',
  link: '',
  desc: '',
  status: '1',
  sort: '0'
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      formData.user_id = id;
      formData.link = formData.link.split("\n");
      const res = await addCoupon(formData);
      if(res) {
        createMessage.success('发优惠券成功');
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
