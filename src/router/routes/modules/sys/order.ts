import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/user',
  meta: {
    orderNo: 4,
    icon: 'ant-design:account-book-outlined',
    title: '订单管理',
  },
  children: [
    {
      path: 'user',
      name: 'UserManagement1',
      meta: {
        title: '会员列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/member/user/index.vue'),
    },
    {
      path: 'user_detail/:id',
      name: 'UserDetail1',
      meta: {
        hideMenu: true,
        title: '会员详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/user',
      },
      component: () => import('/@/views/sys/member/user/UserDetail.vue'),
    },
    
    
  ],
};

export default order;
