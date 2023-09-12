<template>
  <nav class="reti-navigation">
    <ul class="reti-navigation__inner">
      <li :key="route.value" v-for="route in BASE_NAVIGATION_URLS" class="reti-navigation__item">
        <router-link :to="route.value" class="reti-navigation__item-inner">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { BASE_NAVIGATION_URLS } from "../../constants/navigation.constants";

export default {
  name: "TheNavigation",
  data () {
    return { BASE_NAVIGATION_URLS };
  }
};
</script>

<style lang="scss" scoped>
.reti-navigation {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
  }

  &__item-inner {
    color: #002;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>
