<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">轮播图新增</a-button>
      </template>
      <template #img="{ record }">
        <AntImage
          :width="53"
          :src="record.img"
        />
      </template>
      <template #state="{ record }">
        <span>{{ record.state == 1 ? '显示' : '隐藏' }}</span>
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
import { getBannerList, delBannerInfo } from '/@/api/sys/content';
import { PageWrapper } from '/@/components/Page';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
const searchInfo = reactive<Recordable>({});
const [registerTable, { reload }] = useTable({
  title: '轮播图列表',
  api: getBannerList,
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
  go('/content/banner_add')
}

function handleEdit(record: Recordable) {
  go('/content/banner_edit/' + record.id)
}

const handleDelete = async(record: Recordable) => {
  const res = await delBannerInfo(record.id);
  if(res) {
    reload()
  }
}
</script>
