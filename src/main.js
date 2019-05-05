import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

// css import
import './css/global.less'
import 'mint-ui/lib/style.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');