const DateUtil = {
  install(Vue, options) {

  Vue.prototype.$date = new Date()


  console.log('Hello...')

    Vue.prototype.$getWeek = (date) => {
      const firstDayofYear = new Date(date.getFullYear(), 0, 1);
      const days = (date - firstDayofYear) / 86400000;
      return Math.ceil((days + date.getDay() + 1) / 7);
    }  
  } 
}
export default DateUtil;
