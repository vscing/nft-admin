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
      path: 'user_blind/:id',
      name: 'UserBlind',
      meta: {
        hideMenu: true,
        title: '会员盲盒',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/user',
      },
      component: () => import('/@/views/sys/member/user/Blind.vue'),
    },
    {
      path: 'user_coupon/:id',
      name: 'UserCoupon',
      meta: {
        hideMenu: true,
        title: '会员优惠券',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/user',
      },
      component: () => import('/@/views/sys/member/user/Coupon.vue'),
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
    },
    {
      path: 'withdraw',
      name: 'MemberWithdraw',
      meta: {
        title: '账户B提现',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/member/withdraw/index.vue'),
    },
    {
      path: 'awithdraw',
      name: 'AMemberWithdraw',
      meta: {
        title: '账户A提现',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/member/awithdraw/index.vue'),
    },
    {
      path: 'asplit',
      name: 'AMemberSplit',
      meta: {
        title: '账户A分账',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/member/split/index.vue'),
    },
    {
      path: 'withdraw_detail/:id',
      name: 'MemberWithdrawDetail',
      meta: {
        hideMenu: true,
        title: '提现详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/member/withdraw',
      },
      component: () => import('/@/views/sys/member/withdraw/Detail.vue'),
    },
    {
      path: 'draw',
      name: 'MemberDraw',
      meta: {
        title: '用户抽签',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/member/draw/index.vue'),
    },
    {
      path: 'coupon',
      name: 'MemberCoupon',
      meta: {
        title: '用户优惠券',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/member/coupon/index.vue'),
    },
  ],
};

export default member;
