<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <!-- <a-button type="primary" @click="handleCreate">注册店铺</a-button> -->
      </template>
      <template #type="{ record }">
        <span>{{ record.type == 1 ? '指定券':'通用'}}</span>
      </template>
      <template #status="{ record }">
        <span>{{ record.status == 1 ? '开启':'关闭' }}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{ columnToDateTime(record.created_at) }}</span>
      </template>
      <template #updated_at="{ record }">
        <span>{{ columnToDateTime(record.updated_at) }}</span>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

// import { Image as AntImage } from 'ant-design-vue';
import { BasicTable, useTable } from '/@/components/Table';
import { getCouponList } from '/@/api/sys/shop';
import { PageWrapper } from '/@/components/Page';
// import { useMessage } from '/@/hooks/web/useMessage';

import { columns, searchFormSchema } from './data';
// import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

// const go = useGo();
// const { createMessage } = useMessage();
const searchInfo = reactive<Recordable>({});
// , { reload, updateTableDataRecord }
const [registerTable] = useTable({
  title: '店铺列表',
  api: getCouponList,
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

// const handleCreate = () => {
//   go('/shop/store_add')
// }

// function handleEdit(record: Recordable) {
//   go(`/shop/store_edit/${record.id}`)
// }

// async function handleStatus(record: Recordable) {
//   const res = await setState({
//     id: record.id, 
//     status: record.status == 1 ? 0:1
//   })
//   if(res.data) {
//     createMessage.success('操作成功');
//     record.status = record.status == 1 ? 0:1;
//     const result = updateTableDataRecord(record.id, record);
//     console.log(result);
//   } else {
//     createMessage.error('操作失败');
//     reload();
//   }
// }
</script>
