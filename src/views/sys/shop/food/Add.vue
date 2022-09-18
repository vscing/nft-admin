<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="店铺ID" name="shop_id">
        <Input v-model:value="formData.shop_id" placeholder="请输入" />
      </FormItem>
      <FormItem label="菜品名字" name="food_name">
        <Input v-model:value="formData.food_name" placeholder="请输入" />
      </FormItem>
      <FormItem label="菜品图片" name="food_img">
        <Upload name="file" list-type="picture-card" :show-upload-list="false" :action="uploadUrl" :headers="headers"
          :before-upload="beforeUpload" @change="(info) => handleChange(info)">
          <Image v-if="formData.food_img" :src="formData.food_img" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="菜系介绍" name="info">
        <Input.TextArea v-model:value="formData.info" :rows="5" placeholder="请输入" :maxlength="100" />
      </FormItem>
      <FormItem label="推荐状态" name="is_tui">
        <Select
          v-model:value="formData.is_tui"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="1">推荐</Select.Option>
          <Select.Option :value="0">非推荐</Select.Option>
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
import { useRouter } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { Form, FormItem, Input, Button, Select, Upload, Image } from 'ant-design-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { addFoot } from '/@/api/sys/shop';

const router = useRouter();

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();
const { uploadUrl } = useGlobSetting();

const loading = ref<boolean>(false);
const token = getToken();
const headers = ref({
  Authorization: `Bearer ${token}`
})

const formRef = ref();
const rules = {
  shop_id: [
    { required: true, message: '请输入店铺ID', trigger: 'blur' },
  ],
  food_name: [
    { required: true, message: '请输入菜品名字', trigger: 'blur' },
  ],
  
};

const formData = reactive<any>({
  shop_id: '',
  food_name: '',
  food_img: '',
  info: '',
  is_tui: 1
});

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
    formData.food_img = url;
    loading.value = false;
  } else if (status === 'error') {
    loading.value = false;
    createMessage.error('上传失败');
  }
}

const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await addFoot({...formData});
      if(res) {
        createMessage.success('新增成功');
        router.replace('/shop/food');
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
