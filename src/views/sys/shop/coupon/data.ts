import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '优惠券名称',
    dataIndex: 'coupon_title',
    width: 120,
  },
  {
    title: '优惠券金额',
    dataIndex: 'coupon_price',
    width: 120,
  },
  {
    title: '可用金额',
    dataIndex: 'min_price',
    width: 120,
  },
  {
    title: '优惠券类型',
    dataIndex: 'type',
    width: 120,
    slots: { customRender: 'type' },
  },
  {
    title: '状态',
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
  // {
  //   field: 'phone',
  //   label: '手机号',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  // {
  //   field: 'nickname',
  //   label: '店铺名称',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // }
];
