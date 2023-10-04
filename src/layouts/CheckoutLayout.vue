<template>
  <div class="reti-checkout-layout">
    <icon-base-logo class="reti-checkout-layout__icon"/>
    <form @submit.prevent="submit" class="reti-checkout-layout__content">
      <slot></slot>
    </form>
  </div>
</template>

<script>
import IconBaseLogo from "@/components/icons/IconBaseLogo.vue";

export default {
  name: "CheckoutLayout",
  emits: ["submit"],
  components: {
    IconBaseLogo
  }
};
</script>

<style lang="scss">
.reti-checkout-layout {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 82px;

  background-color: #F5F6FA;

  &__icon {
    width: 320px;
    height: auto;
  }

  &__content {
    width: 850px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 64px;
  }
}
</style>
