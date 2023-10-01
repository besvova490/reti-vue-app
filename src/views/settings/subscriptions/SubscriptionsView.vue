<template>
  <section class="reti-settings-subscription">
    <h1 class="reti-settings-subscription__title">Subscriptions</h1>
    <subscriptions-current-plan />
    <subscriptions-payment-method />
    <subscriptions-bulling-history />
  </section>
</template>

<script>
import SubscriptionsCurrentPlan from "./SubscriptionsCurrentPlan.vue";
import SubscriptionsPaymentMethod from "./SubscriptionsPaymentMethod.vue";
import SubscriptionsBullingHistory from "./SubscriptionsBullingHistory.vue";

export default {
  name: "SubscriptionsView",
  components: {
    SubscriptionsCurrentPlan,
    SubscriptionsPaymentMethod,
    SubscriptionsBullingHistory
  }
};
</script>

<style lang="scss">
.reti-settings-subscription {
  border-radius: 10px;
  background-color: #F5F6FA;

  padding: 23px 38px;

  display: flex;
  flex-direction: column;
  gap: 48px;

  &__title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  &__section-title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

    padding-bottom: 14px;
    border-bottom: 1px solid #002;
  }
}
</style>
