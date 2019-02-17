<template>
  <div id="app"><ClockingDay /></div>
</template>

<script>
//import Clocking from "./components/Clocking";
import ClockingDay from "./components/ClockingDay";

export default {
  name: "App",
  components: {
    ClockingDay
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
