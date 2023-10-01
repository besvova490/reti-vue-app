<template>
  <div class="reti-dashboard-settings-layout">
    <h2 class="reti-dashboard-settings-layout__title">
      Settings
    </h2>
    <aside class="reti-dashboard-settings-layout__aside">
      <the-profile-score-plan />
      <dashboard-settings-navigation :items={...NAVIGATION_LINKS}>
      </dashboard-settings-navigation>
    </aside>
    <div class="reti-dashboard-settings-layout__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// components
import TheProfileScorePlan from "@/components/TheProfileScorePlan.vue";
import DashboardSettingsNavigation from "./DashboardSettingsNavigation.vue";

const NAVIGATION_LINKS = [
  { value: "/dashboard/settings", label: "Subscriptions", icon: "faMoneyBill" },
  { value: "/dashboard/settings/invoice", label: "Invoice", icon: "faFileInvoiceDollar" },
  { value: "/dashboard/settings/user-management", label: "User Management", icon: "faUser" }
];

export default {
  name: "DashboardSettings",
  components: {
    DashboardSettingsNavigation,
    TheProfileScorePlan
  },
  data () {
    return {
      NAVIGATION_LINKS
    };
  }
};
</script>

<style lang="scss" scoped>
.reti-dashboard-settings-layout {
  display: grid;
  grid-template-columns: 420px 1fr;
  grid-auto-rows: max-content;
  gap: 44px;

  &__aside {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  &__title {
    grid-column: 1/-1;

    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__content {

  }
}
</style>
