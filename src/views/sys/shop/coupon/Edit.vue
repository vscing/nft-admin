<template>
  <PageWrapper title="基础表单" contentBackground contentClass="p-4">
    <Form ref="formRef" :model="objData.formData" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="上级ID" name="pid">
        <Input v-model:value="objData.formData.pid" placeholder="请输入" />
      </FormItem>
      <!-- <FormItem label="手机号" name="phone">
        <Input v-model:value="objData.formData.phone" placeholder="请输入" />
      </FormItem>
      <FormItem label="密码" name="password">
        <Input v-model:value="objData.formData.password" placeholder="请输入" />
      </FormItem> -->
      <FormItem label="店铺名称" name="nickname">
        <Input v-model:value="objData.formData.nickname" placeholder="请输入" />
      </FormItem>
      <FormItem label="店铺主图" name="avatar">
        <Upload name="file" list-type="picture-card" :show-upload-list="false" :action="uploadUrl" :headers="headers"
          :before-upload="beforeUpload" @change="(info) => handleChange(info)">
          <Image v-if="objData.formData.avatar" :src="objData.formData.avatar" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading" />
            <PlusOutlined v-else />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="店铺照片" name="shop_imgs">
        <Upload 
          name="file" 
          list-type="picture-card" 
          :show-upload-list="true" 
          v-model:file-list="objData.formData.shop_imgs"
          :action="uploadUrl" 
          :headers="headers"
          :before-upload="beforeUpload"
        >
          <div>
            <PlusOutlined />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="菜品照片" name="avatar">
        <Upload 
          name="file" 
          list-type="picture-card" 
          :show-upload-list="true" 
          v-model:file-list="objData.formData.foot_imgs"
          :action="uploadUrl" 
          :headers="headers"
          :before-upload="beforeUpload"
        >
          <div>
            <PlusOutlined />
            <div>点击上传</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="省" name="province">
        <Input v-model:value="objData.formData.province" placeholder="请输入" />
      </FormItem>
      <FormItem label="市" name="city">
        <Input v-model:value="objData.formData.city" placeholder="请输入" />
      </FormItem>
      <FormItem label="区" name="area">
        <Input v-model:value="objData.formData.area" placeholder="请输入" />
      </FormItem>
      <FormItem label="详细地址" name="address">
        <Input v-model:value="objData.formData.address" placeholder="请输入" />
      </FormItem>
      <FormItem label="经度" name="longitude">
        <Input v-model:value="objData.formData.longitude" placeholder="请输入" />
      </FormItem>
      <FormItem label="维度" name="latitude">
        <Input v-model:value="objData.formData.latitude" placeholder="请输入" />
      </FormItem>
      <FormItem label="分类" name="category">
        <Input v-model:value="objData.formData.category" placeholder="请输入" />
      </FormItem>
      <FormItem label="商铺电话" name="shop_phone">
        <Input v-model:value="objData.formData.shop_phone" placeholder="请输入" />
      </FormItem>
      <FormItem label="营业时间" name="business_time">
        <Input.TextArea v-model:value="objData.formData.business_time" :rows="5" placeholder="请输入" :maxlength="100" />
      </FormItem>
      <FormItem label="优惠券使用说明" name="info">
        <Input.TextArea v-model:value="objData.formData.info" :rows="5" placeholder="请输入" :maxlength="200" />
      </FormItem>
      <FormItem label="用户状态" name="state">
        <Select
          v-model:value="objData.formData.state"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="0">禁用</Select.Option>
          <Select.Option :value="1">正常</Select.Option>
        </Select>
      </FormItem>
      <FormItem label="店铺状态" name="status">
        <Select
          v-model:value="objData.formData.status"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="0">待审核</Select.Option>
          <Select.Option :value="1">开店</Select.Option>
        </Select>
      </FormItem>
      <FormItem label="会员折扣" name="is_discount">
        <Select
          v-model:value="objData.formData.is_discount"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="0">未开启</Select.Option>
          <Select.Option :value="1">开启</Select.Option>
        </Select>
      </FormItem>
      <!-- <FormItem label="折扣信息" name="discount_info">
        <Input.TextArea :disabled="true" v-model:value="objData.formData.discount_info" :rows="5" placeholder="请输入" :maxlength="200" />
      </FormItem> -->
      <FormItem label="新旧状态" name="is_new">
        <Select
          v-model:value="objData.formData.is_new"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="1">新</Select.Option>
          <Select.Option :value="2">旧</Select.Option>
        </Select>
      </FormItem>
      <FormItem label="连锁状态" name="is_chain">
        <Select
          v-model:value="objData.formData.is_chain"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="1">连锁</Select.Option>
          <Select.Option :value="0">非连锁</Select.Option>
        </Select>
      </FormItem>
      <FormItem label="热门状态" name="is_hot">
        <Select
          v-model:value="objData.formData.is_hot"
          style="width: 100%"
          placeholder="请选择"
        >
          <Select.Option :value="1">热门</Select.Option>
          <Select.Option :value="2">非热门</Select.Option>
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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import { getInfo, updateInfo } from '/@/api/sys/shop';

const router = useRouter();
const route = useRoute();
const { id = 0 } = route.params || {}

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };

const { createMessage } = useMessage();
const { uploadUrl } = useGlobSetting();

const token = getToken();
const loading = ref<boolean>(false);
const headers = ref({
  Authorization: `Bearer ${token}`
})

const init = async () => {
  const res = await getInfo({
    id
  })
  if(res) {
    let formData = res.data;
    formData.foot_imgs = formData.foot_imgs.map((item: string, index: number) => {
      return {
        uid: index+1,
        url: item
      }
    })
    formData.shop_imgs = formData.shop_imgs.map((item: string, index: number) => {
      return {
        uid: index+1,
        url: item
      }
    })
    objData.formData = formData
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
      params.foot_imgs = params.foot_imgs.map((item: any) => {
        return item.url ? item.url:item.response.result.url;
      })
      params.shop_imgs = params.shop_imgs.map((item: any) => {
        return item.url ? item.url:item.response.result.url;
      })
      const res = await updateInfo(params);
      if(res) {
        createMessage.success('修改成功');
        router.replace('/shop/store');
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
