<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleReturn">批量退回金额</a-button>
      </template>
      <template #status="{ record }">
        <span>{{ getStatusType(record.status)}}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
          {
            icon: 'ant-design:retweet-outlined',
            tooltip: '设置中奖',
            color: 'error',
            popConfirm: {
              title: '是否确认中奖扣款？',
              confirm: handleEdit.bind(null, record),
            }
          },
        ]" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getPrizeList, setUserPrize, setAllRefund } from '/@/api/sys/member';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';
import { useMessage } from '/@/hooks/web/useMessage';

const { createMessage } = useMessage();

const go = useGo();
console.log('%c [ go ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', go)
const searchInfo = reactive<Recordable>({});
const [registerTable, { reload }] = useTable({
  title: '用户抽签列表',
  api: getPrizeList,
  rowKey: 'id',
  columns,
  formConfig: {
    labelWidth: 120,
    schemas: searchFormSchema,
    autoSubmitOnEnter: true,
  },
  useSearchForm: true,
  showTableSetting: true,
  bordered: true,
  handleSearchInfoFn(info) {
    console.log('handleSearchInfoFn', info);
    return info;
  },
  actionColumn: {
    width: 120,
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
});

const getStatusType = (status) => {
  let text = '';
  if(status == 10) {
    text = '待开奖';
  } else if(status == 20){
    text = '已中奖';
  } else if(status == 30){
    text = '未中奖';
  }
  return text;  
}

const handleReturn = async() => {
  const res = await setAllRefund({});
  if(res) {
    createMessage.success('批量退款成功');
  } else {
    createMessage.success('批量退款失败');
  }
  reload();
}

const handleEdit = async(record: Recordable) => {
  const res = await setUserPrize({id: record.id});
  if(res) {
    createMessage.success('抽签发送成功');
  } else {
    createMessage.success('抽签发送失败');
  }
  reload();
}
</script>
