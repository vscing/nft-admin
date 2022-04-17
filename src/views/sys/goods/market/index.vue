<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #title="{ record }">
        <span>#{{record.goods_number}} {{record.title}}</span>
      </template>
      <template #img="{ record }">
        <AntImage
          :width="53"
          :src="record.img"
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
            icon: 'clarity:info-standard-line',
            tooltip: '查看详情',
            onClick: handleView.bind(null, record),
          }
        ]" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { Image as AntImage } from 'ant-design-vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getGoodsSkuList } from '/@/api/sys/goods';
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
  title: '市场产品列表',
  api: getGoodsSkuList,
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
    text = '待寄售';
  } else if(status == 20){
    text = '待审核';
  } else if(status == 30){
    text = '寄售中';
  } else if(status == 40){
    text = '已下架';
  } else if(status == 50){
    text = '被拒绝';
  } else if(status == 60){
    text = '锁定中';
  }
  return text;  
}

const handleView = (record: any) => {
  go(`/goods/market_detail/${record.id}`)
}
</script>
