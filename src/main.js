import Vue from 'vue'
// import App from './App.vue'
import App from './App2.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
// import applicationStrings from 'src/strings/applicationStrings'
import {applicationMixin} from "./mixins/applicationMixin";

Vue.config.productionTip = false;
// This is a global mixin, it is applied to every vue instance

Vue.mixin(applicationMixin);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
