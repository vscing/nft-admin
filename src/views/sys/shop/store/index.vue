<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">注册店铺</a-button>
      </template>
      <template #avatar="{ record }">
        <AntImage
          :width="53"
          :src="record.avatar"
        />
      </template>
      <template #is_new="{ record }">
        <span>{{ record.is_new == 1 ? '新':'旧'}}</span>
      </template>
      <template #is_chain="{ record }">
        <span>{{ record.is_chain == 1 ? '连锁':'非连锁' }}</span>
      </template>
      <template #is_hot="{ record }">
        <span>{{ record.is_hot == 1 ? '热门':'非热门' }}</span>
      </template>
      <template #state="{ record }">
        <span>{{ record.state == 1 ? '正常':'禁用' }}</span>
      </template>
      <template #status="{ record }">
        <span>{{ record.status == 1 ? '开店':'待审核' }}</span>
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
            icon: 'ant-design:question-circle-filled',
            color: 'error',
            tooltip: `${record.state == 1 ? '禁用':'解禁'}`,
            popConfirm: {
              title: `是否确认${record.state == 1 ? '禁用':'解禁'}`,
              confirm: handleState.bind(null, record),
            },
          },
          {
            icon: 'ant-design:question-circle-filled',
            color: 'error',
            tooltip: `${record.status == 1 ? '审核不通过':'审核通过'}`,
            popConfirm: {
              title: `是否确认${record.status == 1 ? '审核不通过':'审核通过'}`,
              confirm: handleStatus.bind(null, record),
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
import { getShopList, setStatus, setState } from '/@/api/sys/shop';
import { PageWrapper } from '/@/components/Page';
import { useMessage } from '/@/hooks/web/useMessage';

import { columns, searchFormSchema } from './data';
import { useGo } from '/@/hooks/web/usePage';
import { columnToDateTime } from '/@/utils/dateUtil';

const go = useGo();
const { createMessage } = useMessage();
const searchInfo = reactive<Recordable>({});
// , { reload, updateTableDataRecord }
const [registerTable,{ reload, updateTableDataRecord }] = useTable({
  title: '店铺列表',
  api: getShopList,
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
  go('/shop/store_add')
}

function handleEdit(record: Recordable) {
  go(`/shop/store_edit/${record.id}`)
}

async function handleState(record: Recordable) {
  const res = await setStatus({
    id: record.id, 
    state: record.state == 1 ? 0:1, 
  })
  if(res.data) {
    createMessage.success('操作成功');
    record.state = record.state == 1 ? 0:1;
    const result = updateTableDataRecord(record.id, record);
    console.log(result);
  } else {
    createMessage.error('操作失败');
    reload();
  }
}

async function handleStatus(record: Recordable) {
  const res = await setState({
    id: record.id, 
    status: record.status == 1 ? 0:1
  })
  if(res.data) {
    createMessage.success('操作成功');
    record.status = record.status == 1 ? 0:1;
    const result = updateTableDataRecord(record.id, record);
    console.log(result);
  } else {
    createMessage.error('操作失败');
    reload();
  }
}
</script>
