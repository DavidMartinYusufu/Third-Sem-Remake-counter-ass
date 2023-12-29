<template>
  <header>COUNTER</header>
  <main>
    <section>
      <button @click="handleIncrement">Increase</button>
      <h2>{{ count }}</h2>
      <button @click="handleDecrement">decrease</button>
    </section>

    <section>
      <button @click="handleReset">reset</button>
    </section>

    <section>
      <input v-model="inputValue" type="text" />
      <button @click="setValue">set</button>
    </section>

    <section>
      <p>404</p>
      <p>Error boundary</p>
    </section>
  </main>

  <router-link to="/about">Go to About</router-link>
</template>

<script setup>
import { useComposableCounter } from "./Hook/CounterHook";
const { handleDecrement, handleIncrement, handleReset, setValue, count, inputValue} =
  useComposableCounter();

</script>

<style scoped></style>
