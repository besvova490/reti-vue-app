<template>
  <section class="reti-auth-layout">
    <div class="reti-auth-layout__content">
      <icon-base-logo/>
      <div class="reti-auth-layout__content__form">
        <router-view></router-view>
      </div>
    </div>
    <img
      src="../assets/images/auth/auth-page-background.png"
      alt="auth page background"
      class="reti-auth-layout__background-image"
    >
  </section>
</template>

<script>
import IconBaseLogo from "../components/icons/IconBaseLogo.vue";

export default {
  name: "AuthLayout",
  components: {
    IconBaseLogo
  }
};
</script>

<style lang="scss" scoped>
.reti-auth-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: #F5F6FA;

  &__content {
    display: flex;
    flex-direction: column;

    background-color: #FFF;

    height: 100%;
    width: 100%;
    padding: 89px;

    &__form {
      flex: 1 1 auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__background-image {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
</style>
