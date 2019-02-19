<template>
  <div id="app"><ClockingWeek /></div>
</template>

<script>
import ClockingWeek from "./components/ClockingWeek";

//import ClockingDay from "./components/ClockingDay";

export default {
  name: "App",
  components: {
    ClockingWeek
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
