import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '商品编号',
    dataIndex: 'goods_number',
    width: 120,
  },
  {
    title: '商品标题',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '买家ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '买家昵称',
    dataIndex: 'user_name',
    width: 120,
  },
  {
    title: '订单号',
    dataIndex: 'order_number',
    width: 120,
  },
  {
    title: '商品总金额',
    dataIndex: 'order_price',
    width: 120,
  },
  {
    title: '支付方式',
    dataIndex: 'payment_type',
    width: 120,
    slots: { customRender: 'payment_type' },
  },
  {
    title: '卖家id',
    dataIndex: 'seller_id',
    width: 120,
  },
  {
    title: '卖家昵称',
    dataIndex: 'seller_name',
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
    label: '商品标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'order_number',
    label: '订单号',
    component: 'Input',
    colProps: { span: 8 },
  }
];
