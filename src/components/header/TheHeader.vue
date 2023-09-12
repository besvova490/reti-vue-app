<template>
  <header class="reti-the-header">
    <icon-base-logo/>
    <the-navigation/>
    <div class="reti-the-header__action-buttons">
      <base-button type="secondary" to="/auth/log-in">Login</base-button>
      <base-button to="/auth/sign-up">Sign up</base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
import IconBaseLogo from "../icons/IconBaseLogo.vue";
import TheNavigation from "./TheNavigation.vue";

export default {
  name: "TheHeader",
  components: {
    BaseButton,
    IconBaseLogo,
    TheNavigation
  }
};

</script>

<style lang="scss">
.reti-the-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 56px 90px;

  &__action-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
