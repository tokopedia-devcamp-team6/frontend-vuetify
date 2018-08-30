export default [

  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },  
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Error.vue`
    )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/auth/Login`
    )
  },
  {
    path: '/register',
    meta: {
      public: true,
    },
    name: 'Register',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/auth/Register`
    )
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Media.vue`
    )
  },

  // {
  //   path: '/calendar',
  //   meta: { breadcrumb: true },
  //   name: 'Calendar',
  //   component: (a) => import(
  //     /* webpackChunkName: "routes" */
  //     /* webpackMode: "lazy-once" */
  //     `@/pages/Calendar.vue`
  //   )
  // },
  {
    path: '/media',
    meta: { },
    name: 'Media',
    props: (route) => ({ type: route.query.type }),
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/Media.vue`
    )
  },
  {
    path: '/detail/p',
    meta: {},
    name: 'detail-product',
    props: (route) => ({ type: route.query.type }),
    component: () => import(`@/pages/products/DetailProduct`)
  },
  {
    path: '/hubungi-kami',
    meta: {},
    name: 'hubungi-kami',
    props: (route) => ({ type: route.query.type }),
    component: () => import(`@/pages/contact_us`)
  },
  {
    path: '/tentang-kami',
    meta: {},
    name: 'tentang-kami',
    props: (route) => ({ type: route.query.type }),
    component: () => import(`@/pages/about`)
  },
  {
    path: '/profile',
    meta: {},
    name: 'profile',
    props: (route) => ({ type: route.query.type }),
    component: () => import(`@/pages/profile/Profile`)
  }
];
