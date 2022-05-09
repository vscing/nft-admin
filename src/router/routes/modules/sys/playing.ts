import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const playing: AppRouteModule = {
  path: '/playing',
  name: 'Playing',
  component: LAYOUT,
  redirect: '/playing/compound',
  meta: {
    orderNo: 3,
    icon: 'ant-design:code-sandbox-outlined',
    title: '玩法管理',
  },
  children: [
    {
      path: 'compound',
      name: 'PlayingCompound',
      meta: {
        title: '合成规则',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/playing/compound/index.vue'),
    },
    {
      path: 'compound_add',
      name: 'PlayingCompoundAdd',
      meta: {
        hideMenu: true,
        title: '合成规则添加',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/compound',
      },
      component: () => import('/@/views/sys/playing/compound/Add.vue'),
    },
    {
      path: 'compound_edit/:id',
      name: 'PlayingCompoundEdit',
      meta: {
        hideMenu: true,
        title: '合成规则编辑',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/compound',
      },
      component: () => import('/@/views/sys/playing/compound/Edit.vue'),
    },
    {
      path: 'compound_sku/:pid',
      name: 'PlayingCompoundSku',
      meta: {
        hideMenu: true,
        title: '合成规则子添加',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/compound',
      },
      component: () => import('/@/views/sys/playing/compound-sku/index.vue'),
    },
    {
      path: 'compound_sku_add/:pid',
      name: 'PlayingCompoundSkuAdd',
      meta: {
        hideMenu: true,
        title: '合成规则子添加',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/compound',
      },
      component: () => import('/@/views/sys/playing/compound-sku/Add.vue'),
    },
    {
      path: 'compound_sku_edit/:id/:pid',
      name: 'PlayingCompoundSkuEdit',
      meta: {
        hideMenu: true,
        title: '合成规则子编辑',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/compound',
      },
      component: () => import('/@/views/sys/playing/compound-sku/Edit.vue'),
    },
    {
      path: 'blind',
      name: 'PlayingBlind',
      meta: {
        title: '盲盒列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/playing/blind/index.vue'),
    },
    {
      path: 'blind_add',
      name: 'PlayingBlindAdd',
      meta: {
        hideMenu: true,
        title: '盲盒奖品添加',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/blind',
      },
      component: () => import('/@/views/sys/playing/blind/Add.vue'),
    },
    {
      path: 'blind_edit/:id',
      name: 'PlayingBlindEdit',
      meta: {
        hideMenu: true,
        title: '盲盒奖品编辑',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/playing/blind',
      },
      component: () => import('/@/views/sys/playing/blind/Edit.vue'),
    },
  ],
};

export default playing;
