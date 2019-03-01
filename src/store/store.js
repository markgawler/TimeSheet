import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    DayClockings: {}
  },

  mutations: {
    updateDayClockings(state,payload) {
      state.DayClockings[payload.key] = payload.value
    },
  },
  getters: {}
});

export default store;
