<template>
  <div>
    <h1>Week {{ week }}</h1>
    <h3>{{ dateMonday }}</h3>
    <ClockingDay
      v-for="day in days"
      :key="day.name"
      :day="day.name"
      :index="day.index"
      :id="day.id"
      @dayTotal="dayTotal"
    ></ClockingDay>
    {{ weekTotal }}
  </div>
</template>

<script>
import ClockingDay from "./ClockingDay";
const timeNow = new Date();

export default {
  name: "ClockingWeek",
  data() {
    return {
      weekStart: "",
      days: [
        { id: 0, name: "Monday", index: this.$toCompactDate(0) },
        { id: 1, name: "Tuseday" , index: this.$toCompactDate(1)},
        { id: 2, name: "Wednesday", index: this.$toCompactDate(2)},
        { id: 3, name: "Thursday", index: this.$toCompactDate(3)},
        { id: 4, name: "Friday", index: this.$toCompactDate(4)}
      ],
      totals: [0, 0, 0, 0, 0, 0, 0],
      weekTotal: 0,
      dateMonday: this.$getMonday().toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }),
      week: this.$getWeek()
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
