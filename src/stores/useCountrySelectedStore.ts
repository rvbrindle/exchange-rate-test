import { defineStore } from "pinia";

export const useCountrySelectedStore = defineStore("countrySelection", {

  state: () => ({
    countrySelectedA: {},
    countrySelectedB: {},
  }),

  actions: {
    setCountry(country: object, selection: number) {
      return (selection === 0) ? this.$state.countrySelectedA = country : this.$state.countrySelectedB = country;
    },
  },
});
