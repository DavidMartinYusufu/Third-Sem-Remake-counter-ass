<template>
  <!-- <Counter/> -->
  <!-- <About/> -->

  <router-view></router-view>
</template>

<script>
import Counter from "./components/Counter.vue";
import About from "./components/About.vue";
export default {
  components: {
    Counter,
    About
  },
};
</script>

<style scoped></style>
