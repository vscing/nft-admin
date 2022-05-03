import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const content: AppRouteModule = {
  path: '/content',
  name: 'Content',
  component: LAYOUT,
  redirect: '/content/user',
  meta: {
    orderNo: 2,
    icon: 'ant-design:file-text-outlined',
    title: '内容管理',
  },
  children: [
    {
      path: 'category',
      name: 'categoryManagement',
      meta: {
        title: '分类管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/category/index.vue'),
    },
    {
      path: 'article',
      name: 'articleManagement',
      meta: {
        title: '内容列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/article/index.vue'),
    },
    {
      path: 'article_add',
      name: 'ContentArticleAdd',
      meta: {
        title: '内容新增',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/content/article',
      },
      component: () => import('/@/views/sys/content/article/Add.vue'),
    },
    {
      path: 'article_edit/:id',
      name: 'ContentArticleEdit',
      meta: {
        title: '内容编辑',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/content/article',
      },
      component: () => import('/@/views/sys/content/article/Edit.vue'),
    },
    {
      path: 'banner',
      name: 'bannerManagement',
      meta: {
        title: '轮播管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/banner/index.vue'),
    },
    {
      path: 'banner_add',
      name: 'ContentBannerAdd',
      meta: {
        title: '轮播图新增',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/content/banner',
      },
      component: () => import('/@/views/sys/content/banner/Add.vue'),
    },
    {
      path: 'banner_edit/:id',
      name: 'ContentBannerEdit',
      meta: {
        title: '轮播图编辑',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/content/banner',
      },
      component: () => import('/@/views/sys/content/banner/Edit.vue'),
    },
    {
      path: 'link',
      name: 'linkManagement',
      meta: {
        title: '友情链接',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/link/index.vue'),
    },
    {
      path: 'message',
      name: 'messageManagement',
      meta: {
        title: '留言管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/message/index.vue'),
    },
    {
      path: 'navbar',
      name: 'navbarManagement',
      meta: {
        title: '导航管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/content/navbar/index.vue'),
    },
  ],
};

export default content;
