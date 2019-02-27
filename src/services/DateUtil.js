const DateUtil = {}

DateUtil.install = function (Vue, options) {

  Vue.mixin({
    created: function () {
      console.log('Hello')
    }})

  console.log('Hello')

  Vue.prototype.$getWeek = (date) => {
    const firstDayofYear = new Date(date.getFullYear(), 0, 1);
    const days = (date - firstDayofYear) / 86400000;
    return Math.ceil((days + date.getDay() + 1) / 7);
  }
  
  Vue.getWeek = (date) => {
    const firstDayofYear = new Date(date.getFullYear(), 0, 1);
    const days = (date - firstDayofYear) / 86400000;
    return Math.ceil((days + date.getDay() + 1) / 7);
  }
}