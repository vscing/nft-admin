import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/sell',
  meta: {
    orderNo: 4,
    icon: 'ant-design:account-book-outlined',
    title: '订单管理',
  },
  children: [
    {
      path: 'sell',
      name: 'OrderSell',
      meta: {
        title: '发售订单',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/order/sell/index.vue'),
    },
    {
      path: 'sell_detail/:id',
      name: 'OrderSellDetail',
      meta: {
        hideMenu: true,
        title: '发售订单详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/order/sell',
      },
      component: () => import('/@/views/sys/order/sell/Detail.vue'),
    },
    {
      path: 'market',
      name: 'OrderMarket',
      meta: {
        title: '市场订单',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/order/market/index.vue'),
    },
    {
      path: 'market_detail/:id',
      name: 'OrderMarketDetail',
      meta: {
        hideMenu: true,
        title: '市场订单详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/order/market',
      },
      component: () => import('/@/views/sys/order/market/Detail.vue'),
    },

    {
      path: 'compound',
      name: 'OrderCompound',
      meta: {
        title: '合成订单',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/order/compound/index.vue'),
    },
    {
      path: 'compound_detail/:id',
      name: 'OrderCompoundDetail',
      meta: {
        hideMenu: true,
        title: '合成订单详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/order/compound',
      },
      component: () => import('/@/views/sys/order/compound/Detail.vue'),
    },
    {
      path: 'api_auth',
      name: 'OrderApiAuth',
      meta: {
        title: '认证订单',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/order/api-auth/index.vue'),
    },
    
  ],
};

export default order;
