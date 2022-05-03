import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '认证类型',
    dataIndex: 'type',
    width: 120,
    slots: { customRender: 'type' },
  },
  {
    title: '卖家订单号',
    dataIndex: 'order_number',
    width: 120,
  },
  {
    title: '三方订单号',
    dataIndex: 'pay_order_number',
    width: 120,
  },
  {
    title: '订单状态',
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
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未支付', value: '10' },
        { label: '已支付', value: '20' },
      ],
    },
    colProps: { span: 8 },
  },
];
