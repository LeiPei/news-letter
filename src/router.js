import Vue from 'vue';
import Router from "vue-router";

// components
import Home from './components/Home.vue'
import Membership from './components/Membership.vue'
import Shopping from './components/Shopping.vue'
import Search from './components/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'
import PhotoList from './components/photos/Photolist.vue'
import PhotoDetal from './components/photos/PhotoDetail.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

Vue.use(Router);

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/home/newslist',
      component: NewsList,
    },
    {
      path: '/home/newslist/:id',
      component: NewsDetail,
      props: true
    },
    {
      path: '/home/photolist',
      component: PhotoList,
    },
    {
      path: '/home/photolist/detail',
      component: PhotoDetal,
    },
    {
      path: '/home/goodslist',
      component: GoodsList,
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodsInfo,
      props: true
    }
  ]
});