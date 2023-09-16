<template>
  <section class="reti-why-its-important">
    <div class="reti-why-its-important__title">
      <h2 class="reti-home-page__title-with-divider">
        How it works?
      </h2>
      <div class="reti-why-its-important__hint-text">
        How many hours are you and your team wasting in meetings that aren’t adding to your productivity?
        <br/>
        In a 2017 survey of office workers by the <i>Harvard Business Review</i>, key findings brought to light how useless meetings can actually be.
      </div>
    </div>
    <why-its-important-slider/>
    <p class="reti-why-its-important__hint-text">
      Feeling like there aren’t enough hours in the day is a common problem faced by many leaders in this world.
      <br/>
      <b>Try post meeting surveys now and avoid wasting time.</b>
    </p>
    <base-button size="large">Sign up today</base-button>
  </section>
</template>

<script>
import WhyItsImportantSlider from "./WhyItsImportantSlider.vue";

export default {
  name: "WhyItsImportant",
  components: { WhyItsImportantSlider }
};

</script>

<style lang="scss" scoped>
.reti-why-its-important {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &__hint-text {
    color: rgba(0, 0, 34, 0.35);
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    i { color: rgba(0, 0, 34, 0.75); }
  }
}
</style>
