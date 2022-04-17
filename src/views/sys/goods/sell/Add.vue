<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="商品标题" name="title">
        <Input v-model:value="formData.title" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品封面图" name="img">
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
      <FormItem label="商品价格" name="price">
        <Input v-model:value="formData.price" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品预售库存" name="total_stock">
        <Input v-model:value="formData.total_stock" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品预售时间" name="presell_time">
        <DatePicker v-model:value="formData.presell_time" show-time placeholder="请选择" format="YYYY-MM-DD hh:mm:ss"/>
      </FormItem>
      <FormItem label="合约地址" name="contract_address">
        <Input v-model:value="formData.contract_address" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证标识" name="token_id">
        <Input v-model:value="formData.token_id" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证标准" name="token_standard">
        <Input v-model:value="formData.token_standard" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证网络" name="blockchain">
        <Input v-model:value="formData.blockchain" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品简介" name="desc">
        <Input.TextArea v-model:value="formData.desc" :rows="5" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品描述" name="content">
        <Tinymce v-model:value="formData.content" @change="(value) => formData.content = value" />
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
import { Form, FormItem, Input, Upload, Image, Button, DatePicker } from 'ant-design-vue';
import { Tinymce } from '/@/components/Tinymce/index';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { formatToDateTime, getDate } from '/@/utils/dateUtil';
import { addGoodsInfo } from '/@/api/sys/goods';

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
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    createMessage.error('上传图片格式不正确');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    createMessage.error('请上传2MB以下图片!');
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
  title: [
    { required: true, message: '请输入', trigger: 'blur' },
    { min: 4, max: 150, message: '请输入标题 4 到 150 位', trigger: 'blur' },
  ],
  img: [{ required: true, message: '请选择', trigger: 'change' }],
  presell_time: [{ required: true, message: '请选择', trigger: 'change' }],
  price: [{ required: true, message: '请输入', trigger: 'blur' }],
  total_stock: [{ required: true, message: '请输入', trigger: 'blur' }],
  contract_address: [{ required: true, message: '请输入', trigger: 'blur' }],
  token_id: [{ required: true, message: '请输入', trigger: 'blur' }],
  token_standard: [{ required: true, message: '请输入', trigger: 'blur' }],
  blockchain: [{ required: true, message: '请输入', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const formData = reactive<any>({
  title: '',
  img: '',
  price: '0.00',
  total_stock: '1',
  presell_time: getDate(),
  contract_address: '',
  token_id: '',
  token_standard: '',
  blockchain: '',
  desc: '',
  content: '',
  sort: '0',
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await addGoodsInfo({...formData, presell_time: formatToDateTime(formData.presell_time)});
      console.log('%c [ res ]-150', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      if(res) {
        createMessage.success('新增成功');
        router.go(-1);
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
