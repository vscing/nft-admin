import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/config',
  meta: {
    orderNo: 1,
    icon: 'ion:settings-outline',
    title: t('routes.sys.system.moduleName'),
  },
  children: [
    {
      path: 'config',
      name: 'ConfigManagement',
      meta: {
        title: t('routes.sys.system.config'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/system/config/index.vue'),
    },
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.sys.system.account'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/system/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: t('routes.sys.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/sys/system/account/AccountDetail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.sys.system.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/system/role/index.vue'),
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.sys.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/system/menu/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.sys.system.dept'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/system/dept/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.sys.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/sys/system/password/index.vue'),
    },
  ],
};

export default system;
