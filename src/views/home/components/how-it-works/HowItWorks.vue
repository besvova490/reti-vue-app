<template>
  <section class="reti-home-page-how-its-work">
    <h2 class="reti-home-page__title-with-divider">
      How it works?
    </h2>
    <div class="reti-home-page-how-its-work__main">
      <how-it-works-card
        :key="index"
        v-for="(item, index) in items"
        :title="item.title"
        :description="item.description"
      >
        <component :is="item.icon"/>
      </how-it-works-card>
    </div>
  </section>
</template>

<script>
// components
import HowItWorksCard from "./HowItWorksCard.vue";
import IconCalendarEmpty from "@/components/icons/IconCalendarEmpty.vue";
import IconMailOpen from "@/components/icons/IconMailOpen.vue";
import IconSliderVertical from "@/components/icons/IconSliderVertical.vue";

// helpers
import HOW_IT_WORKS_SLIDES from "./constants";

export default {
  name: "HomeViewHowItWorks",
  components: {
    HowItWorksCard,
    IconCalendarEmpty,
    IconMailOpen,
    IconSliderVertical
  },
  data () {
    return {
      items: HOW_IT_WORKS_SLIDES
    };
  }
};
</script>

<style lang="scss" scoped>
.reti-home-page-how-its-work {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 130px;

  padding: 0 90px;

  &__main {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 100px;
  }
}
</style>
