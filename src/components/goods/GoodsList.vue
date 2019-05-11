<template>
  <div class="goods-list">
    <!-- <router-link v-for="good in commodities" :key="good.id" class="goods-item" :to="'/home/goodsinfo/' + good.id" tag="div">
      <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="abc">
      <h1 class="title">Xiao MI NOTE 16G Purchase</h1>
      <div class="info">
        <p class="price">
          <span class="now">$999</span>
          <span class="old">$1299</span>
        </p>
        <p class="sell">
          <span>On Sale</span>
          <span>60 Left</span>
        </p>
      </div>
    </router-link> -->

     <div v-for="good in commodities" :key="good.id" class="goods-item" @click="goToDetail(good.id)">
      <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="abc">
      <h1 class="title">Xiao MI NOTE 16G Purchase</h1>
      <div class="info">
        <p class="price">
          <span class="now">$999</span>
          <span class="old">$1299</span>
        </p>
        <p class="sell">
          <span>On Sale</span>
          <span>60 Left</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToDetail(id) {
      this.$router.push('/home/goodsinfo/' + id);
    }
  },
  data() {
    return {
      commodities: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    width: 49%;
    margin: 3px 0px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    img {
      width: 100%;
    }
    .title {
      font-size: 13px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
