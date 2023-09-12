<template>
  <the-header/>
  <main class="reti-base-layout__content">
    <slot></slot>
  </main>
  <the-footer/>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "BaseLayout",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
.reti-base-layout {
  &__content {
    flex: 1 1 auto;
  }
}
</style>
