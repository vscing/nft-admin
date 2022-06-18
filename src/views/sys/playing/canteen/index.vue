<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #is_chain="{ record }">
        <span>{{ record.is_chain == 1 ? '是' : '否' }}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <template #action="{ record }">
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
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';
import { getRestaurantList } from '/@/api/sys/other';

const go = useGo();
console.log('%c [ go ]-50', 'font-size:13px; background:pink; color:#bf2c9f;', go)
const searchInfo = reactive<Recordable>({});
const [registerTable, { }] = useTable({
  title: '餐饮列表',
  api: getRestaurantList,
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
    if(info.time && info.time.length > 1) {
      info.startTime = info.time[0];
      info.endTime = info.time[1];
    }
    
    delete info.time;
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

// const handleDelete = async(record: Recordable) => {
//   const res = await delArticleInfo(record.id);
//   if(res) {
//     reload()
//   }
// }
</script>
