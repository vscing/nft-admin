<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bill_type="{ record }">
        <span>{{ getBillType(record.bill_type)}}</span>
      </template>
      <template #status="{ record }">
        <span>{{ getStatus(record.status)}}</span>
      </template>
      <template #payment="{ record }">
        <span>{{ getType(record.payment)}}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <!-- <template #action="{ record }">
        <TableAction :actions="[
          {
            icon: 'clarity:note-edit-line',
            tooltip: '编辑',
            onClick: handleEdit.bind(null, record),
          },
          {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            tooltip: '删除',
            popConfirm: {
              title: '是否确认删除',
              confirm: handleDelete.bind(null, record),
            },
          },
        ]" />
      </template> -->
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { BasicTable, useTable } from '/@/components/Table';
import { getUserBill } from '/@/api/sys/user';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
console.log('%c [ go ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', go)
const searchInfo = reactive<Recordable>({});
const [registerTable, { reload, updateTableDataRecord }] = useTable({
  title: '用户账单列表',
  api: getUserBill,
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
  // actionColumn: {
  //   width: 120,
  //   title: '操作',
  //   dataIndex: 'action',
  //   slots: { customRender: 'action' },
  // },
});

const getBillType = (status) => {
  let text = '';
  if(status == 1) {
    text = '充值';
  } else if(status == 2){
    text = '提现';
  } else if(status == 3){
    text = '收益';
  } else if(status == 4){
    text = '佣金';
  }else if(status == 5){
    text = '余额支付';
  }
  return text;  
}

const getType = (status) => {
  let text = '';
  if(status == 1) {
    text = '银行卡';
  } else if(status == 2){
    text = '支付宝';
  } else if(status == 3){
    text = '微信';
  } else if(status == 4){
    text = '余额支付';
  } else if(status == 4){
    text = '三方支付';
  }
  return text;  
}

const getStatus = (status) => {
  let text = '';
  if(status == 10) {
    text = '未成功';
  } else if(status == 20){
    text = '已成功';
  }
  return text;  
}

// const handleCreate = () => {
//   console.log('handleCreate')
//   go('/goods/sell_add')
// }

// function handleEdit(record: Recordable) {
//   console.log(record);
// }

// function handleDelete(record: Recordable) {
//   console.log(record);
// }
</script>
