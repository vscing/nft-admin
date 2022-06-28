import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const activity: AppRouteModule = {
  path: '/activity',
  name: 'Activity',
  component: LAYOUT,
  redirect: '/activity/userImg',
  meta: {
    orderNo: 4,
    icon: 'ant-design:fund-twotone',
    title: '活动管理',
  },
  children: [
    {
      path: 'userImg',
      name: 'ActivityUserImg',
      meta: {
        title: '勋章活动',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/activity/userImg/index.vue'),
    }
  ],
};

export default activity;
