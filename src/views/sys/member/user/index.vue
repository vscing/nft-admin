<template>
  <PageWrapper dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #lastTime="{ record }">
        <span>{{columnToDateTime(record.login_at ? record.login_at : record.updated_at)}}</span>
      </template>
      <template #created_at="{ record }">
        <span>{{columnToDateTime(record.created_at)}}</span>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="getActionList(record)"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getUserList, updateState } from '/@/api/sys/member';
  import { PageWrapper } from '/@/components/Page';
  import { columns, searchFormSchema } from './user.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { columnToDateTime } from '/@/utils/dateUtil';

  const go = useGo();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload, updateTableDataRecord }] = useTable({
    title: '用户列表',
    api: getUserList,
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

  // 操作配置
  const getActionList = (record: Recordable) => {
    let action: any[] = [
      {
        icon: 'clarity:info-standard-line',
        tooltip: '用户详情',
        onClick: handleView.bind(null, record),
      }
    ];
    if(record.state) {
      action.push({
        icon: 'ant-design:lock-outlined',
        color: 'error',
        tooltip: '禁用此账号',
        popConfirm: {
          title: '是否禁用此账号',
          confirm: handleState.bind(null, record, 0),
        },
      })
    } else {
      action.push({
        icon: 'ant-design:unlock-outlined',
        color: 'success',
        tooltip: '是否解禁此账号',
        popConfirm: {
          title: '是否解禁此账号',
          confirm: handleState.bind(null, record, 1),
        }
      })
    }
    return action;
  }

  // 封号解号
  const handleState = async (record: Recordable, state) => {
    const res = await updateState(record.id, state)
    if(res.data) {
      record.state = state;
      const result = updateTableDataRecord(record.id, record);
      console.log(result);
    } else {
      reload();
    }
  }

  // 详情页
  const handleView = (record: Recordable) => {
    go('/member/user_detail/' + record.id);
  }
</script>
