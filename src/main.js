// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'

export const eventBus = new Vue();

Vue.use(VModal)

Vue.use(VueResource);

Vue.prototype.$clientId = 'sy8t405is27qepl3jf8j7by99b3wo5k'
Vue.prototype.$streamerId = '1'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
