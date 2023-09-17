<template>
  <div class="reti-dashboard-layout">
    <the-aside/>
    <div class="reti-dashboard-layout__content">
      header
      <main class="reti-dashboard-layout__content-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import TheAside from "@/components/aside/TheAside.vue";
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
    gap: 50px;

    padding: 72px 81px;
  }

  &__content-main {
    flex: 1 1 auto;
  }
}
</style>
