<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #type="{ record }">
        <span>{{ getType(record.type)}}</span>
      </template>
      <template #status="{ record }">
        <span>{{ getStatus(record.status)}}</span>
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
import { getApiAuthList } from '/@/api/sys/order';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
console.log('%c [ go ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', go)
const searchInfo = reactive<Recordable>({});
const [registerTable] = useTable({
  title: '认证支付列表',
  api: getApiAuthList,
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

const getType = (type) => {
  let text = '';
  if(type == 1) {
    text = '银行卡';
  } else if(type == 2){
    text = '身份证';
  }
  return text;  
}

const getStatus = (status) => {
  let text = '';
  if(status == 10) {
    text = '未支付';
  } else if(status == 20){
    text = '已支付';
  }
  return text;  
}
</script>
