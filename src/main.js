import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.initMap = function () {
  console.log('Google Maps init')
}

new Vue({
  render: h => h(App)
}).$mount('#app')
