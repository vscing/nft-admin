export const routes = [
  {
    path: "/login",
    component: "login",
    layout: false,
  },
  {
    path: "/register",
    component: "register",
    layout: false,
  },
  {
    path: "/dashboard",
    component: "dashboard",
    menu: {
      name: "控制台",
      icon: "dashboard",
    },
  },
  {
    path: "/compose",
    menu: {
      name: "合成管理",
      icon: "bars",
    },
    routes: [
      {
        path: "/compose/composeList",
        menu: {
          name: "合成列表",
        },
        component: "@/pages/compose/composeList",
      },
      {
        path: "/compose",
        redirect: "/compose/composeList",
      }
    ],
  },
  {
    path: "/marketing",
    menu: {
      name: "营销管理",
      icon: "bars",
    },
    routes: [
      {
        path: "/marketing/menu1",
        menu: {
          name: "菜单1",
        },
        routes: [
          {
            path: "/marketing/menu1/menu1-1",
            menu: {
              name: "菜单1-1",
            },
            component: "@/pages/marketing/menu1/menu1-1",
          },
          {
            path: "/marketing/menu1/menu1-2",
            menu: {
              name: "菜单1-2",
            },
            routes: [
              {
                path: "/marketing/menu1/menu1-2",
                redirect: "/marketing/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/marketing/menu1/menu1-2/menu1-2-1",
                menu: {
                  name: "菜单1-2-1",
                },
                component: "@/pages/marketing/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/marketing/menu1/menu1-2/menu1-2-2",
                menu: {
                  name: "菜单1-2-2",
                },
                component: "@/pages/marketing/menu1/menu1-2/menu1-2-2",
              },
            ],
          },
          {
            path: "/marketing/menu1/menu1-3",
            menu: {
              name: "菜单1-3",
            },
            component: "@/pages/marketing/menu1/menu1-3",
          },
          {
            path: "/marketing/menu1",
            redirect: "/marketing/menu1/menu1-1",
          },
        ],
      },
      {
        path: "/nested/menu2",
        menu: {
          name: "菜单2",
        },
        component: "@/pages/nested/menu2",
      },
      {
        path: "/marketing",
        redirect: "/marketing/menu1",
      },
    ],
  },
  {
    path: "/manage",
    menu: {
      name: "资产管理",
      icon: "bars",
    },
    routes: [
      {
        path: "/manage/menu1",
        menu: {
          name: "菜单1",
        },
        routes: [
          {
            path: "/manage/menu1/menu1-1",
            menu: {
              name: "菜单1-1",
            },
            component: "@/pages/manage/menu1/menu1-1",
          },
          {
            path: "/manage/menu1/menu1-2",
            menu: {
              name: "菜单1-2",
            },
            routes: [
              {
                path: "/manage/menu1/menu1-2",
                redirect: "/manage/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/manage/menu1/menu1-2/menu1-2-1",
                menu: {
                  name: "菜单1-2-1",
                },
                component: "@/pages/manage/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/manage/menu1/menu1-2/menu1-2-2",
                menu: {
                  name: "菜单1-2-2",
                },
                component: "@/pages/manage/menu1/menu1-2/menu1-2-2",
              },
            ],
          },
          {
            path: "/manage/menu1/menu1-3",
            menu: {
              name: "菜单1-3",
            },
            component: "@/pages/manage/menu1/menu1-3",
          },
          {
            path: "/manage/menu1",
            redirect: "/manage/menu1/menu1-1",
          },
        ],
      },
      {
        path: "/manage/menu2",
        menu: {
          name: "菜单2",
        },
        component: "@/pages/manage/menu2",
      },
      {
        path: "/manage",
        redirect: "/manage/menu1",
      },
    ],
  },
  {
    path: "/order",
    menu: {
      name: "订单管理",
      icon: "bars",
    },
    routes: [
      {
        path: "/order/prepaidList",
        menu: {
          name: "充值列表",
        },
        routes: [
          {
            path: "/order/prepaidList/menu1-1",
            menu: {
              name: "菜单1-1",
            },
            component: "@/pages/order/prepaidList/menu1-1",
          },
          {
            path: "/order/prepaidList/menu1-2",
            menu: {
              name: "菜单1-2",
            },
            routes: [
              {
                path: "/order/prepaidList/menu1-2",
                redirect: "/order/prepaidList/menu1-2/menu1-2-1",
              },
              {
                path: "/order/prepaidList/menu1-2/menu1-2-1",
                menu: {
                  name: "菜单1-2-1",
                },
                component: "@/pages/order/prepaidList/menu1-2/menu1-2-1",
              },
              {
                path: "/order/prepaidList/menu1-2/menu1-2-2",
                menu: {
                  name: "菜单1-2-2",
                },
                component: "@/pages/order/prepaidList/menu1-2/menu1-2-2",
              },
            ],
          },
          {
            path: "/order/prepaidList/menu1-3",
            menu: {
              name: "菜单1-3",
            },
            component: "@/pages/order/prepaidList/menu1-3",
          },
          {
            path: "/order/prepaidList",
            redirect: "/order/prepaidList/menu1-1",
          },
        ],
      },
      {
        path: "/order/collectList",
        menu: {
          name: "分账列表",
        },
        component: "@/pages/order/collectList",
      },
      {
        path: "/order/reflectList",
        menu: {
          name: "提现列表",
        },
        component: "@/pages/order/reflectList",
      },
      {
        path: "/order",
        redirect: "/order/reflectList",
      },
    ],
  },
  {
    path: "/system",
    menu: {
      name: "系统管理",
      icon: "desktop",
    },
    routes: [
      {
        path: "/system",
        redirect: "/system/user",
      },
      {
        path: "/system/user",
        menu: {
          name: "用户管理",
        },
        component: "@/pages/system/user",
      },
      // {
      //   path: "/system/role",
      //   menu: {
      //     name: "角色管理",
      //   },
      //   component: "@/pages/system/role",
      // },
    ],
  },
  // 内容管理
  {
    path: "/content",
    menu: {
      name: "内容管理",
      icon: "desktop",
    },
    routes: [
      {
        path: "/content",
        redirect: "/content/sortManager",
      },
      {
        path: "/content/sortManager",
        menu: {
          name: "分类管理",
        },
        component: "@/pages/content/sortManager",
      },
      {
        path: "/content/contentList",
        menu: {
          name: "内容列表",
        },
        // component: '@/pages/content/contentList',
        routes: [
          {
            path: "/content/contentList/titleList",
            menu: {
              name: "列表数据",
            },
            component: "@/pages/content/contentList/titleList",
          },
          {
            path: "/content/contentList/addList",
            exact: false,
            menu: {
              name: "添加列表",
              show: false,
            },
            component: "@/pages/content/contentList/addList",
          },
          {
            path: "/content/contentList/editList",
            menu: {
              name: "修改列表",
            },
            component: "@/pages/content/contentList/editList",
          },
        ],
      },
      {
        path: "/content/loopManager",
        menu: {
          name: "轮播管理",
        },
        component: "@/pages/content/loopManager",
      },
      // {
      //   path: "/system/role",
      //   menu: {
      //     name: "友情链接",
      //   },
      //   component: "@/pages/system/role",
      // },
      // {
      //   path: "/system/role",
      //   menu: {
      //     name: "留言管理",
      //   },
      //   component: "@/pages/system/role",
      // },
      // {
      //   path: "/system/role",
      //   menu: {
      //     name: "导航管理",
      //   },
      //   component: "@/pages/system/role",
      // },
    ],
  },
  // 商品管理
  {
    path: "/shopManager",
    menu: {
      name: "商品管理",
      icon: "desktop",
    },
    routes: [
      {
        path: "/shopManager",
        redirect: "/shopManager/shopList",
      },
      {
        path: "/shopManager/shopList",
        menu: {
          name: "商品列表",
        },
        // component: "@/pages/shopManager/shopList",
        routes: [
              {
                path: "/shopManager/shopList/titleList",
                menu: {
                  name: "列表数据",
                },
                component: "@/pages/shopManager/shopList/titleList",
              },
              {
                path: "/shopManager/shopList/addList",
                exact: false,
                menu: {
                  name: "添加列表",
                  show: false,
                },
                component: "@/pages/shopManager/shopList/addList",
              },
              {
                path: "/shopManager/shopList/editList",
                menu: {
                  name: "修改列表",
                },
                component: "@/pages/shopManager/shopList/editList",
              }
        ]
      },
      {
        path: "/shopManager/shopType",
        menu: {
          name: "商品分类",
        },
        component: "@/pages/shopManager/shopType",
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/nested",
    menu: {
      name: "路由嵌套",
      icon: "bars",
    },
    routes: [
      {
        path: "/nested/menu1",
        menu: {
          name: "菜单1",
        },
        routes: [
          {
            path: "/nested/menu1/menu1-1",
            menu: {
              name: "菜单1-1",
            },
            component: "@/pages/nested/menu1/menu1-1",
          },
          {
            path: "/nested/menu1/menu1-2",
            menu: {
              name: "菜单1-2",
            },
            routes: [
              {
                path: "/nested/menu1/menu1-2",
                redirect: "/nested/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/nested/menu1/menu1-2/menu1-2-1",
                menu: {
                  name: "菜单1-2-1",
                },
                component: "@/pages/nested/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "/nested/menu1/menu1-2/menu1-2-2",
                menu: {
                  name: "菜单1-2-2",
                },
                component: "@/pages/nested/menu1/menu1-2/menu1-2-2",
              },
            ],
          },
          {
            path: "/nested/menu1/menu1-3",
            menu: {
              name: "菜单1-3",
            },
            component: "@/pages/nested/menu1/menu1-3",
          },
          {
            path: "/nested/menu1",
            redirect: "/nested/menu1/menu1-1",
          },
        ],
      },
      {
        path: "/nested/menu2",
        menu: {
          name: "菜单2",
        },
        component: "@/pages/nested/menu2",
      },
      {
        path: "/nested",
        redirect: "/nested/menu1",
      },
    ],
  },
  {
    path: "/exception",
    menu: {
      name: "异常页",
      icon: "warning",
    },
    routes: [
      {
        path: "/exception/403",
        menu: {
          name: "403",
        },
        component: "@/pages/exception/403",
      },
      {
        path: "/exception/404",
        menu: {
          name: "404",
        },
        component: "@/pages/exception/404",
      },
      {
        path: "/exception/500",
        menu: {
          name: "500",
        },
        component: "@/pages/exception/500",
      },
    ],
  },
  {
    path: "/libraries",
    menu: {
      name: "组件",
      icon: "appstore",
    },
    routes: [
      {
        path: "/libraries/amap",
        menu: {
          name: "高德地图",
        },
        component: "@/pages/libraries/amap",
      },
      {
        path: "/libraries/watermark",
        menu: {
          name: "水印组件",
        },
        component: "@/pages/libraries/watermark",
      },
    ],
  },
  {
    path: "/permission",
    menu: {
      name: "权限管理",
      icon: "lock",
    },
    routes: [
      {
        path: "/permission",
        redirect: "/permission/action",
      },
      {
        path: "/permission/page",
        menu: {
          name: "页面权限测试",
        },
        component: "@/pages/permission/page",
      },
      {
        path: "/permission/button",
        menu: {
          name: "按钮权限测试",
        },
        component: "@/pages/permission/button",
      },
      {
        path: "/permission/action",
        menu: {
          name: "操作管理",
        },
        authority: "permission:actionView",
        component: "@/pages/permission/action",
      },
      {
        path: "/permission/policy",
        menu: {
          name: "策略管理",
        },
        authority: "permission:policyView",
        component: "@/pages/permission/policy",
      },
    ],
  },
  {
    component: "./404",
  },
];
