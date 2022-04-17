import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '奖励产品标题',
    dataIndex: 'goods_title',
    width: 120,
  },
  {
    title: '奖励产品图片',
    dataIndex: 'goods_img',
    width: 120,
    slots: { customRender: 'goods_img' },
  },
  {
    title: '奖励产品数量',
    dataIndex: 'count',
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
    field: 'goods_title',
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
        { label: '待上线', value: '10' },
        { label: '已上线', value: '20' },
        { label: '已下线', value: '30' },
      ],
    },
    colProps: { span: 8 },
  },
];
