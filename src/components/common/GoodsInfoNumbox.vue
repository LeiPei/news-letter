<template>
   <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.min.js';
import { mapState } from 'vuex';
export default {
  props: ['max'],
  mounted() {
    mui('.mui-numbox').numbox();
  },
  computed: mapState(['count']),
  methods: {
    countChanged() {
      // console.log(this.$refs.numbox.value);
      this.$emit('countChange', parseInt(this.$refs.numbox.value));
    }
  }
}
</script>

<style lang="less" scoped>

</style>
