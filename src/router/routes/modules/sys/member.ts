import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const member: AppRouteModule = {
  path: '/member',
  name: 'Member',
  component: LAYOUT,
  redirect: '/member/user',
  meta: {
    orderNo: 4,
    icon: 'ant-design:user-outlined',
    title: '会员管理',
  },
  children: [
    {
      path: 'user',
      name: 'UserManagement',
      meta: {
        title: '会员列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/member/user/index.vue'),
    },
    {
      path: 'user_detail/:id',
      name: 'UserDetail',
      meta: {
        hideMenu: true,
        title: '会员详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/user',
      },
      component: () => import('/@/views/sys/member/user/UserDetail.vue'),
    },
    {
      path: 'user_grant/:id',
      name: 'UserGrant',
      meta: {
        hideMenu: true,
        title: '会员空投',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/user',
      },
      component: () => import('/@/views/sys/member/user/Grant.vue'),
    },
    {
      path: 'bill',
      name: 'MemberBill',
      meta: {
        title: '用户账单',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/member/bill/index.vue'),
    },
    {
      path: 'bill_detail/:id',
      name: 'MemberBillDetail',
      meta: {
        hideMenu: true,
        title: '账单详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/bill',
      },
      component: () => import('/@/views/sys/member/bill/Detail.vue'),
    }
  ],
};

export default member;
