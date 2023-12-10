<template>
  <div v-if="!isTwoFactorEnabled" class="reti-two-factor-settings">
    <h2 class="reti-two-factor-settings__title">
      Enable Two Factor Authentication
    </h2>
    <form class="reti-two-factor-settings__main" @submit.prevent="onSubmit">
      <template v-if="step === 1">
        <span class="reti-two-factor-settings__main__step">Step 1</span>
        <div class="reti-two-factor-settings__main__content">
          <div class="reti-two-factor-settings__main__image">
            <qrcode-vue :value="qrCodeValue" size="140"/>
          </div>
          <div class="reti-two-factor-settings__main__info">
            <b>Scan the QR code with authenticator app</b>
            <span>
              App will generate a 6 digit code for you to enter in next step
            </span>
          </div>
        </div>
        <base-button
          @click="onNextStep"
          fullWidth
        >
          I scanned the QR code
        </base-button>
      </template>
      <template v-else>
        <span class="reti-two-factor-settings__main__step">Step 2</span>
        <div class="reti-two-factor-settings__main__content">
          <img src="../../assets/images/auth/two-factore-image.png" alt="" class="reti-two-factor-settings__main__image">
          <div class="reti-two-factor-settings__main__info">
            <b>Enter the 6-digit code from your authenticator app</b>
            <span>this will connect app</span>
          </div>
        </div>
        <base-input
          placeholder="6-digit code"
          name="twoFactorCode"
          v-model="form.twoFactorCode"
          @change="clearError('twoFactorCode')"
          :error="errors.twoFactorCode"
          class-name="reti-settings-user-management__input"
        />
        <base-button
          @click="onNextStep"
          fullWidth
          html-type="submit"
        >
          Verify
        </base-button>
      </template>
    </form>
  </div>
  <base-two-factor-success v-else @submit="onRemoveTwoFactor"/>
</template>

<script>
import * as yup from "yup";
import QrcodeVue from "qrcode.vue";

// components
import BaseTwoFactorSuccess from "./BaseTwoFactorSuccess.vue";

// helpers
import validateForm from "@/helpers/validateForm";
import auth from "@/api/auth";

const validationSchema = yup.object().shape({
  twoFactorCode: yup.string().nullable().required("Code is required")
});

export default {
  data () {
    return {
      step: 1,
      form: { twoFactorCode: null },
      errors: {},
      qrCodeValue: null
    };
  },
  computed: {
    isTwoFactorEnabled () {
      return this.$store.getters["auth/user"].isTwoFactorAuthEnabled;
    }
  },
  components: {
    QrcodeVue,
    BaseTwoFactorSuccess
  },
  methods: {
    onNextStep () {
      this.step++;
    },
    clearError (field) {
      this.errors[field] = null;
    },
    onSubmit () {
      const { errors, isValid } = validateForm(validationSchema, this.form);

      if (!isValid) {
        this.errors = errors;

        return;
      }

      auth.postTwoFactor(this.form).then(() => {
        this.$store.dispatch("auth/getUserProfile");
      }).catch(error => {
        this.errors.twoFactorCode = error.response.data.message;
      });
    },
    onRemoveTwoFactor () {
      this.$store.dispatch("auth/getUserProfile");
      this.step = 1;
      this.getQrCodeValue();
    },
    getQrCodeValue () {
      auth.getTwoFactor().then(res => {
        this.qrCodeValue = res.data.token;
      }).catch(() => null);
    }
  },
  mounted () {
    if (!this.$store.getters["auth/user"].isTwoFactorAuthEnabled) {
      this.getQrCodeValue();
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-two-factor-settings {
  display: flex;
  flex-direction: column;
  gap: 32px;

  font-family: "Lato", sans-serif;

  &__title {
    color: #002;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__step {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 34, 0.5);
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }

    &__image {
      flex: 0 0 140px;
      width: 140px;
      height: 140px;

      object-fit: contain;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
