<script setup lang="ts">
import ExchangeInputComponent from "./components/ExchangeInputComponent.vue";
</script>

<template>
  <div class="app-wrapper">
    <h1>Exchange App</h1>
    <Suspense>
      <ExchangeInputComponent />
    </Suspense>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 5rem 10rem;
  background-color: rgba(19, 31, 173, 0.71);


}
h1, h2, h3, h4, p, body {
  text-align: center;
  font-family: Verdana,serif;
  margin-bottom: 1rem;
}

h1 {
  font-weight: bold;
  color: white;
}

body {
  min-height: 100vh;
  background-image: linear-gradient(#a6a6e3, #c1ffff);
  font-size: 1.4rem;
}

</style>
