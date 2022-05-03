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
    title: '合成信息',
    dataIndex: 'play_name',
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
  // {
  //   field: 'status',
  //   label: '商品状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '待上架', value: '10' },
  //       { label: '预售中', value: '20' },
  //       { label: '售卖中', value: '30' },
  //       { label: '已售罄', value: '40' },
  //     ],
  //   },
  //   colProps: { span: 8 },
  // },
  {
    field: 'user_id',
    label: '用户id',
    component: 'Input',
    colProps: { span: 8 },
  }
];
