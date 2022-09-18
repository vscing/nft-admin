<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">增加菜系</a-button>
      </template>
      <template #is_tui="{ record }">
        <span>{{ record.is_tui == 1 ? '推荐':'非推荐'}}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <template #updated_at="{ record }">
        <span>{{ columnToDateTime(record.updated_at) }}</span>
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
            tooltip: `删除`,
            popConfirm: {
              title: `是否确认删除`,
              confirm: handleDel.bind(null, record),
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
import { getFootList, delFoot } from '/@/api/sys/shop';
import { PageWrapper } from '/@/components/Page';
import { useMessage } from '/@/hooks/web/useMessage';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
const { createMessage } = useMessage();
const searchInfo = reactive<Recordable>({});
// , { reload, updateTableDataRecord }
const [registerTable,{ reload }] = useTable({
  title: '店铺列表',
  api: getFootList,
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

const handleCreate = () => {
  go('/shop/food_add')
}

function handleEdit(record: Recordable) {
  go(`/shop/food_edit/${record.id}`)
}

async function handleDel(record: Recordable) {
  const res = await delFoot({
    id: record.id
  })
  if(res.data) {
    createMessage.success('操作成功');
  } else {
    createMessage.error('操作失败');
  }
  reload();
}
</script>
