<template>
   <div class="mui-numbox s-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChanged" ref="numbox" readonly>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
</template>

<script>
import { mapActions } from 'vuex';
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
  props: ['id', 'count'],
  mounted() {
    mui('.mui-numbox').numbox();
  },
  methods: {
    countChanged() {
      this.updateCartAsync({id: this.id, count: this.$refs.numbox.value})
    },
    ...mapActions(['updateCartAsync']),
  }
}
</script>

<style lang="less" scoped>
.s-numbox {
  height: 25px;
}
</style>
