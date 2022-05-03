import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const goods: AppRouteModule = {
  path: '/goods',
  name: 'Goods',
  component: LAYOUT,
  redirect: '/goods/category',
  meta: {
    orderNo: 3,
    icon: 'ant-design:shopping-outlined',
    title: '商品管理',
  },
  children: [
    {
      path: 'category',
      name: 'GoodsCategory',
      meta: {
        title: '商品分类',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/goods/category/index.vue'),
    },
    {
      path: 'sell',
      name: 'GoodsSell',
      meta: {
        title: '发售商品',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/goods/sell/index.vue'),
    },
    {
      path: 'sell_add',
      name: 'GoodsSellAdd',
      meta: {
        hideMenu: true,
        title: '发售商品添加',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/goods/sell',
      },
      component: () => import('/@/views/sys/goods/sell/Add.vue'),
    },
    {
      path: 'sell_edit/:id',
      name: 'GoodsSellEdit',
      meta: {
        hideMenu: true,
        title: '发售商品编辑',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/goods/sell',
      },
      component: () => import('/@/views/sys/goods/sell/Edit.vue'),
    },
    {
      path: 'market',
      name: 'GoodsMarket',
      meta: {
        title: '市场商品列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/goods/market/index.vue'),
    },
    {
      path: 'market_detail/:id',
      name: 'GoodsMarketDetail',
      meta: {
        hideMenu: true,
        title: '市场商品详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/goods/market',
      },
      component: () => import('/@/views/sys/goods/market/Detail.vue'),
    },
  ],
};

export default goods;
