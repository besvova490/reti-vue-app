<template>
  <div class="reti-subscriptions-payment-method">
    <h2 class="reti-settings-subscription__section-title">
      PAYMENT METHOD
    </h2>
    <div class="reti-subscriptions-payment-method__main">
      <ul class="reti-subscriptions-payment-method__list">
        <li class="reti-subscriptions-payment-method__list-item">
          <font-awesome-icon class="reti-subscriptions-payment-method__list-item__icon" :icon="faCcMastercard" />
          <span class="reti-subscriptions-payment-method__list-item__label">**** **** **** 1234</span>
          <span class="reti-subscriptions-payment-method__list-item__value">Expires 04/2022</span>
          <span class="reti-subscriptions-payment-method__list-item__close">
            <font-awesome-icon :icon="faXmark" />
          </span>
        </li>
      </ul>
      <base-button type="tertiary" size="small" class-name="reti-subscriptions-payment-method__button">
        <font-awesome-icon :icon="faPlus" />
        Add payment method
      </base-button>
    </div>
  </div>
</template>

<script>
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "SubscriptionsPaymentMethod",
  computed: {
    faPlus: () => faPlus,
    faXmark: () => faXmark,
    faCcMastercard: () => faCcMastercard
  }
};
</script>

<style lang="scss">
.reti-subscriptions-payment-method {
  &__main {
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;

    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &__label {
      font-size: 16px;
      font-weight: 400;
    }

    svg {
      width: 32px;
      height: 32px;
    }

    &__close {
      width: 18px;
      height: 18px;
      color: #AAB2C8;

      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__value {
      margin-left: auto;
    }
  }

  &__button {
    padding-left: 0 !important;
  }
}
</style>
