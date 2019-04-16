import Vue from 'vue'
import App from './App.vue'

// css import
import 'mint-ui/lib/style.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

new Vue({
  render: h => h(App)
}).$mount('#app');