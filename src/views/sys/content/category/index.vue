<template>
  <div class="p-4">
    <BasicTable
      @register="register"
      @edit-end="handleEditEnd"
      @edit-cancel="handleEditCancel"
      :beforeEditSubmit="beforeEditSubmit">
      <template #toolbar>
        <a-button type="primary" @click="expandAll">展开全部</a-button>
        <a-button type="primary" @click="collapseAll">折叠全部</a-button>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #state="{ record }">
        <span>{{record.state ? '显示':'隐藏'}}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{columnToDateTime(record.created_at)}}</span>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑分类',
              onClick: () => handleEdit(record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除分类',
              popConfirm: {
                title: '是否确认删除',
                confirm: () => handleDelete(record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <CategoryModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script setup lang="ts">
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getCategoryList, addCategoryInfo, updateCategoryInfo, delCategoryInfo, updateCategorySort } from '/@/api/sys/content';
import { columns } from './data';
import { useModal } from '/@/components/Modal';
import CategoryModal from './CategoryModal.vue';
import { ref } from 'vue';
import { columnToDateTime } from '/@/utils/dateUtil';

const [registerModal, { openModal }] = useModal();
const dataSource = ref<any[]>([]);

const [register, { expandAll, collapseAll, updateTableDataRecord }] = useTable({
  title: '分类管理',
  rowKey: 'id',
  isTreeTable: true,
  columns: columns,
  showTableSetting: true,
  tableSetting: {
    redo: false
  },
  bordered: true,
  actionColumn: {
    width: 120,
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
  // rowSelection: {
  //   type: 'checkbox',
  //   getCheckboxProps(record: Recordable) {
  //     // Demo: 第一行（id为0）的选择框禁用
  //     if (record.id === '0') {
  //       return { disabled: true };
  //     } else {
  //       return { disabled: false };
  //     }
  //   },
  // },
  titleHelpMessage: '分类管理',
  dataSource: dataSource,
  pagination: false,
});

/**
 * 列表
 */
const categoryList = async () => {
  const res = await getCategoryList({});
  dataSource.value = res?.tree || [];
}

categoryList();

/**
 * 新建弹窗
 */
const handleCreate = () => {
  openModal(true, {
    isUpdate: false,
  });
}

/**
 * 编辑弹窗
 */
const handleEdit = (record: Recordable) => {
  record.state = record.state ? true:false;
  openModal(true, {
    record,
    isUpdate: true,
  });
}

/**
 * 删除
 */
const handleDelete = async(record: Recordable) => {
  await delCategoryInfo(record.id);
  categoryList();
}

/**
 * 编辑回调
 */
const handleSuccess = async({ isUpdate, values }) => {
  values.state = values.state ? 1:0;
  if (isUpdate) {
    await updateCategoryInfo({
      id: values.id,
      name: values.name,
      pid: values.pid,
      sort: values.sort,
      state: values.state,
    });
    // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
    const result = updateTableDataRecord(values.id, values);
    console.log(result);
  } else {
    await addCategoryInfo({
      name: values.name,
      pid: values.pid,
      sort: values.sort,
      state: values.state,
    });
    categoryList();
  }
}

/**
 * 单元格修改结束
 */
const handleEditEnd = ({ record, index, key, value }: Recordable) => {
  console.log(record, index, key, value);
  return false;
}

/**
 * 单元格修改提交
 */
const beforeEditSubmit = async({ record, index, key, value }) => {
  console.log('单元格数据正在准备提交', { record, index, key, value });
  return await updateCategorySort(record.id, value);
}

/**
 * 单元格修改取消
 */
const handleEditCancel = () => {
  console.log('cancel');
}
</script>
