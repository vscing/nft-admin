import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '账单名称',
    dataIndex: 'bill_name',
    width: 120,
  },
  {
    title: '账单类型',
    dataIndex: 'bill_type',
    width: 120,
    slots: { customRender: 'bill_type' },
  },
  {
    title: '账单金额',
    dataIndex: 'bill_money',
    width: 120,
  },
  {
    title: '订单号',
    dataIndex: 'order_number',
    width: 120,
  },
  {
    title: '支付状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
  },
  {
    title: '支付方式',
    dataIndex: 'payment',
    width: 120,
    slots: { customRender: 'payment' },
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
    field: 'bill_name',
    label: '账单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'order_number',
    label: '订单号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '账单状态',
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
          label: '未完成',
          value: '10',
          key: '10',
        },
        {
          label: '已完成',
          value: '20',
          key: '20',
        },
      ],
    },
  },
  {
    field: 'bill_type',
    label: '账单类型',
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
          label: '充值',
          value: '1',
          key: '1',
        },
        {
          label: '提现',
          value: '2',
          key: '2',
        },
        {
          label: '收益',
          value: '3',
          key: '3',
        },
        {
          label: '佣金',
          value: '4',
          key: '4',
        },
        {
          label: '余额支付',
          value: '5',
          key: '5',
        },
      ],
    },
  },
];
