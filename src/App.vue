<template>
  <div>
    <!--header-->
    <mt-header fixed title="fixed top"></mt-header>

		<!--body-->
    <div class="body-container">
			<transition>
				<router-view />
			</transition>
		</div>

    <!--footer-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">Home</span>
			</router-link>
			<router-link class="mui-tab-item" to="/membership">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">Mebership</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopping">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge-cart" class="mui-badge">0</span></span>
				<span class="mui-tab-label">Shopping Cart</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">Search</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import { Header, Swipe, SwipeItem } from 'mint-ui';

export default {
  components: {
		[Header.name]: Header,
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
  }
}
</script>

<style scoped>
.body-container {
	margin-top: 40px;
	margin-bottom: 50px;
	overflow-x: hidden;
}

.vue-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

</style>
