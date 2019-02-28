const DateUtil = {
  install(Vue, options) {
    const timeNow = new Date()

    const dateMidnight = () => {
      const date = new Date()
      const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      console.log(midnight)
      return midnight
    }
    console.log('Hello...')

    Vue.prototype.$getWeek = (date) => {
      if (date == null) {
        date = dateMidnight()
      }
      const firstDayofYear = new Date(date.getFullYear(), 0, 1);
      const days = (date - firstDayofYear) / 86400000;
      return Math.ceil((days + date.getDay() + 1) / 7);
    }  
  
    Vue.prototype.$getMonday = () => {
      
      const m = new Date(timeNow - (timeNow.getDay() - 1) * 86400000)
      return m
    }
  } 
}
export default DateUtil;
