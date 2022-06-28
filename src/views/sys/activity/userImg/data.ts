import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 120,
  },
  {
    title: '用户手机号',
    dataIndex: 'user_phone',
    width: 120,
  },
  {
    title: '公众号截图',
    dataIndex: 'img1_url',
    width: 120,
    slots: { customRender: 'img1_url' },
  },
  {
    title: '社群截图',
    dataIndex: 'img2_url',
    width: 120,
    slots: { customRender: 'img2_url' },
  },
  {
    title: '朋友圈截图',
    dataIndex: 'img3_url',
    width: 120,
    slots: { customRender: 'img3_url' },
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
    field: 'user_id',
    label: '用户ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '用户手机号',
    component: 'Input',
    colProps: { span: 8 },
  }
];
