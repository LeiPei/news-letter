<template>
  <div>
    <div class="swipe-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="getImageUrl(item.img)" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">News</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Share Pics</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Purchase</div></a></li>
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
  }
}
</script>

<style lang="less" scoped>
@main-bg-color: #fff;

.swipe-container {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: lightblue;
    }
    &:nth-child(2) {
      background-color: lightcoral;
    }
    &:nth-child(3) {
      background-color: lightgreen;
    }
    
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: @main-bg-color;
}
</style>
