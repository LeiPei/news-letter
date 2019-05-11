<template>
    <div class="swipe-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="getImageUrl(item.img)" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
import {Swipe, SwipeItem } from 'mint-ui';
export default {
  props: ['list'],
  components: {
    [Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
  },
  methods: {
    getImageUrl(image) {
      return require(`../../images/${image}`)
    }
  }
}
</script>

<style lang="less" scoped>
.swipe-container {
  height: 200px;
  text-align: center;
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
</style>
