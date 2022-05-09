<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增合成规则</a-button>
      </template>
      <template #goods_img="{ record }">
        <AntImage
          :width="53"
          :src="record.goods_img"
        />
      </template>
      <template #status="{ record }">
        <span>{{ getStatusText(record.status)}}</span>
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
            icon: 'clarity:note-edit-line',
            tooltip: '编辑子规则',
            onClick: handleSon.bind(null, record),
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
import { getPlayList } from '/@/api/sys/goods';
import { PageWrapper } from '/@/components/Page';
import { useMessage } from '/@/hooks/web/useMessage';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
const { createMessage } = useMessage();
const searchInfo = reactive<Recordable>({});
// , { reload, updateTableDataRecord }
const [registerTable] = useTable({
  title: '合成规则列表',
  api: getPlayList,
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

const getStatusText = (status) => {
  let text = '';
  if(status == 10) {
    text = '待上架';
  } else if(status == 20){
    text = '预售中';
  } else if(status == 30){
    text = '售卖中';
  } else if(status == 40){
    text = '已售罄';
  }
  return text;  
}

const handleCreate = () => {
  go('/playing/compound_add')
}

function handleEdit(record: Recordable) {
  go(`/playing/compound_edit/${record.id}`)
}

function handleSon(record: Recordable) {
  go(`/playing/compound_sku/${record.id}`)
}

function handleDelete(record: Recordable) {
  console.log(record);
  createMessage.warning('暂不能删除');
}
</script>
