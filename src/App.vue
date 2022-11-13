<script setup lang="ts">
import ExchangeInputComponent from "./components/ExchangeInputComponent.vue";
</script>

<template>
  <h1>Exchange App</h1>
  <Suspense>
    <ExchangeInputComponent />
  </Suspense>
</template>

<style>

h1, h2, h3, h4, p, body {
  text-align: center;
  font-family: Verdana;
}


</style>
