import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '优惠劵ID',
    dataIndex: 'coupon_id',
    width: 120,
  },
  {
    title: '店铺ID',
    dataIndex: 'shop_id',
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
    title: '可接待人数',
    dataIndex: 'num',
    width: 120,
  },
  {
    title: '限制优惠券数量',
    dataIndex: 'limit',
    width: 120,
    slots: { customRender: 'limit' },
  },
  {
    title: '开始时间',
    dataIndex: 'start_time',
    width: 120,
    slots: { customRender: 'start_time' },
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    width: 120,
    slots: { customRender: 'end_time' },
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
  {
    field: 'shop_id',
    label: '店铺ID',
    component: 'Input',
    colProps: { span: 8 },
  }
];
