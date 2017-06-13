import Vue from 'vue'
import store from './store'
import App from './App'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
