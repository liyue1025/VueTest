import Vue from 'vue'
import App from './App'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 路由
  router,
  // App 为该vue模板
  render: h => h(App)
})
