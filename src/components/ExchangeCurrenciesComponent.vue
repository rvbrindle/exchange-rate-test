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
    <div v-else-if="inverseRate() < 0.1" class="warning">Please enter a higher amount/value of {{ countrySelectedA.code }} to convert
    </div>
    <div v-else>
      {{ conversionAmount }} {{ countrySelectedA.code }} = {{ inverseRate() }}
      {{ countrySelectedB.code }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCountrySelectedStore } from "@/stores/useCountrySelectedStore";
import { defineProps, ref } from "vue";
import { storeToRefs } from "pinia";

const props = defineProps({
  exchangeRates: Object,
});

const countrySelectedStore = useCountrySelectedStore();
const { countrySelectedA, countrySelectedB } = storeToRefs(countrySelectedStore);

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
  justify-content: center;

  &-input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;

    label {
      padding: 2rem;
    }
  }
}

.warning {
  color: orange;
}
</style>
