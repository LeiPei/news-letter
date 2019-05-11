<template>
  <div>
    <swiper :list="list"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">News</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Share Pics</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Purchase</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">Feedback</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Video</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Contact</div></a></li>
		        </ul> 
  </div>
</template>

<script>
import {Swipe, SwipeItem } from 'mint-ui';
import Swiper from './common/Swiper.vue';

export default {
  data() {
    return {
      list: [{id: 1, img: 'sea3.jpeg'}, {id: 2, img: 'sea3.jpeg'}, {id: 3, img: 'sea3.jpeg'}]
    }
  },
  methods: {
    getImageUrl(image) {
      return require(`../images/${image}`)
    }
  },
  components: {
		[Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    swiper: Swiper
  }
}
</script>

<style lang="less" scoped>
@main-bg-color: #fff;

.mui-grid-view.mui-grid-9 {
  background-color: @main-bg-color;
}
</style>
