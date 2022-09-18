import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '上级ID',
    dataIndex: 'pid',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '店铺名称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '门店主图',
    dataIndex: 'avatar',
    width: 120,
    slots: { customRender: 'avatar' },
  },
  {
    title: '店内电话',
    dataIndex: 'shop_phone',
    width: 120,
  },
  {
    title: '店铺分类',
    dataIndex: 'category',
    width: 120,
  },
  {
    title: '省',
    dataIndex: 'province',
    width: 120,
  },
  {
    title: '市',
    dataIndex: 'city',
    width: 120,
  },
  {
    title: '区',
    dataIndex: 'area',
    width: 120,
  },
  {
    title: '新旧状态',
    dataIndex: 'is_new',
    width: 120,
    slots: { customRender: 'is_new' },
  },
  {
    title: '连锁状态',
    dataIndex: 'is_chain',
    width: 120,
    slots: { customRender: 'is_chain' },
  },
  {
    title: '热门状态',
    dataIndex: 'is_hot',
    width: 120,
    slots: { customRender: 'is_hot' },
  },
  {
    title: '用户状态',
    dataIndex: 'state',
    width: 120,
    slots: { customRender: 'state' },
  },
  {
    title: '店铺状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
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
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '店铺名称',
    component: 'Input',
    colProps: { span: 8 },
  }
];
