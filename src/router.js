import Vue from 'vue';
import Router from "vue-router";
import Home from './components/Home.vue'
import Membership from './components/Membership.vue'
import Shopping from './components/Shopping.vue'
import Search from './components/Search.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/membership',
      component: Membership,
    },
    {
      path: '/shopping',
      component: Shopping,
    },
    {
      path: '/search',
      component: Search,
    }
  ]
});