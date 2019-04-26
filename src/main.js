import Vue from 'vue'
import App from './App.vue'
import router from './router'

// css import
import './css/global.less'
import 'mint-ui/lib/style.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');