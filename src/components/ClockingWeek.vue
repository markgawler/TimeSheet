<template>
  <div>
    <h1>Week</h1>
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

export default {
  name: "ClockingWeek",
  data() {
    return {
      days: [
        { id: 0, name: "Monday" },
        { id: 1, name: "Tuseday" },
        { id: 2, name: "Wednesday" },
        { id: 3, name: "Thursday" },
        { id: 4, name: "Friday" }
      ],
      totals: [0, 0, 0, 0, 0, 0, 0],
      weekTotal: 0
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
