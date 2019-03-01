import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    DayClockings: []
  },

  mutations: {
    updateDayClockings(state,payload) {
      state.DayClockings[payload.key] = {d:payload.index, v:payload.value}
    },
  },
  
 getters: {
    getclockingByDate: (state, getters) => (d) => {
      return state.DayClockings.find(day => {
        return (d === day.d)
      })
    },
    
    getWeekTotal: state => {
      const minutes = hm => {
        const part = hm.split(":");
        return +part[0] * 60 + +part[1];
      };

      let i,total = 0
      for (i = 0; i < 5; i++) {
        const clockings = state.DayClockings[i]
        if (clockings.v != null){
          let t = 0;
          clockings.v.forEach(s => {
            t += minutes(s.timeout) - minutes(s.timein);
          })
          total += t
        }
      }
      const h = Math.floor(total / 60);
      const m = "00" + (total - h * 60);
      return h + ":" + m.substr(m.length - 2);
    },
 }
});

export default store;
