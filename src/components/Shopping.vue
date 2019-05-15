<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card" v-for="(item, idx) in shoppingCart" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch @change="selectedChanged(item.id, item.selected)" v-model="item.selected"></mt-switch>
            <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
            <div class="info">
              <h1>XiaoMI PRS LIST WELTHY MANAGEMENT INC</h1>
              <p>
                <span class="price">${{item.price}}</span>
                <numbox :id="item.id" :count="item.count"></numbox>
                <a href="#" @click.prevent="remove(item.id, idx)">delete</a>
              </p>
            </div>
          </div>
        </div>
		 </div>

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner sumVal">
            <div class="left">
              <p>SUM</p>
              <p>Items Purchased: <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span>, Total: $<span class="red">{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
            </div>
            <mt-button type="danger">Go</mt-button>
          </div>
        </div>
		 </div>
    </div> 
  </div>
</template>

<script>
import numbox from './common/ShoppingCarNumbox.vue';
import { mapState } from 'vuex';
import { Switch, Button } from 'mint-ui';
export default {
  components: {
    [Switch.name]: Switch,
    [Button.name]: Button,
    numbox
  },
  computed: mapState(['shoppingCart']),
  methods: {
    remove(id, index) {
      this.$store.dispatch('removeItemAsync', {id})
    },
    selectedChanged(id, bool) {
      this.$store.commit('updateCartSelected', {id, selected: bool})
    }
  }
}
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  img {
    width: 60px;
    margin: 0px 2px;
  }
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 13px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .sumVal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
    }
  }
}
</style>
