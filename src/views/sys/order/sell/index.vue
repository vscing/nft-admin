<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增发售商品</a-button>
      </template> -->
      <template #img="{ record }">
        <AntImage
          :width="53"
          :src="record.img"
        />
      </template>
      <template #status="{ record }">
        <span>{{ getStatusText(record.status)}}</span>
      </template>
      <template #presell_time="{ record }">
        <span>{{ columnToDateTime(record.presell_time) }}</span>
      </template>
      <template #state="{ record }">
        <span>{{ record.state ? '显示' : '隐藏' }}</span>
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

import { Image as AntImage } from 'ant-design-vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getGoodsList } from '/@/api/sys/goods';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
const searchInfo = reactive<Recordable>({});
const [registerTable, { reload, updateTableDataRecord }] = useTable({
  title: '预售产品列表',
  api: getGoodsList,
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
  console.log('handleCreate')
  go('/goods/sell_add')
}

function handleEdit(record: Recordable) {
  console.log(record);
}

function handleDelete(record: Recordable) {
  console.log(record);
}
</script>
