<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增盲盒</a-button>
      </template>
      <template #goods_img="{ record }">
        <AntImage
          :width="53"
          :src="record.goods_img"
        />
      </template>
      <template #state="{ record }">
        <span>{{ getStateText(record.state)}}</span>
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

import { Image as AntImage } from 'ant-design-vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getBlindList, delBlindInfo } from '/@/api/sys/goods';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();

const searchInfo = reactive<Recordable>({});
// , { reload, updateTableDataRecord }
const [registerTable, { reload }] = useTable({
  title: '盲盒列表',
  api: getBlindList,
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

const getStateText = (state) => {
  let text = '';
  if(state == 1) {
    text = '正常';
  } else if(state == 2){
    text = '禁用';
  }
  return text;  
}

const handleCreate = () => {
  go('/goods/blind_add')
}

const handleEdit = (record: Recordable) => {
  go(`/goods/blind_edit/${record.id}`)
}

const handleDelete = async(record: Recordable) => {
  const res = await delBlindInfo(record.id);
  if(res) {
    reload();
  }
}
</script>
