<template>
  <section class="reti-dashboard-view">
    <h1 class="reti-dashboard-view__title">Meetings</h1>
    <base-tabs v-model="activeTab" :tabs="tabs"></base-tabs>
    <dashboard-view-empty v-if="isEmpty"/>
    <div class="reti-dashboard-view__content">
      <base-meeting-card
        v-for="i in 3" :key="i"
        :title="`Meeting ${i}`"
        :date="format(new Date(), 'MMM dd, HH:mm')"
        :isFavorite="i % 2"
      />
    </div>
  </section>
</template>

<script>
import { format } from "date-fns";

// components
import BaseTabs from "@/components/BaseTabs.vue";
import DashboardViewEmpty from "./components/DashboardViewEmpty.vue";
import BaseMeetingCard from "@/components/BaseMeetingCard.vue";

const TABS_LIST = [
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
  { label: "Archived", value: "archived" }
];

export default {
  name: "DashboardView",
  components: {
    BaseTabs,
    DashboardViewEmpty,
    BaseMeetingCard
  },
  data () {
    return {
      tabs: TABS_LIST,
      activeTab: TABS_LIST[0].value,
      isEmpty: false
    };
  },
  methods: {
    format
  }
};
</script>

<style lang="scss" scoped>
.reti-dashboard-view {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
