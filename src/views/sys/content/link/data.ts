import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'createTime',
    width: 120,
    slots: { customRender: 'state' },
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
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 8 },
  },
];
