<template>
  <div class="reti-dashboard-layout">
    <the-aside/>
    <div class="reti-dashboard-layout__content">
      <router-view name="header"></router-view>
      <main class="reti-dashboard-layout__content-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import TheAside from "@/components/aside/TheAside.vue";

export default {
  name: "DashboardLayout",
  components: { TheAside },
  beforeMount () {
    this.$store.dispatch("auth/getUserProfile");
  }
};
</script>

<style lang="scss" scoped>
.reti-dashboard-layout {
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: auto 1fr;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 48px;
  }

  &__content-main {
    flex: 1 1 auto;

    width: calc(100vw - 270px - 120px);
    overflow-x: hidden;
  }
}
</style>
