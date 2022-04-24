import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '真实姓名',
    dataIndex: 'real_name',
    width: 120,
  },
  {
    title: '用户支付宝账户',
    dataIndex: 'alipay_account',
    width: 240,
  },
  // {
  //   title: '用户支银行卡号',
  //   dataIndex: 'bank_card',
  //   width: 120,
  //   slots: { customRender: 'bank_card' },
  // },
  {
    title: '账单名称',
    dataIndex: 'bill_name',
    width: 120,
  },
  {
    title: '账单类型',
    dataIndex: 'bill_type',
    width: 120,
    slots: { customRender: 'bill_type' },
  },
  {
    title: '账单金额',
    dataIndex: 'bill_money',
    width: 120,
  },
  {
    title: '订单号',
    dataIndex: 'order_number',
    width: 120,
  },
  {
    title: '支付方式',
    dataIndex: 'payment',
    width: 120,
    slots: { customRender: 'payment' },
  },
  {
    title: '是否操作',
    dataIndex: 'is_operate',
    width: 120,
    slots: { customRender: 'is_operate' },
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
    field: 'bill_name',
    label: '账单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'order_number',
    label: '订单号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'bill_type',
    label: '账单类型',
    component: 'Select',
    defaultValue: '2',
    colProps: { span: 8 },
    componentProps: {
      options: [
        {
          label: '全部',
          value: '0',
          key: '0',
        },
        {
          label: '充值',
          value: '1',
          key: '1',
        },
        {
          label: '提现',
          value: '2',
          key: '2',
        },
        {
          label: '收益',
          value: '3',
          key: '3',
        },
        {
          label: '佣金',
          value: '4',
          key: '4',
        },
        {
          label: '余额支付',
          value: '5',
          key: '5',
        },
      ],
    },
  },
];

export const bankCardColumns: any[] = [
  {
    title: '银行',
    dataIndex: 'bank_name',
    width: 120,
  },
  {
    title: '开户行',
    dataIndex: 'open_bank_name',
    width: 120,
  },
  {
    title: '卡号',
    dataIndex: 'card_number',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '姓名',
    dataIndex: 'phone',
    width: 120,
  },
];

export const userColumns: any[] = [
  {
    title: '用户ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '真实姓名',
    dataIndex: 'real_name',
    width: 120,
  },
  {
    title: '身份证号',
    dataIndex: 'id_number',
    width: 120,
  },
  
];
