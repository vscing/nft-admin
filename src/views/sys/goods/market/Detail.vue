<template>
  <PageWrapper title="市场产品" content="市场产品详情页面" contentBackground @back="goBack">
    <div class="pt-4 m-4 desc-wrap">
      <Card title="用户信息" :bordered="false" class="mt-5">
        <Descriptions size="small" :column="2">
          <Descriptions.Item label="用户昵称"> {{ data.nickname }} </Descriptions.Item>
          <Descriptions.Item label="用户手机号"> {{ data.phone }} </Descriptions.Item>
          <Descriptions.Item label="用户真实姓名"> {{ data.real_name }} </Descriptions.Item>
          <Descriptions.Item label="用户身份证号"> {{ data.id_number }} </Descriptions.Item>
          <Descriptions.Item label="用户状态"> {{ data.state ? '正常' : '禁用' }} </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="用户金额" :bordered="false" class="mt-5">
        <Descriptions size="small" :column="2">
          <Descriptions.Item label="用户总金额"> {{ data.total_money }} </Descriptions.Item>
          <Descriptions.Item label="用户可用金额"> {{ data.use_money }} </Descriptions.Item>
          <Descriptions.Item label="用户冻结金额"> {{ data.freeze_money }} </Descriptions.Item>
          <Descriptions.Item label="累积分销(佣金)金额"> {{ data.distribut_total_money }} </Descriptions.Item>
          <Descriptions.Item label="累积提现金额"> {{ data.withdrawal_total_money }} </Descriptions.Item>
          <Descriptions.Item label="钱包地址"> {{ data.polygon_address }} </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="用户操作" :bordered="false" class="mt-5">
        <Descriptions size="small" :column="2">
          <Descriptions.Item label="用户创建时间"> {{ columnToDateTime(data.created_at) }} </Descriptions.Item>
          <Descriptions.Item label="最后登录日期"> {{ data.login_at && columnToDateTime(data.login_at) }} </Descriptions.Item>
          <Descriptions.Item label="用户数据更新时间"> {{ columnToDateTime(data.updated_at) }} </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PageWrapper } from '/@/components/Page';
import { useGo } from '/@/hooks/web/usePage';
import { useTabs } from '/@/hooks/web/useTabs';
import { Card, Descriptions } from 'ant-design-vue';
import { getUserInfo } from '/@/api/sys/member';
import { columnToDateTime } from '/@/utils/dateUtil';

const route = useRoute();
const go = useGo();

const id = ref(route.params?.id);
const data = ref<any>({});
const { setTitle } = useTabs();

// 设置Tab的标题（不会影响页面标题）
setTitle('市场商品id' + id.value);

// 获取详情信息
const getInfo = async () => {
  const res = await getUserInfo({ id: id.value });
  data.value = res.data;
}

getInfo();
function goBack() {
  go('/goods/market');
}
</script>

<style>
</style>
