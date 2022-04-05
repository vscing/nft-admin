import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '分类名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: 120,
    slots: { customRender: 'state' },
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 200,
    edit: true,
    // 默认必填校验
    editRule: true,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
    slots: { customRender: 'created_at' },
  }
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分类名称',
    component: 'Input',
    helpMessage: ['分类名称不能重复'],
    rules: [
      {
        required: true,
        message: '请输入分类名称',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'pid',
    label: '父级分类',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'sort',
    label: '分类排序',
    component: 'Input'
  },
  {
    field: 'state',
    label: '分类状态',
    component: 'Switch'
  },
];
