<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tabChange="onTabChange"
  >
    <p v-if="activeKey === 'tab1'">
      <VisitAnalysis />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
    <p v-if="activeKey === 'tab3'">
      <VisitAnalysis1 />
    </p>
    <p v-if="activeKey === 'tab4'">
      <VisitAnalysis2 />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysis from './VisitAnalysis.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';
  import VisitAnalysis1 from './VisitAnalysis1.vue';
  import VisitAnalysis2 from './VisitAnalysis2.vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '日均交易额',
    },
    {
      key: 'tab2',
      tab: '日均客户',
    },
    {
      key: 'tab3',
      tab: '日均充值',
    },
    {
      key: 'tab4',
      tab: '日均提现',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
