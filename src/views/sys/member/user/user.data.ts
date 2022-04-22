import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  // {
  //   title: '头像',
  //   dataIndex: 'avatar',
  //   width: 120,
  // },
  {
    title: '钱包地址',
    dataIndex: 'polygon_address',
    width: 120,
  },
  {
    title: '实名认证状态',
    dataIndex: 'real_name',
    width: 180,
  },
  {
    title: '最后登录时间',
    dataIndex: 'lastTime',
    width: 200,
    slots: { customRender: 'lastTime' },
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 200,
    slots: { customRender: 'created_at' },
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'is_name',
    label: '是否实名认证',
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
          label: '已认证',
          value: '1',
          key: '1',
        },
        {
          label: '未认证',
          value: '2',
          key: '2',
        }
      ],
    },
  },
  {
    field: 'is_bank',
    label: '是否绑定银行卡',
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
          label: '已绑定',
          value: '1',
          key: '1',
        },
        {
          label: '未绑定',
          value: '2',
          key: '2',
        }
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
