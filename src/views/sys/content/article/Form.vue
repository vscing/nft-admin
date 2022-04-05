<template>
  <PageWrapper title="基本配置" contentBackground contentClass="p-4">
    <Tabs v-model:activeKey="activeKey">
      <TabPane v-for="item in tabsList" :key="item.id" :tab="item.name">
        <Form :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
          <FormItem v-for="son in tabPaneList" :label="son.name">
            <Input v-if="son.value_type == 'input'" v-model:value="formData[son.code]" />
            <Input.TextArea v-if="son.value_type == 'textarea'" v-model:value="formData[son.code]" :rows="5" />
            <Tinymce v-if="son.value_type == 'html'" v-model:value="formData[son.code]" @change="(value) => formData[son.code] = value"/>
            <Upload
              v-if="son.value_type == 'image'"
              name="file"
              list-type="picture-card"
              :show-upload-list="false"
              :action="uploadUrl"
              :before-upload="beforeUpload"
              @change="(info) => handleChange(info, son.code)"
            >
              <img v-if="formData[son.code]" :src="formData[son.code]" alt="avatar" />
              <div v-else>
                <LoadingOutlined v-if="loading"/>
                <PlusOutlined v-else />
                <div class="ant-upload-text">点击上传</div>
              </div>
            </Upload>
          </FormItem>
          <FormItem :wrapper-col="{ span: 14, offset: 4 }">
            <Button>取消</Button>
            <Button style="margin-left: 10px" type="primary" @click="onSubmit">确定</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { Tabs, TabPane, Form, FormItem, Input, Upload, Button } from 'ant-design-vue';
  import { Tinymce } from '/@/components/Tinymce/index';
  import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { PageWrapper } from '/@/components/Page';
  import { ref, computed } from 'vue';
  import { getConfigData, configSava } from '/@/api/sys/system';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGlobSetting } from '/@/hooks/setting';

  const data = ref<any>([{id: ''}]);
  const activeKey = ref<string>('');
  const formData = ref<any>({});
  const loading = ref<boolean>(false);
  const labelCol = { span: 4 };
  const wrapperCol = { span: 14 };


  const getConfig = async () => {
    const res = await getConfigData();
    data.value = res;
    activeKey.value = res[0] ? (res[0] as any)?.id : '';
  }

  getConfig();
  
  const tabsList = computed(() => {
    return data.value.filter((item: any) => item.pid == 0);
  })

  const tabPaneList = computed(() => {
    const list = data.value.filter((item: any) => {
      const isBol = item.pid == activeKey.value;
      if(isBol) {
        formData.value[item.code] = item.value;
      }
      return isBol;
    });
    return list;
  })

  const { createMessage } = useMessage();
  const { uploadUrl } = useGlobSetting();

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

  const handleChange = (info: any, code: any) => {
    const file = info.file;
    const status = file?.status;
    const url = file?.response?.result?.url;

    if (status === 'uploading') {
      if (!loading.value) {
        loading.value = true;
      }
    } else if (status === 'done') {
      formData.value[code] = url;
      loading.value = false;
    } else if (status === 'error') {
      loading.value = false;
      createMessage.error('上传失败');
    }
  }

  const onSubmit = async () => {
    const res = await configSava(formData.value);
    getConfig();
    console.log('res', res)
    createMessage.success('更新成功');
  }
  
</script>
