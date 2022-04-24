import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '商品名称',
    dataIndex: 'title',
    width: 120,
    slots: { customRender: 'title' },
  },
  {
    title: '封面图',
    dataIndex: 'img',
    width: 120,
    slots: { customRender: 'img' },
  },
  {
    title: '商品金额',
    dataIndex: 'goods_price',
    width: 120,
  },
  {
    title: '商品编号',
    dataIndex: 'goods_number',
    width: 120,
  },
  {
    title: '拥有者ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '拥有者昵称',
    dataIndex: 'user_name',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
  },
  {
    title: '排序',
    dataIndex: 'sort',
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
    field: 'title',
    label: '商品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '商品状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '待寄售', value: '10' },
        { label: '已寄售', value: '20' },
        // { label: '寄售中', value: '30' },
        // { label: '已下架', value: '40' },
        // { label: '被拒绝', value: '50' },
        // { label: '锁定中', value: '60' },
      ],
    },
    colProps: { span: 8 },
  },
];
