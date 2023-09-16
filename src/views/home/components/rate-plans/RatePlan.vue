<template>
  <section class="reti-rate-plan">
    <h2 class="reti-home-page__title-with-divider">
      Customizable plans for every company
    </h2>
    <p class="reti-rate-plan__description">
      With our scalable packages, you can pay for what you need and leave out what you don’t. We will grow with you.
      <br/>
      <b>Figure out what package is best for you</b>
    </p>
    <div class="reti-rate-plan__plans-items">
      <rate-plan-card
        :key="index"
        v-for="(plan, index) in RATE_PLANS"
        :title="plan.title"
        :price="plan.price"
        :items="plan.items"
        :planTypes="plan.planTypes"
        :type="plan.type"
      >
        <base-button
          size="large"
          :type="plan.buttonType"
          class="reti-rate-plan__plans-items__button"
        >
          {{ plan.buttonLabel }}
        </base-button>
      </rate-plan-card>
    </div>
  </section>
</template>

<script>
// components
import RatePlanCard from "@/components/RatePlanCard.vue";

// helpers
import RATE_PLANS from "./constants";

export default {
  name: "RatePlan",
  components: { RatePlanCard },
  data () {
    return { RATE_PLANS };
  }
};
</script>

<style lang="scss" scoped>
.reti-rate-plan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;

  &__description {
    color: rgba(0, 0, 34, 0.35);
    text-align: center;
    font-family: "Lato";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    b { color: rgba(0, 0, 34, 0.75); }
  }

  &__plans-items {
    display: grid;
    grid-template-columns: repeat(3, 336px);
    justify-content: center;

    &__button { width: 200px; }

    .reti-rate-plan-card:first-of-type {
      position: relative;
      z-index: -1;

      transform: scale(.9) translateX(35px);
    }

    .reti-rate-plan-card:last-of-type {
      position: relative;
      z-index: -1;

      transform: scale(.9) translateX(-35px);
    }
  }
}
</style>
