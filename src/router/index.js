import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/layout/Home.vue';
import Login from '@/views/layout/Login.vue';
import getMuenRouter from '@/utils/permission';

import store from '@/store';

Vue.use(VueRouter);

const ayncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品',
      hidder: false,
      icon: 'inbox',
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          hidder: false,
          icon: 'ordered-list',
        },
        component: () => import('@/views/page/productList.vue'),
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品  ',
          hidder: false,
          icon: 'border-inner',
        },
        component: () => import('@/views/page/productAdd.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
          hidder: false,
          icon: 'setting',
        },
        component: () => import('@/views/page/category.vue'),
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    meta: {
      title: '首页',
      hidder: false,
      icon: 'home',
    },
    children: [{
      path: 'index',
      name: 'Index',
      meta: {
        title: '统计',
        hidder: false,
        icon: 'line-chart',
      },
      component: () => import('@/views/page/index.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidder: true,
    },
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

let isAddRouter = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.username && store.state.user.appkey && store.state.user.role) {
      if (!isAddRouter) {
        const muenRouter = getMuenRouter(store.state.user.role, ayncRouterMap);
        store.dispatch('changeMeunRouter', routes.concat(muenRouter)).then(() => {
          for (let i = 0; i < muenRouter.length; i += 1) {
            router.addRoute(muenRouter[i]);
          }
          next();
        });
        isAddRouter = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
