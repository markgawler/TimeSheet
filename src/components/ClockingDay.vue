<template>
  <div class="clockings-day">
    <h3>{{ day }}</h3>
    <div v-for="item in clockings" :key="item.id">
      <!-- <li>{{ item.timein }}</li> -->
      <div><input v-model="item.timein" /></div>
      <div>
        <!-- <li>{{ item.timeout }}</li> -->
        <input v-model="item.timeout" />
      </div>
    </div>
    <div class="total">
      <p>{{ dayTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClockingDay",
  data() {
    return {
      clockings: [
        { timein: "07:30", timeout: "12:31", note: "hello" },
        { timein: "13:00", timeout: "16:30", note: "world" }
      ],
      //dayTotal: "7:30",
      day: "Monday"
    };
  },
  computed: {
    dayTotal: function() {
      // `this` points to the vm instance
      return "dddd";
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
