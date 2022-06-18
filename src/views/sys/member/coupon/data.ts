import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '面额',
    dataIndex: 'amount',
    width: 120,
  },
  {
    title: 'logo',
    dataIndex: 'logo',
    width: 120,
    slots: { customRender: 'logo' },
  },
  {
    title: 'url',
    dataIndex: 'link',
    width: 120,
  },
  {
    title: '状态',
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
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
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
          label: '上架',
          value: '1',
          key: '1',
        },
        {
          label: '下架',
          value: '2',
          key: '2',
        }
      ],
    },
  },
];
