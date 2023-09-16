<template>
  <base-layout>
    <div class="reti-home-page">
      <home-view-banner/>
      <how-it-works/>
      <why-its-important/>
      <rate-plan/>
      <try-for-free/>
      <about-us/>
      <contact-us/>
    </div>
  </base-layout>
</template>

<script>
// layouts
import BaseLayout from "@/layouts/BaseLayout.vue";

// components
import HomeViewBanner from "./components/HomeViewBanner.vue";
import HowItWorks from "./components/how-it-works/HowItWorks.vue";
import WhyItsImportant from "./components/why-its-important/WhyItsImportant.vue";
import RatePlan from "./components/rate-plans/RatePlan.vue";
import TryForFree from "./components/TryForFree.vue";
import AboutUs from "./components/AboutUs.vue";
import ContactUs from "./components/ContactUs.vue";

export default {
  name: "HomeView",
  components: {
    HomeViewBanner,
    HowItWorks,
    WhyItsImportant,
    RatePlan,
    TryForFree,
    AboutUs,
    ContactUs,
    BaseLayout
  }
};
</script>

<style lang="scss">
.reti-home-page {
  display: flex;
  flex-direction: column;
  gap: 150px;

  &__title-with-divider {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    position: relative;
    padding-bottom: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: " ";
      width: 50px;
      height: 4px;
      border-radius: 2px;
      background-color: #1F64FF;

      position: absolute;
      top: 100%;
    }
  }
}
</style>
