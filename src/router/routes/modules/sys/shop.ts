import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const shop: AppRouteModule = {
  path: '/shop',
  name: 'Shop',
  component: LAYOUT,
  redirect: '/shop/store',
  meta: {
    orderNo: 4,
    icon: 'ant-design:shop-outlined',
    title: '食艺汇商家',
  },
  children: [
    {
      path: 'store',
      name: 'ShopStore',
      meta: {
        title: '店铺列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/shop/store/index.vue'),
    },
    {
      path: 'store_add',
      name: 'ShopStoreAdd',
      meta: {
        hideMenu: true,
        title: '新增店铺',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shop/store',
      },
      component: () => import('/@/views/sys/shop/store/Add.vue'),
    },
    {
      path: 'store_edit/:id',
      name: 'ShopStoreEdit',
      meta: {
        hideMenu: true,
        title: '编辑店铺',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shop/store',
      },
      component: () => import('/@/views/sys/shop/store/Edit.vue'),
    },
    {
      path: 'food',
      name: 'ShopFood',
      meta: {
        title: '菜系列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/shop/food/index.vue'),
    },
    {
      path: 'food_add',
      name: 'ShopFoodAdd',
      meta: {
        hideMenu: true,
        title: '新增菜系',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shop/food',
      },
      component: () => import('/@/views/sys/shop/food/Add.vue'),
    },
    {
      path: 'food_edit/:id',
      name: 'ShopFoodEdit',
      meta: {
        hideMenu: true,
        title: '编辑菜系',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shop/food',
      },
      component: () => import('/@/views/sys/shop/food/Edit.vue'),
    },
    {
      path: 'coupon',
      name: 'ShopCoupon',
      meta: {
        title: '优惠券列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/shop/coupon/index.vue'),
    },
    {
      path: 'activity',
      name: 'ShopActivity',
      meta: {
        title: '优惠活动列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/shop/activity/index.vue'),
    },
    {
      path: 'activity_edit/:id',
      name: 'ShopActivityEdit',
      meta: {
        hideMenu: true,
        title: '编辑优惠活动',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shop/activity',
      },
      component: () => import('/@/views/sys/shop/activity/Edit.vue'),
    },
  ],
};

export default shop;
