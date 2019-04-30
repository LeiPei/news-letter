<template>
  <div>
    <ul class="mui-table-view">
				<li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newslist/' + item.id">
						<img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/16006648?s=40&v=4">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                <span>Time: {{item.add_time | dateFormat}}</span>
                <span>Click: {{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getObject(idx) {
      return {
        add_time: new Date(),
        click: 2,
        id: idx,
        title: 'Happiness',
        details: ''
      };
    },
    getNewsList() {
      for(let i = 0; i < 25; i++) {
        this.newsList.push(this.getObject(i));
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
