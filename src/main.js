import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

// defalut install
Vue.use(VuePreview)
Vue.use(Vuex)

let cartInfo = JSON.parse(localStorage.getItem('shoppingCart') || '[]');

const store = new Vuex.Store({
  state: {
    count: 10,
    // {id:id, count: count, price: itemPrice, selected:  whether to buy the item}
    shoppingCart: cartInfo // all the goods the user might want to purchase 
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addToCart (state, itemInfo) {
      itemInfo.id = parseInt(itemInfo.id);
      let item = state.shoppingCart.find(c => c.id === itemInfo.id);
      if(item) {
        item.count += parseInt(itemInfo.count);
      } else {
        state.shoppingCart.push(itemInfo);
      }

      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    },
    updateCart(state, itemInfo) {
      itemInfo.id = parseInt(itemInfo.id);
      let item = state.shoppingCart.find(c => c.id === itemInfo.id);
      if(item) {
        item.count = parseInt(itemInfo.count);
      }

      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    },
    updateCartSelected(state, itemInfo) {
      itemInfo.id = parseInt(itemInfo.id);
      let item = state.shoppingCart.find(c => c.id === itemInfo.id);
      if(item) {
        item.selected = itemInfo.selected;
      }

      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    },
    removeItem(state, itemInfo) {
      itemInfo.id = parseInt(itemInfo.id);
      let itemIdx = state.shoppingCart.findIndex(c => c.id === itemInfo.id);
      if(itemIdx >= 0) {
        state.shoppingCart.splice(itemIdx, 1);
      }

      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    addToCartAsync ({commit}, itemInfo) {
      commit('addToCart', itemInfo);
    },
    updateCartAsync({commit}, itemInfo) {
      commit('updateCart', itemInfo);
    },
    removeItemAsync({commit}, itemInfo) {
      commit('removeItem', itemInfo);
    }
  },
  getters: {
    getAllItemsCount(state) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.count;
      return state.shoppingCart.reduce(reducer, 0);
    },
    getGoodsCountAndAmount(state) {
      let o = {
        count: 0,
        amount: 0
      }

      state.shoppingCart.forEach(item => {
        if(item.selected) {
          o.count += item.count;
          o.amount += item.price * item.count;
        }
      });

      return o;
    }
  }
})

// css import
import './css/global.less'
import 'mint-ui/lib/style.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app');