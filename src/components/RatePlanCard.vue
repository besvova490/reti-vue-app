<template>
  <div class="reti-rate-plan-card" :class="className">
    <h3 class="reti-rate-plan-card__title">
      {{ title }}
    </h3>
    <p class="reti-rate-plan-card__price">
      {{ price }}
    </p>
    <base-rate-plan-switch
      v-if="planTypes && !!planTypes.length"
      :items="planTypes"
      v-model="activePlanType"
    />
    <ul class="reti-rate-plan-card__items">
      <li :key="index" v-for="(item, index) in items" class="reti-rate-plan-card__items__item">
        <font-awesome-icon :icon="faCheck" />{{ item }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// components
import BaseRatePlanSwitch from "./shared/BaseRatePlanSwitch.vue";

export default {
  name: "RatePlanCard",
  components: { BaseRatePlanSwitch },
  props: {
    type: String,
    title: String,
    price: Number,
    items: Array,
    planTypes: Array
  },
  computed: {
    faCheck: () => faCheck,
    className () {
      return { "reti-rate-plan-card_type-primary": this.type === "primary" };
    }
  },
  data () {
    return { activePlanType: this.planTypes ? this.planTypes[0].value : null };
  }
};

</script>

<style lang="scss">
.reti-rate-plan-card {
  border-radius: 10px;
  border: 1px solid #1F64FF;
  background: #FFF;
  color: #000;

  padding: 35px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &__title {
    color: inherit;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  &__items {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      color: inherit;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  &__price {
    color: inherit;
    font-family: "Lato", sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    position: relative;

    &::after,
    &::before {
      color: inherit;
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: .3;
    }

    &::before {
      content: "$";
      position: absolute;
      top: 0;
      left: -10px;
    }

    &::after {
      content: "/mo";
      position: absolute;
      bottom: 0;
      right: -10px;
    }
  }

  &_type-primary {
    color: #FFF;

    background: #1F64FF;
    box-shadow: 0px 6px 20px 3px rgba(31, 100, 255, 0.30);
  }
}
</style>
