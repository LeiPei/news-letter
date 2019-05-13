<template>
  <div>
    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="showBall" ref="ball"></div>
    </transition>
    
    <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :list="list"></swiper>
				</div>
			</div>
		</div>

    <div class="mui-card">
        <div class="mui-card-header">Xiao MI NOTE 16G Purchase</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p class="price">
              <span>Market Price: <del>$2399</del></span>&nbsp;&nbsp;
              <span>Sale Price: $2199</span>
            </p>
            <p>number of purchased: <numbox @countChange="getSelectedCount" :max="maxStorage"></numbox></p>
            <p>
              <mt-button type="primary" size="small">Get it now</mt-button>
              <mt-button type="danger" size="small" @click="addToCart">Add it to shopping cart</mt-button>
            </p>
					</div>
				</div>
		</div>


    <div class="mui-card">
				<div class="mui-card-header">Product Info</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>aaa: </p>
            <p>aaa: </p>
            <p>aaa: </p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>INFO</mt-button>
          <mt-button type="danger" size="large" plain>COMM</mt-button>
        </div>
		</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import swiper from '../common/Swiper.vue';
import {Button} from 'mint-ui';
import numbox from '../common/GoodsInfoNumbox.vue';
const uuidv4 = require('uuid/v4');
export default {
  props: ['id', 'price'],
  data() {
    return {
      list: [{id: 1, img: 'sea3.jpeg'}, {id: 2, img: 'sea3.jpeg'}, {id: 3, img: 'sea3.jpeg'}],
      showBall: false,
      selectedCount: 1,
      maxStorage: 20
    }
  },
  methods: {
    ...mapActions(['addToCartAsync']),
    getSelectedCount(count) {
      this.selectedCount = count;
    },
    addToCart() {
      this.showBall = !this.showBall;
      // {id:id, count: count, price: itemPrice, selected:  whether to buy the item}
      let itemObj = {
        id: this.id,
        count: this.selectedCount,
        price: this.price,
        selected: true
      };

      // store them to the store
      this.addToCartAsync(itemObj);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      const ballPos = this.$refs.ball.getBoundingClientRect();
      const cartIcon = document.getElementById('badge-cart').getBoundingClientRect();
      const offsetX = cartIcon.left - ballPos.left;
      const offsetY = cartIcon.top - ballPos.top;
      el.offsetWidth;
      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      el.style.transition = "all 1s cubic-bezier(.4, -0.3, 1, .68)";
      done();
    },
    afterEnter() {
      this.showBall = !this.showBall;
    }
  },
  components: {
    swiper,
    numbox,
    [Button.name]: Button,
  }
}
</script>

<style lang="less" scoped>
.mui-card-footer {
  flex-direction: column;
  justify-content: space-between;
  button:nth-child(1) {
    margin-bottom: 10px;
  }
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  left: 218px;
  top: 390px;
}
</style>
