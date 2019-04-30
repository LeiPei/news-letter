<template>
  <div class="cmt-container">
    <h3>Leave your comment</h3>
    <hr>
    <textarea placeholder="please tell us your toughts(max: 120 words)" maxlength="120" cols="20" rows="10"></textarea>
    <mt-button type="primary" size="large">Comment</mt-button>
    
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          #{{ id }} floor&nbsp;&nbsp;User: Lei&nbsp;&nbsp;Time: 2012-12-12 12:12:12
        </div>
        <div class="cmt-body">
          Hello World! Hello Tomorrow!
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">Load More</mt-button>
  </div>
</template>

<script>
import {Button} from 'mint-ui'
export default {
  props: ["id"],
  components: {
    [Button.name]: Button,
  },
  methods: {
    getMore() {
      //
    }
  }
}
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 120px;
    margin: 0%;
  }
}

.cmt-list {
  margin: 5px 0;
  .cmt-item {
    font-size: 13px;
    .cmt-title {
      line-height: 30px;
      background-color: #ccc;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
