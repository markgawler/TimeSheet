<template>
  <div class="clockings-day">
    <h3>{{ day }}</h3>
    <div v-for="item in clockings" :key="item.id">
      <div><input v-model="item.timein" /></div>
      <div><input v-model="item.timeout" /></div>
    </div>
    <div class="total">
      <p>{{ dayTotal}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClockingDay",
  props: ["day", "id", "index"],
  data() {
    return {
      clockings: [
        { timein: "07:30", timeout: "12:30" },
        { timein: "13:00", timeout: "16:30" }
      ]
    };
  },
  computed: {
    dayTotal: function() {
      const minutes = hm => {
        const part = hm.split(":");
        return +part[0] * 60 + +part[1];
      };

      let t = 0;
      this.clockings.forEach(s => {
        t += minutes(s.timeout) - minutes(s.timein);
      });
      this.$store.commit('updateDayClockings',{key: this.id, index:this.index, value: this.clockings})
      this.$emit("dayTotal", { id: this.id, total: t });
      const h = Math.floor(t / 60);
      const m = "00" + (t - h * 60);
      return h + ":" + m.substr(m.length - 2);
    }
  }
};
</script>

<style>
.clockings-day input {
  //list-style: none;
  border-top: 1px solid deepskyblue;
  border-right-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  text-align: center;
}

.total p {
  margin: 0;
  border-top: 2px solid deepskyblue;
  border-bottom: 2px solid deepskyblue;
}
</style>
