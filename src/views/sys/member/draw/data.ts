import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '用户手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '用户名称',
    dataIndex: 'user_name',
    width: 120,
  },
  {
    title: '产品ID',
    dataIndex: 'goods_id',
    width: 120,
  },
  {
    title: '产品名称',
    dataIndex: 'goods_name',
    width: 120,
  },
  {
    title: '产品价格',
    dataIndex: 'price',
    width: 120,
  },
  {
    title: '藏品数量',
    dataIndex: 'goods_sku_count',
    width: 120,
  },
  {
    title: '抽奖状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
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
    field: 'user_id',
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
  {
    field: 'goods_id',
    label: '产品ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '抽奖状态',
    component: 'Select',
    defaultValue: '0',
    colProps: { span: 8 },
    componentProps: {
      options: [
        {
          label: '全部',
          value: '0',
          key: '0',
        },
        {
          label: '待查看',
          value: '10',
          key: '10',
        },
        {
          label: '已查看',
          value: '20',
          key: '20',
        },
        {
          label: '已赠送',
          value: '30',
          key: '30',
        },
      ],
    },
  },
];
