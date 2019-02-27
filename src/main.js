// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import store from "./store/store";
import DateUtil from './services/DateUtil'


//import BootstrapVue from "bootstrap-vue";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false;
//Vue.use(BootstrapVue);

Vue.use(DateUtil)

/* eslint-disable no-new */
new Vue({
  store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
