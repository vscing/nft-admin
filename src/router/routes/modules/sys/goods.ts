import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const goods: AppRouteModule = {
  path: '/goods',
  name: 'Goods',
  component: LAYOUT,
  redirect: '/goods/list',
  meta: {
    orderNo: 3,
    icon: 'ant-design:shopping-outlined',
    title: '商品管理',
  },
  children: [
    {
      path: 'list',
      name: 'goodsList',
      meta: {
        title: '商品列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/goods/list/index.vue'),
    },
    {
      path: 'category',
      name: 'goodsCategory',
      meta: {
        title: '商品分类',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/goods/category/index.vue'),
    },
    
    
  ],
};

export default goods;
