<template>
  <form
    class="reti-login-form"
    @submit.prevent="onSubmit"
  >
    <h1 class="reti-login-form__title">
      Two-factor authentication
    </h1>
    <base-input
      placeholder="XXXXXX"
      name="twoFactorCode"
      v-model="form.twoFactorCode"
      label="Authentication code"
      @change="clearError('twoFactorCode')"
      :error="errors.twoFactorCode"
    />
    <div class="reti-login-form__actions">
      <base-button
        htmlType="submit"
        size="small"
        fullWidth
        class="reti-login-form__submit-button"
      >
        Verify
      </base-button>
    </div>
  </form>
</template>

<script>
import * as yup from "yup";

// helpers
import validateForm from "@/helpers/validateForm";
import auth from "@/api/auth";

const validationSchema = yup.object().shape({
  twoFactorCode: yup.string().nullable().required("Email is required")
});

export default {
  name: "LoginView",
  data () {
    return {
      form: {
        twoFactorCode: null
      },
      errors: {}
    };
  },
  methods: {
    clearError (field) {
      this.errors[field] = null;
    },
    onSubmit () {
      const { errors, isValid } = validateForm(validationSchema, this.form);

      if (!isValid) {
        this.errors = errors;

        return;
      }

      auth.postSignIn(this.form)
        .then(resp => {
          localStorage.setItem("accessToken", resp.data.accessToken);
          localStorage.setItem("refreshToken", resp.data.refreshToken);

          this.$store.commit("auth/setIsAuthenticated", !!resp.data.accessToken);
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.errors = { password: error.response.data.message };
        });
    }
  }
};

</script>

<style lang="scss" scoped>
.reti-login-form {
  width: 420px;
  padding: 24px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  box-shadow: 1px 4px 10px 0px rgba(170, 178, 200, 0.45);

  &__title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;

    margin-bottom: 42px
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  &__submit-button {
    margin-top: 12px;
  }
}
</style>
