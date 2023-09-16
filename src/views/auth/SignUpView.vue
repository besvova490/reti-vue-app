<template>
  <form
    class="reti-sign-up-form"
    @submit.prevent="onSubmit"
  >
    <h1 class="reti-sign-up-form__title">
      Sign Up
    </h1>
    <div class="reti-sign-up-form__inner">
      <base-input
        placeholder="First Name"
        name="firstName"
        v-model="form.firstName"
        @change="clearError('firstName')"
        :error="errors.firstName"
      />
      <base-input
        placeholder="Last Name"
        name="lastName"
        v-model="form.lastName"
        @change="clearError('lastName')"
        :error="errors.lastName"
      />
      <base-input
        placeholder="Email"
        name="email"
        v-model="form.email"
        @change="clearError('email')"
        :error="errors.email"
      />
      <base-input
        placeholder="Password"
        name="password"
        htmlType="password"
        v-model="form.password"
        @change="clearError('password')"
        :error="errors.password"
      />
      <base-upload/>
    </div>
    <div class="reti-sign-up-form__actions">
      <base-button
        htmlType="submit"
        size="small"
        fullWidth
        class="reti-sign-up-form__submit-button"
      >
        Sign Up
      </base-button>
      <base-button
        size="small"
        fullWidth
        type="secondary"
        to="/auth/log-in"
        class="reti-sign-up-form__submit-button"
      >
        Login
      </base-button>
    </div>
  </form>
</template>

<script>
import * as yup from "yup";

// components
import BaseUpload from "@/components/shared/BaseUpload.vue";

// helpers
import validateForm from "@/helpers/validateForm";

const validationSchema = yup.object().shape({
  firstName: yup.string().nullable().required("First Name is required"),
  lastName: yup.string().nullable().required("Last Name is required"),
  email: yup.string().nullable().email("Email is invalid").required("Email is required"),
  password: yup.string().nullable().required("Password is required")
});

export default {
  name: "LoginView",
  components: { BaseUpload },
  data () {
    return {
      form: {
        email: null,
        password: null
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
      } else {
        console.log(this.form);
      }
    }
  }
};

</script>

<style lang="scss" scoped>
.reti-sign-up-form {
  padding: 24px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  box-shadow: 1px 4px 10px 0px rgba(170, 178, 200, 0.45);

  &__inner {
    display: grid;
    grid-template-columns: 260px 260px;
    column-gap: 16px;
    row-gap: 32px;
  }

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
