<template>
  <div class="exchange-rates-container">
    <div class="exchange-rates-container-input">
      <label for="inputConversion">Enter amount to convert</label>
      <input
        name="inputConversion"
        id="inputConversion"
        type="number"
        v-model="conversionAmount"
      />
    </div>

    <div v-if="conversionAmount < 0.1" class="warning">Minimum amount must exceed 0.10</div>
    <div v-else-if="inverseRate() < 0.1" class="warning">Please enter a higher amount/value of {{ currencySelectedA.code
      }} to convert
    </div>
    <div class="converted" v-else>
      {{ conversionAmount }} {{ currencySelectedA.code }} = {{ inverseRate() }}
      {{ currencySelectedB.code }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrencySelectedStore } from "@/stores/useCurrencySelectedStore";
import { defineProps, ref } from "vue";
import { storeToRefs } from "pinia";

const props = defineProps({
  exchangeRates: Object,
});

const currencySelectedStore = useCurrencySelectedStore();
const { currencySelectedA, currencySelectedB } = storeToRefs(currencySelectedStore);

let conversionAmount = ref(1);

function inverseRate() {
  let currentRate: number = +(props.exchangeRates[0] / props.exchangeRates[1]);
  return (currentRate * conversionAmount.value).toFixed(2);
}
</script>

<style lang="scss" scoped>

.exchange-rates-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid black;
  padding: 1rem;
  background-color: #1f6f92;


  input {
    margin: 1rem;
    display: flex;
    justify-content: space-around;

    padding: .6rem;
    outline: 0;
    border: 0;
    border-radius: 10rem;
    font-size: 1.4rem;

    label {
      padding: 1rem;
    }
  }

  .converted {
    font-size: 2rem;
  }
}

.warning {
  color: orange;
}
</style>
