<template>
  <nav class="reti-the-aside-navigation">
    <ul class="reti-the-aside-navigation__inner">
      <li
        :key="item.value"
        v-for="item in NAVIGATION_URLS"
        class="reti-the-aside-navigation__inner-item"
      >
        <router-link
          :to="{ name: 'dashboard', params: { nestedPath: item.value } }"
          name=""
          class="reti-the-aside-navigation__inner-item-link"
          active-class="reti-the-aside-navigation__inner-item-link_active"
        >
          <font-awesome-icon :icon="item.icon" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { faGauge, faChartSimple, faTableColumns, faUsers, faGear } from "@fortawesome/free-solid-svg-icons";

const NAVIGATION_URLS = [
  { label: "Overview", value: "", icon: faGauge },
  { label: "Insights", value: "insights", icon: faChartSimple },
  { label: "Templates", value: "templates", icon: faTableColumns },
  { label: "Membership", value: "membership", icon: faUsers },
  { label: "Settings", value: "settings", icon: faGear }
];

export default {
  name: "TheAsideNavigation",
  data () {
    return { NAVIGATION_URLS };
  }
};
</script>

<style lang="scss" scoped>
.reti-the-aside-navigation {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__inner-item-link {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;

    padding: 10px 32px;
    border-radius: 10px;

    background-color: transparent;

    color: #AAB2C8;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    transition: all 0.3s ease-in-out;

    &:before {
      content: " ";
      position: absolute;
      left: -35px;

      width: 4px;
      height: 100%;

      border-radius: 0px 3px 3px 0px;
      background: #1F64FF;

      opacity: 0;
    }

    &_active {
      color: #FFF;

      background: #1F64FF;
      box-shadow: 1px 4px 10px 0px rgba(31, 100, 255, 0.25);

      &:before { opacity: 1; }
    }
  }
}
</style>
