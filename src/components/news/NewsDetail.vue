<template>
  <div class="newsinfo-container">
   <h3 class="title">News</h3>
   <p class="subtitle">
     <span>Time: </span>
     <span>Click: {{ id }}</span>
   </p>

   <hr>

   <div class="content"></div>

   <comment-box :id="id"></comment-box>

  </div>
</template>

<script>
import comment from '../common/Comment.vue';
export default {
  props: ["id"],
  components: {
    "comment-box": comment
  },
  data(){
    return {
      news: {}
    }
  }
}
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0px 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0px;
    color:red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
