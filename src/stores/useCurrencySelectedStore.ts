import { defineStore } from "pinia";

export const useCurrencySelectedStore = defineStore("currencySelection", {

  state: () => ({
    currencySelectedA: {},
    currencySelectedB: {},
  }),

  actions: {
    setCurrency(currency: object, selection: number) {
      return (selection === 0) ? this.$state.currencySelectedA = currency : this.$state.currencySelectedB = currency;
    },
  },
});
