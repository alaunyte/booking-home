import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAnon: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      requiresAnon: true,
    },
  },
  {
    path: '/properties',
    name: 'Properties',
    component: () => import(/* webpackChunkName: "properties" */ '../views/Properties.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/viewPage/:id',
    name: 'ViewPage',
    component: () => import(/* webpackChunkName: "view"Page */ '../views/ViewPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next({
          path: '/properties',
        });
      } else {
        next();
      }
    });
  }
});

export default router;
