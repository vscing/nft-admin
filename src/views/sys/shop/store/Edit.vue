<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="objData.formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="商品标题" name="title">
        <Input v-model:value="objData.formData.title" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品封面图" name="img">
        <Upload name="file" list-type="picture-card" :show-upload-list="false" :action="uploadUrl" :headers="headers"
          :before-upload="beforeUpload" @change="(info) => handleChange(info)">
          <Image v-if="objData.formData.img" :src="objData.formData.img" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="商品价格" name="price">
        <Input v-model:value="objData.formData.price" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品预售数量" name="total_stock">
        <Input v-model:value="objData.formData.total_stock" placeholder="请输入"/>
      </FormItem>
      <FormItem label="商品库存" name="stock">
        <Input v-model:value="objData.formData.stock" placeholder="请输入" :disabled="true" />
      </FormItem>
      <FormItem label="商品预售时间" name="presell_time">
        <DatePicker v-model:value="objData.formData.presell_time" show-time placeholder="请选择" format="YYYY-MM-DD hh:mm:ss"/>
      </FormItem>
      <FormItem label="商品状态" name="status">
        <Select
          v-model:value="objData.formData.status"
          style="width: 100%"
          placeholder="请选择"
          :options="options"
        >
        </Select>
      </FormItem>
      <FormItem label="合约地址" name="contract_address">
        <Input v-model:value="objData.formData.contract_address" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证标识" name="token_id">
        <Input v-model:value="objData.formData.token_id" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证标准" name="token_standard">
        <Input v-model:value="objData.formData.token_standard" placeholder="请输入" />
      </FormItem>
      <FormItem label="认证网络" name="blockchain">
        <Input v-model:value="objData.formData.blockchain" placeholder="请输入" />
      </FormItem>
      <FormItem label="商品简介" name="desc">
        <Input.TextArea v-model:value="objData.formData.desc" :rows="5" placeholder="请输入" :maxlength="200" />
      </FormItem>
      <FormItem label="商品描述" name="content">
        <Tinymce v-model:value="objData.formData.content" @change="(value) => objData.formData.content = value" />
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
import { Form, FormItem, Input, Upload, Image, Button, DatePicker, Select } from 'ant-design-vue';
import { Tinymce } from '/@/components/Tinymce/index';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { formatToDateTime, getDate } from '/@/utils/dateUtil';
import { getGoodsInfo, updateGoodsInfo } from '/@/api/sys/goods';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {}

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();
const { uploadUrl } = useGlobSetting();

const options = ref([
  {
    value: '10',
    label: '待上架',
  },
  {
    value: '20',
    label: '预售中',
  },
  {
    value: '30',
    label: '售卖中',
  },
  {
    value: '40',
    label: '已售罄',
  },
])

const token = getToken();
const loading = ref<boolean>(false);
const headers = ref({
  Authorization: `Bearer ${token}`
})

const init = async () => {
  const res = await getGoodsInfo({
    id
  })
  if(res) {
    let formData = res.data;
    formData.presell_time = getDate(formData.presell_time*1000);
    formData.status = String(formData.status);
    objData.formData = formData
  }
}

init();

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
  title: [
    { required: true, message: '请输入', trigger: 'blur' },
  ],
  img: [{ required: true, message: '请选择', trigger: 'change' }],
  presell_time: [{ required: true, message: '请选择', trigger: 'change' }],
  price: [{ required: true, message: '请输入', trigger: 'blur' }],
  total_stock: [{ required: true, message: '请输入', trigger: 'blur' }],
  stock: [{ required: true, message: '请输入', trigger: 'blur' }],
  contract_address: [{ required: true, message: '请输入', trigger: 'blur' }],
  token_id: [{ required: true, message: '请输入', trigger: 'blur' }],
  token_standard: [{ required: true, message: '请输入', trigger: 'blur' }],
  blockchain: [{ required: true, message: '请输入', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const objData = reactive<any>({
  formData:{
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
  }
});


const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      const res = await updateGoodsInfo({...objData.formData, id: id, presell_time: formatToDateTime(objData.formData.presell_time)});
      if(res) {
        createMessage.success('修改成功');
        router.replace('/goods/sell');
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
