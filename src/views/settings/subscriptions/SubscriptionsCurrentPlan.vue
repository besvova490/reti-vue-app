<template>
  <div class="reti-subscriptions-current-plan">
    <h2 class="reti-settings-subscription__section-title">
      Current plan
    </h2>
    <div class="reti-subscriptions-current-plan__main">
      <h4 class="reti-subscriptions-current-plan__main__label">Team Package</h4>
      <p class="reti-subscriptions-current-plan__main__value">$10 per month</p>
      <div class="reti-subscriptions-current-plan__main__actions">
        <base-button size="small">Upgrade plan</base-button>
        <base-button ghost type="secondary" size="small">Cancel plan</base-button>
      </div>
      <span class="reti-subscriptions-current-plan__main__hint">Your plan renews on October 1, 2021</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionsCurrentPlan"
};
</script>

<style lang="scss" scoped>
.reti-subscriptions-current-plan {
  &__main {
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    &__hint,
    &__value,
    &__label {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    &__value {
      font-size: 20px;
      font-weight: 400;
    }

    &__hint {
      font-size: 14px;
      font-weight: 400;
    }

    &__actions {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: flex-start;
      gap: 15px;
    }
  }
}
</style>
