import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '奖品名称',
    dataIndex: 'goods_title',
    width: 120,
  },
  {
    title: '奖品封面图',
    dataIndex: 'goods_img',
    width: 120,
    slots: { customRender: 'goods_img' },
  },
  {
    title: '中奖概率(%)',
    dataIndex: 'rate',
    width: 120,
  },
  {
    title: '总数',
    dataIndex: 'num',
    width: 120,
  },
  {
    title: '剩余总数',
    dataIndex: 'overplus_num',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: 120,
    slots: { customRender: 'state' },
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
    slots: { customRender: 'created_at' },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'goods_title',
    label: '奖品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'state',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '正常', value: '1' },
        { label: '禁用', value: '2' },
      ],
    },
    colProps: { span: 8 },
  },
];
