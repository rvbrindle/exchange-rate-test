<template>
  <div class="exchange-card">
    <select
      @change="setSelection(currencySelectedA, 0)"
      v-model="currencySelectedA"
    >
      <option
        v-for="currency in data"
        :key="currency"
        :disabled="currency['name'] === currencySelectedB['name']"
        :value="currency"
      >
        {{ currency["name"] }}
      </option>
    </select>

    <alternate-currency-component
      @click="switchSelectedCurrencies(currencySelectedA, currencySelectedB)"
    ></alternate-currency-component>

    <select
      @change="setSelection(currencySelectedB, 1)"
      v-model="currencySelectedB"
    >
      <option
        v-for="currency in data"
        :key="currency"
        :disabled="currency['name'] === currencySelectedA['name']"
        :value="currency"
      >
        {{ currency["name"] }}
      </option>
    </select>
  </div>
  <exchange-currencies-component
    v-if="currencySelectedA['inverseRate'] && currencySelectedB['inverseRate']"
    :exchangeRates="[
      currencySelectedA['inverseRate'],
      currencySelectedB['inverseRate'],
    ]"
  />
</template>
<script lang="ts">
import exchangeCurrenciesComponent from "@/components/ExchangeCurrenciesComponent.vue";
import alternateCurrencyComponent from "@/components/AlternateCurrencyComponent.vue";
import { useCurrencySelectedStore } from "@/stores/useCurrencySelectedStore";
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    alternateCurrencyComponent,
    exchangeCurrenciesComponent,
  },
  async setup() {
    const data = await axios
      .get(
        "https://www.floatrates.com/widget/00001884/27bc4844ef19a4e8bceccbee4db0ec7e/all.json"
      )
      .then((response) => {
        return response.data;
      });

    const currencySelectedStore = useCurrencySelectedStore();

    let currencySelectedA = ref(currencySelectedStore.$state.currencySelectedA);
    let currencySelectedB = ref(currencySelectedStore.$state.currencySelectedB);

    return { data, currencySelectedA, currencySelectedB };
  },
  methods: {
    setSelection(currency: object, selection: number) {
      const currencySelectedStore = useCurrencySelectedStore();
      return currencySelectedStore.setCurrency(currency, selection);
    },

    switchSelectedCurrencies(currencyA: string, currencyB: string) {
      let temp = currencyA;

      this.currencySelectedA = currencyB;
      this.currencySelectedB = temp;

      this.setSelection(this.currencySelectedA, 0);
      this.setSelection(this.currencySelectedB, 1);
    },
  },
});
</script>

<style lang="scss" scoped>
.exchange-card {
  width: 100%;
  align-content: space-evenly;
  justify-content: space-evenly;
  display: flex;
  background-color: #004080;
  border: 2px solid black;
  border-bottom: 0;
  padding: 2rem;
  select {
    width: 40%;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding: .2rem;
    outline: 0;
  }
}
</style>
