<template>
  <div class="reti-subscriptions-bulling-history">
    <h2 class="reti-settings-subscription__section-title">
      BILLING HISTORY
    </h2>
    <ul class="reti-subscriptions-bulling-history__main">
      <li class="reti-subscriptions-bulling-history__main__item">
        <span class="reti-subscriptions-bulling-history__main__item-date">
          Dec 1, 2020
          <font-awesome-icon :icon="faUpRightFromSquare" />
        </span>
        <span class="reti-subscriptions-bulling-history__main__item-price">
          $10
        </span>
        <span class="reti-subscriptions-bulling-history__main__item-package-name">
          Team Package
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "SubscriptionsBullingHistory",
  computed: {
    faUpRightFromSquare: () => faUpRightFromSquare
  }
};
</script>

<style lang="scss" scoped>
.reti-subscriptions-bulling-history {
  &__main {
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    &__item {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 12px;
    }

    &__item-date,
    &__item-price,
    &__item-package-name {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;

      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
