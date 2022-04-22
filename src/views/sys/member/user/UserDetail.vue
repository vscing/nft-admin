<template>
  <PageWrapper
    :title="`用户` + data.nickname + `的资料`"
    content="用户资料详情页面"
    contentBackground
    @back="goBack"
  >
    <template #footer>
      <Tabs default-active-key="detail" v-model:activeKey="currentKey">
        <Tabs.TabPane key="detail" tab="用户资料" />
        <Tabs.TabPane key="bankCard" tab="用户银行卡" />
        <Tabs.TabPane key="parent" tab="上级" />
        <Tabs.TabPane key="son" tab="下级" />
        <Tabs.TabPane key="logs" tab="操作日志" />
      </Tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'detail'">
        <Card title="用户信息" :bordered="false" class="mt-5">
          <Descriptions size="small" :column="2">
            <Descriptions.Item label="用户昵称"> {{ data.nickname }} </Descriptions.Item>
            <Descriptions.Item label="用户手机号"> {{ data.phone }} </Descriptions.Item>
            <Descriptions.Item label="用户真实姓名"> {{ data.real_name }} </Descriptions.Item>
            <Descriptions.Item label="用户身份证号"> {{ data.id_number }} </Descriptions.Item>
            <Descriptions.Item label="用户状态"> {{ data.state ? '正常':'禁用' }} </Descriptions.Item>
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
      </template>
      <template v-if="currentKey == 'bankCard'">
        <Table :dataSource="bankCardList" :columns="bankCardColumns" />
      </template>
      <template v-if="currentKey == 'parent'">
        <Table :dataSource="parentList" :columns="userColumns" />
      </template>
      <template v-if="currentKey == 'son'">
        <Table :dataSource="sonList" :columns="userColumns" />
      </template>
      <template v-if="currentKey == 'logs'">
        <div>用户{{ data.nickname }}操作日志(待集成到elk)</div>
      </template>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { Card, Tabs, Descriptions, Table } from 'ant-design-vue';
  import { getUserInfo } from '/@/api/sys/member';
  import { columnToDateTime } from '/@/utils/dateUtil';
  import { bankCardColumns, userColumns } from './user.data'
  
  const route = useRoute();
  const go = useGo();

  const userId = ref(route.params?.id);
  const data = ref<any>({});
  const bankCardList = ref([]);
  const parentList = ref([]);
  const sonList = ref([]);
  const currentKey = ref('detail');
  const { setTitle } = useTabs();

  // 设置Tab的标题（不会影响页面标题）
  setTitle('详情：用户' + userId.value);
  
  // 获取详情信息
  const getInfo = async () => {
    const res = await getUserInfo({id: userId.value});
    data.value = res.data;
    bankCardList.value = res.bankCardList;
    parentList.value = res.parentList;
    sonList.value = res.sonList
  }

  getInfo();

  // 页面左侧点击返回链接时的操作
  function goBack() {
    // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
    go('/member/user');
  }
</script>

<style></style>
