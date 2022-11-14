<template>
  <button class="alternate-currency" @click="handleSpin">
    <font-awesome-icon size="xl" :class="spinning" icon="fa-solid fa-rotate" />
  </button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let spinning = ref("");

    return { spinning };
  },
  methods: {
    handleSpin() {
      const vm = this;
      vm.spinning = "fa-spin";
      setTimeout(() => {
        vm.spinning = "";
      }, 1000);
    },
  },
});
</script>
<style lang="scss">
button {
  transition: all ease-in-out .2s;
  transform: scale(1);
  border-radius: 1rem;
  outline: white;
  border: 1px solid white;

  &:hover {
    transform: scale(1.2);
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.65);
  }
}
</style>
