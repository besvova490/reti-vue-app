<template>
  <div class="reti-home-page">
    <home-view-banner/>
  </div>
</template>

<script>
import HomeViewBanner from "./components/HomeViewBanner.vue";

export default {
  name: "HomeView",
  components: {
    HomeViewBanner
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

    &:after {
      width: 50px;
      height: 2px;
      border-radius: 2px;
      background-color: #1F64FF;

      position: absolute;
      top: 100%;
    }
  }
}
</style>
