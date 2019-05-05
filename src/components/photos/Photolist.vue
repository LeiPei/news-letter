<template>
  <div class="photolist-container">
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
						<a v-for="cate in cates" :key="cate" :class="['mui-control-item', {'mui-active': cate === selected}]" @click="selected=cate" data-wid="tab-top-subpage-1.html">
							{{cate}}
						</a>
					</div>
				</div>
			</div>
		<div class="list-container">
			<ul id="photo">
				<router-link tag="li" to="/home/photolist/detail" v-for="item in list" :key="item.id">
					<img :src="getImageUrl(item.img)" alt="">
				</router-link>
			</ul>
		</div>
  </div>
</template>

<script>

export default {
	mounted() {
	},
	methods: {
		getImageUrl(image) {
      return require(`../../images/${image}`)
    }
	},
	data() {
		return {
			selected: 'Fortinet',
			cates: [
				'Fortinet',
				'Google',
				'Microsoft',
				'Amazon',
				'SAP',
				'Salesforce'
			],
			list: [{id: 1, img: 'sea3.jpeg'}, {id: 2, img: 'sea3.jpeg'}, {id: 3, img: 'sea3.jpeg'}]
		}
	}
}
</script>

<style lang="less" scoped>
* {
	touch-action: pan-y;
}
#photo {
	padding: 0px 10px;
}
.list-container {
	ul {
		list-style: none;
		margin: 0%;
		li {
			img {
				width: 100%;
				height: 200px;
				&:hover {
				  cursor: pointer;
			  }
			}
		}
	}
}
</style>
