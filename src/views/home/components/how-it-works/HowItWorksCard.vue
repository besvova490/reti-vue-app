<template>
  <div class="reti-how-it-works-card">
    <span class="reti-how-it-works-card__icon">
      <slot></slot>
    </span>
    <h3 class="reti-how-it-works-card__title">{{ title }}</h3>
    <p class="reti-how-it-works-card__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-how-it-works-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__icon {
    width: 52px;
    height: 52px;
    flex: 0 0 52px;
    color: #1F64FF;
  }

  &__title {
    color: #000;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;

    margin-top: 38px;
    margin-bottom: 23px;
  }

  &__description {
    color: #002;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
