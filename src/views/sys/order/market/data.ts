import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '买家id',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '买家昵称',
    dataIndex: 'user_name',
    width: 120,
  },
  {
    title: '商品id',
    dataIndex: 'goods_sku_id',
    width: 120,
  },
  {
    title: '商品状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
  },
  {
    title: '订单号',
    dataIndex: 'order_number',
    width: 120,
  },
  {
    title: '商品总金额(不含优惠折扣)',
    dataIndex: 'total_price',
    width: 120,
  },
  {
    title: '商品数量',
    dataIndex: 'total_num',
    width: 120,
  },
  {
    title: '订单金额(含优惠折扣)',
    dataIndex: 'order_price',
    width: 120,
  },
  {
    title: '支付方式',
    dataIndex: 'payment_type',
    width: 120,
  },
  {
    title: '付款状态',
    dataIndex: 'payment_status',
    width: 120,
    slots: { customRender: 'payment_status' },
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
    field: 'status',
    label: '商品状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '待上架', value: '10' },
        { label: '预售中', value: '20' },
        { label: '售卖中', value: '30' },
        { label: '已售罄', value: '40' },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'title',
    label: '订单号',
    component: 'Input',
    colProps: { span: 8 },
  }
];
