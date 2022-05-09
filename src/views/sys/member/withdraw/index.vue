<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bill_type="{ record }">
        <span>{{ getBillType(record.bill_type)}}</span>
      </template>
      <template #payment="{ record }">
        <span>{{ getType(record.payment)}}</span>
      </template>
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
            icon: 'clarity:note-edit-line',
            tooltip: '详情',
            onClick: handleEdit.bind(null, record),
          },
          {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            tooltip: '已操作',
            popConfirm: {
              title: '是否确认已操作',
              confirm: handleDelete.bind(null, record),
            },
          },
          {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            tooltip: '解冻退款',
            popConfirm: {
              title: '是否确认解冻退款',
              confirm: handleDelete2.bind(null, record),
            },
          },
        ]" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getUserBill, setOperate, cancelOperate } from '/@/api/sys/user';
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
  actionColumn: {
    width: 120,
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
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
  }else if(status == 4){
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
  }
  return text;  
}

const getStatus = (status) => {
  let text = '';
  if(status == 10) {
    text = '待提现';
  } else if(status == 20){
    text = '已提现';
  } else if(status == 30){
    text = '已驳回';
  }
  return text;  
}

// const handleCreate = () => {
//   console.log('handleCreate')
//   go('/goods/sell_add')
// }

function handleEdit(record: Recordable) {
  go('/member/withdraw_detail/'+record.user_id)
}

const handleDelete = async(record: Recordable) => {
  const res = await setOperate({id: record.id})
    if(res.data) {
      record.is_operate = 2;
      const result = updateTableDataRecord(record.id, record);
      console.log(result);
    } else {
      reload();
    }
}

const handleDelete2 = async(record: Recordable) => {
  const res = await cancelOperate({id: record.id})
    if(res.data) {
      record.is_operate = 2;
      const result = updateTableDataRecord(record.id, record);
      console.log(result);
    } else {
      reload();
    }
}
</script>
