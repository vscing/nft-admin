<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #status="{ record }">
        <span>{{ getStatus(record.status)}}</span>
      </template>
      <!-- <template #bank_card="{ record }">
        <span>{{ JSON.stringify(record.bankCard)}}</span>
      </template> -->
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <template #is_operate="{ record }">
        <span>{{ record.is_operate == 1 ? '操作':'未操作' }}</span>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
          {
            icon: 'ant-design:api-filled',
            tooltip: '分账',
            popConfirm: {
              title: '是否确认分账',
              confirm: handleSplit.bind(null, record),
            },
          }
        ]" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getSplitList, setSplitOrder } from '/@/api/sys/user';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
console.log('%c [ go ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', go)
const searchInfo = reactive<Recordable>({});
const [registerTable, { reload }] = useTable({
  title: 'A账户分账列表',
  api: getSplitList,
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

const getStatus = (status) => {
  let text = '';
  if(status == 10) {
    text = '未成功';
  } else if(status == 20){
    text = '已成功';
  }
  return text;  
}

const handleSplit = async(record: Recordable) => {
  const res = await setSplitOrder({order_number: record.order_number})
    if(res.data) {
      reload();
    } else {
      reload();
    }
}
</script>
