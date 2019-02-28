const DateUtil = {
  install(Vue, options) {
    
    const dateMidnight = () => {
      const d = new Date()
      const midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate())
      return midnight
    }

    Vue.prototype.$getWeek = (date) => {
      if (date == null) {
        date = dateMidnight()
      }
      const firstDayofYear = new Date(date.getFullYear(), 0, 1)
      const days = (date - firstDayofYear) / 86400000;
      return Math.ceil((days + date.getDay() + 1) / 7)
    }  
  
    Vue.prototype.$getMonday = () => {
      const timeNow = new Date()
      const m = new Date(timeNow - (timeNow.getDay() - 1) * 86400000)
      return m
    }

    Vue.prototype.$toCompactDate = (offset, date) => {
      if (date == null) {
        date = new Date()
      }
      if (offset == null) {
        offset = 0
      }
      date.setDate(date.getDate() + offset)
      const compact = date.toISOString().slice(0, 10).replace(/-/g,'')
      return compact
    }
  } 
}
export default DateUtil;
