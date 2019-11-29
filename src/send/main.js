// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from "bootstrap-vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import CKEditor from '@ckeditor/ckeditor5-vue';
import ToggleButton from 'vue-js-toggle-button'
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import { SidebarComponent, SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import store from './store';
import Axios from 'axios'
import rawDisplayer from './components/rawDisplayer'


Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.component(SidebarPlugin.name, SidebarComponent);
Vue.use(ToggleButton)
Vue.use( CKEditor );
Vue.use(VModal)
Vue.use(VueAxios, axios)
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(VueSidebarMenu)
Vue.component("rawDisplayer", rawDisplayer);


import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/bootstrap-extended.css';
import './assets/css/colors.css';
import './assets/css/components.css';
import './assets/css/themes/dark-layout.css';
import './assets/css/themes/semi-dark-layout.css';
import './assets/css/core/colors/palette-gradient.css';
import './assets/css/pages/app-email.css'
import './assets/vendors/css/editors/quill/quill.snow.css'


/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
