<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="轮播图标题" name="name">
        <Input v-model:value="formData.name" placeholder="请输入" />
      </FormItem>
      <FormItem label="轮播图封面图" name="img">
        <Upload name="file" list-type="picture-card" :show-upload-list="false" :action="uploadUrl" :headers="headers"
          :before-upload="beforeUpload" @change="(info) => handleChange(info)">
          <Image v-if="formData.img" :src="formData.img" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="轮播图URL">
        <Input v-model:value="formData.url" placeholder="请输入" />
      </FormItem>
      <FormItem label="关联内容ID">
        <Input v-model:value="formData.article_id" placeholder="请输入" />
      </FormItem>
      <FormItem label="轮播图简介">
        <Input.TextArea v-model:value="formData.desc" :rows="5" placeholder="请输入" />
      </FormItem>
      <FormItem label="轮播图状态">
        <Select
          v-model:value="formData.state"
          style="width: 100%"
          placeholder="请选择轮播图状态"
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
import { useRouter } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { Form, FormItem, Input, Upload, Image, Button, Select, SelectOption } from 'ant-design-vue';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { addBannerInfo } from '/@/api/sys/content';

const router = useRouter();

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
    formData.img = url;
    loading.value = false;
  } else if (status === 'error') {
    loading.value = false;
    createMessage.error('上传失败');
  }
}

const formRef = ref();

const rules = {
  name: [{ required: true, message: '请输入', trigger: 'blur' }],
  img: [{ required: true, message: '请选择', trigger: 'change' }],
  // url: [{ required: true, message: '请选择', trigger: 'blur' }],
  // desc: [{ required: true, message: '请输入', trigger: 'blur' }],
  // state: [{ required: true, message: '请输入', trigger: 'blur' }],
  // sort: [{ required: true, message: '请输入', trigger: 'blur' }]
};

const formData = reactive<any>({
  name: '',
  img: '',
  url: '',
  desc: '',
  state: '2',
  sort: '0'
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await addBannerInfo(formData);
      if(res) {
        createMessage.success('新增成功');
        router.replace('/content/banner');
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
