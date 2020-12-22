import Vue from 'vue'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

import App from './App.vue'

Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
