<template>
  <div>
    <h1>Week {{ week }}</h1>
    <h3> {{dateMonday}}</h3>
    <ClockingDay
      v-for="day in days"
      :key="day.name"
      :day="day.name"
      :id="day.id"
      @dayTotal="dayTotal"
    ></ClockingDay>
    {{ weekTotal }}
  </div>
</template>

<script>
import ClockingDay from "./ClockingDay";
const timeNow = new Date()
const getWeek = () => {
  {
    console.log('calc week')
      const firstDayofYear = new Date(timeNow.getFullYear(), 0, 1)
      const days = (timeNow - firstDayofYear) / 86400000
      return  Math.floor((days + timeNow.getDay() + 1)/7)
    }
}
const monday = new Date(timeNow - ((timeNow.getDay()-1)* (86400000)))
export default {
  name: "ClockingWeek",
  data() {
    return {
      weekStart: '',
      days: [
        { id: 0, name: "Monday" },
        { id: 1, name: "Tuseday" },
        { id: 2, name: "Wednesday" },
        { id: 3, name: "Thursday" },
        { id: 4, name: "Friday" }
      ],
      totals: [0, 0, 0, 0, 0, 0, 0],
      weekTotal: 0,
      dateMonday: monday.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      week: getWeek(),
    };
  },
  
  components: {
    ClockingDay
  },
  methods: {
    dayTotal(value) {
      this.totals[value.id] = value.total;
      const total = this.totals.reduce((a, b) => a + b, 0); //sum the array
      const h = Math.floor(total / 60);
      const m = "00" + (total - h * 60);
      this.weekTotal = h + ":" + m.substr(m.length - 2);
    }
  }
};
</script>

<style></style>
