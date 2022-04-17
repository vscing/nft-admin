import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '商品名称',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '封面图',
    dataIndex: 'img',
    width: 120,
    slots: { customRender: 'img' },
  },
  {
    title: '商品金额',
    dataIndex: 'price',
    width: 120,
  },
  {
    title: '商品库存',
    dataIndex: 'stock',
    width: 120,
  },
  {
    title: '商品预售时间',
    dataIndex: 'presell_time',
    width: 120,
    slots: { customRender: 'presell_time' },
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    slots: { customRender: 'status' },
  },
  {
    title: '商品预售总数',
    dataIndex: 'total_stock',
    width: 120,
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
        { label: '待上架', value: '10' },
        { label: '预售中', value: '20' },
        { label: '售卖中', value: '30' },
        { label: '已售罄', value: '40' },
      ],
    },
    colProps: { span: 8 },
  },
];
