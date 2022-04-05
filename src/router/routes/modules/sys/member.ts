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
    }
  ],
};

export default member;
