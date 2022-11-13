<template>
  <div class="exchange-card">
    <select
      @change="setSelection(countrySelectedA, 0)"
      v-model="countrySelectedA"
    >
      <option
        v-for="country in data"
        :key="country"
        :disabled="country['name'] === countrySelectedB['name']"
        :value="country"
      >
        {{ country["name"] }}
      </option>
    </select>

    <alternate-currency-component
      @click="switchSelectedCurrencies(countrySelectedA, countrySelectedB)"
    ></alternate-currency-component>

    <select
      @change="setSelection(countrySelectedB, 1)"
      v-model="countrySelectedB"
    >
      <option
        v-for="country in data"
        :key="country"
        :disabled="country['name'] === countrySelectedA['name']"
        :value="country"
      >
        {{ country["name"] }}
      </option>
    </select>
  </div>
  <exchange-currencies-component
    v-if="countrySelectedA['inverseRate'] && countrySelectedB['inverseRate']"
    :exchangeRates="[
      countrySelectedA['inverseRate'],
      countrySelectedB['inverseRate'],
    ]"
  />
</template>
<script lang="ts">
import exchangeCurrenciesComponent from "@/components/ExchangeCurrenciesComponent.vue";
import alternateCurrencyComponent from "@/components/AlternateCurrencyComponent.vue";
import { useCountrySelectedStore } from "@/stores/useCountrySelectedStore";
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

    const countrySelectedStore = useCountrySelectedStore();

    let countrySelectedA = ref(countrySelectedStore.$state.countrySelectedA);
    let countrySelectedB = ref(countrySelectedStore.$state.countrySelectedB);

    return { data, countrySelectedA, countrySelectedB };
  },
  methods: {
    setSelection(country: object, selection: number) {
      const countrySelectedStore = useCountrySelectedStore();
      return countrySelectedStore.setCountry(country, selection);
    },

    switchSelectedCurrencies(countryA: string, countryB: string) {
      let temp = countryA;

      this.countrySelectedA = countryB;
      this.countrySelectedB = temp;

      this.setSelection(this.countrySelectedA, 0);
      this.setSelection(this.countrySelectedB, 1);
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
  background-color: purple;
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
