<template>
  <aside class="reti-the-aside">
    <icon-base-logo/>
    <the-aside-navigation/>
    <the-upgrade-plan/>
  </aside>
</template>

<script>
// components
import TheAsideNavigation from "./components/TheAsideNavigation.vue";
import IconBaseLogo from "../icons/IconBaseLogo.vue";
import TheUpgradePlan from "../TheUpgradePlan.vue";

export default {
  name: "TheAside",
  components: {
    IconBaseLogo,
    TheAsideNavigation,
    TheUpgradePlan
  }
};
</script>

<style lang="scss" scoped>
.reti-the-aside {
  width: 270px;
  min-height: 100vh;
  padding: 24px;

  position: sticky;
  top: 0;

  background-color: #F5F6FA;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  .reti-upgrade-plan { margin-top: auto; }
}
</style>
