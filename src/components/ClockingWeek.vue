<template>
  <div>
    <h1>Week {{ week }}</h1>
    <h3>{{ dateMonday }}</h3>
    <ClockingDay
      v-for="day in days"
      :key="day.id"
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
      totals: [0, 0, 0, 0, 0, 0, 0],
      weekTotal: 0,
      dateMonday: this.$getMonday().toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }),
      week: this.$getWeek(),
      weekTotalStored: 0
    };
  },
  computed: {
    days: function() {
      const day = this.$getMonday();
      let i,
        days = [];
      for (i = 0; i < 5; i++) {
        days.push({
          id: i,
          name: day.toLocaleString("en-GB", { weekday: "long" }),
          index: this.$toCompactDate(i)
        });
        day.setDate(day.getDate() + 1);
      }
      return days;
    },
    /*clockingsByDate: function() {
      const result = this.$store.getters.getclockingByDate("20190302")
      if (result != null) {
        return result.v;
      }
      return null;
    },*/
    //weekTotalStored: function() {
    //  return this.$store.getters.getWeekTotal
    //}
  },
  /*mounted: function() {
    this.$nextTick(function() {
      const s = this.$store.getters.getWeekTotal
      this.weekTotalStored = s
    });
  },*/
  components: {
    ClockingDay
  },
  methods: {
    dayTotal(value) {
      this.totals[value.id] = value.total;
      const total = this.totals.reduce((a, b) => a + b, 0); //sum the array
      const h = Math.floor(total / 60)
      const m = "00" + (total - h * 60)
      this.weekTotal = h + ":" + m.substr(m.length - 2)
    }
  }
};
</script>

<style></style>
