import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '用户手机号',
    dataIndex: 'user_phone',
    width: 120,
  },
  {
    title: '餐厅名称',
    dataIndex: 'restaurant_name',
    width: 240,
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 240,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '是否连锁',
    dataIndex: 'is_chain',
    width: 120,
    slots: { customRender: 'is_chain' },
  },
  {
    title: '几家店面',
    dataIndex: 'num',
    width: 120,
  },
  {
    title: '人均消费',
    dataIndex: 'average_money',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    slots: { customRender: 'created_at' },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '用户ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'state',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '显示', value: '1' },
  //       { label: '隐藏', value: '2' },
  //     ],
  //   },
  //   colProps: { span: 8 },
  // },
  {
    field: 'time',
    component: 'RangePicker',
    label: '时间',
    colProps: {
      span: 8,
    },
  },
];
