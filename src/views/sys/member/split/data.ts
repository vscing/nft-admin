import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '订单号',
    dataIndex: 'order_number',
    width: 200,
  },
  {
    title: '拆分订单号',
    dataIndex: 'split_number',
    width: 200,
  },
  {
    title: '分账状态',
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
          label: '失败',
          value: '10',
          key: '10',
        },
        {
          label: '成功',
          value: '20',
          key: '20',
        }
      ],
    },
  },
];
