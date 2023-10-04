<template>
  <checkout-layout>
    <div class="reti-checkout-page__payment-info">
      <h2 class="reti-checkout-page__payment-info__title">
        PAYMENT information
      </h2>
      <div class="reti-checkout-page__block">
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="Name"></base-input>
        </div>
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="Email"></base-input>
        </div>
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="Address"></base-input>
        </div>
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="City"></base-input>
        </div>
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="State"></base-input>
          <base-input full-width label="Zip"></base-input>
        </div>
        <div class="reti-checkout-page__block__row">
          <base-select full-width label="Country"></base-select>
        </div>
      </div>
    </div>
    <div class="reti-checkout-page__payment-info">
      <h2 class="reti-checkout-page__payment-info__title">
        PAYMENT information
      </h2>
      <div class="reti-checkout-page__block">
        <div class="reti-checkout-page__block__row">
          <base-input full-width label="Card"></base-input>
          <base-input full-width label="MM/YY"></base-input>
        </div>
      </div>
    </div>
    <base-button full-width> Pay $000 </base-button>
  </checkout-layout>
</template>

<script>
// components
import BaseInput from "@/components/shared/BaseInput.vue";
import BaseSelect from "@/components/shared/BaseSelect.vue";

// layouts
import CheckoutLayout from "@/layouts/CheckoutLayout.vue";

export default {
  name: "CheckoutView",
  components: {
    CheckoutLayout,
    BaseInput,
    BaseSelect
  }
};
</script>

<style lang="scss">
.reti-checkout-page {
  &__block {
    width: 100%;

    border-radius: 10px;
    background: #fff;
    box-shadow: 1px 4px 10px 0px rgba(170, 178, 200, 0.45);

    &__row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;

      width: 100%;
      flex: 0 0 100%;

      padding: 12px 72px;
      border-bottom: 1px solid #f5f6fa;
    }
  }

  &__payment-info {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    &__title {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
}

.reti-checkout-layout {
  .reti-base-select__inner {
    background: #F5F6FA;
  }

  .reti-error-label {
    display: grid;
    align-items: center;
    column-gap: 24px;
    grid-template-columns: 60px 1fr;
    grid-template-areas:
      "label block"
      "error error";

    .reti-error-label__label {
      color: rgba(0, 0, 34, 0.6);
      grid-area: label;
      justify-self: flex-end;
    }
    .reti-error-label__error {
      grid-area: error;
    }
    input {
      grid-area: block;
    }
  }
}
</style>
