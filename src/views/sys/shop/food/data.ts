import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '店铺ID',
    dataIndex: 'shop_id',
    width: 120,
  },
  {
    title: '菜品名字',
    dataIndex: 'food_name',
    width: 120,
  },
  {
    title: '菜系介绍',
    dataIndex: 'info',
    width: 120,
  },
  {
    title: '推荐状态',
    dataIndex: 'is_tui',
    width: 120,
    slots: { customRender: 'is_tui' },
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
    slots: { customRender: 'created_at' },
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    width: 180,
    slots: { customRender: 'updated_at' },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'shop_id',
    label: '店铺ID',
    component: 'Input',
    colProps: { span: 8 },
  }
];
