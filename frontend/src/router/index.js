import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import HomeView from '../views/HomeView.vue';
import Detail from '../views/Detail.vue';
import Add from '../views/Add.vue';



import AboutView from '../views/AboutView.vue';

// Account
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta: { requiresAuth: true }

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { redirect: true }

  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { redirect: true }


  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  } else if (to.meta.redirect && store.state.isAuthenticated){
      return {
          path: '/profile',
      }
    
  }
})

// dynamic title
const DEFAULT_TITLE = 'Blog';

router.afterEach((to, from) => {
        document.title = to.name || DEFAULT_TITLE;
    
});

export default router
