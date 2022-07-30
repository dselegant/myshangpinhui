import Home from '@/views/Home';
import Search from '@/views/Search';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Detail from '@/views/Detail';
import AddCartSuccess from '@/views/AddCartSuccess';
import ShopCart from '@/views/ShopCart';
import Trade from '@/views/Trade';
import Pay from '@/views/Pay';
import PaySuccess from '@/views/PaySuccess';
import store from '@/store';

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    meta: {
      isShowFooter: true,
    },
    props({ params: { keyword } }) {
      return {
        keyword,
      };
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: false,
    },
    beforeEnter: (to, from, next) => {
      if (!store.state.user.token) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isShowFooter: false,
    },
  },
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/addCartSuccess/:skuNum',
    name: 'addCartSuccess',
    component: AddCartSuccess,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/paySuccess',
    component: PaySuccess,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    redirect: '/center/myOrder',
    children: [
      {
        path: 'myOrder',
        component: () => import('@/views/Center/MyOrder'),
      },
      {
        path: 'groupOrder',
        component: () => import('@/views/Center/GroupOrder'),
      },
    ],
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/test',
    component: () => import('@/views/test'),
  },
  {
    path: '/communication',
    component: () => import('@/views/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/views/Communication/EventTest/EventTest'),
        meta: {
          show: false,
        },
      },
      {
        path: 'model',
        component: () => import('@/views/Communication/ModelTest/ModelTest'),
        meta: {
          show: false,
        },
      },
      {
        path: 'sync',
        component: () => import('@/views/Communication/SyncTest/SyncTest'),
        meta: {
          show: false,
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          show: false,
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          show: false,
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          show: false,
        },
      },
    ],
  },
];
