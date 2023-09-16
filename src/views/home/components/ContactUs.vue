<template>
  <section class="reti-contact-us">
    <div class="reti-contact-us__banner">
      We all know that time is money...
      so stop wasting time, and save money with Rate It!
    </div>
    <form @submit.prevent="onSubmit" class="reti-contact-us__form">
      <div class="reti-contact-us__form-inner">
        <base-input
          type="secondary"
          label="First Name"
          name="firstName"
          v-model="form.firstName"
          @change="clearError('firstName')"
          :error="errors.firstName"
        />
        <base-input
          type="secondary"
          label="Last Name"
          name="lastName"
          v-model="form.lastName"
          @change="clearError('lastName')"
          :error="errors.lastName"
        />
        <base-input
          type="secondary"
          label="Mail"
          name="email"
          v-model="form.email"
          @change="clearError('email')"
          :error="errors.email"
        />
        <base-input
          type="secondary"
          label="Phone"
          name="phone"
          v-model="form.phone"
          @change="clearError('phone')"
          :error="errors.phone"
        />
        <base-textarea
          type="secondary"
          label="Message"
          placeholder="Write your message"
          name="message"
          @change="clearError('message')"
          v-model="form.message"
          :error="errors.message"
        />
      </div>
      <base-button
        htmlType="submit"
        class="reti-contact-us__form__submit-button"
      >
        Send Message
      </base-button>
    </form>
  </section>
</template>

<script>
import * as yup from "yup";

// helpers
import validateForm from "@/helpers/validateForm";

const validationSchema = yup.object().shape({
  firstName: yup.string().nullable().required("First name is required"),
  lastName: yup.string().nullable().required("Last name is required"),
  email: yup.string().nullable().email("Email is invalid").required("Email is required"),
  phone: yup.string().nullable().required("Phone is required"),
  message: yup.string().nullable().required("Message is required")
});

const FORM_INIT_VALUES = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  message: null
};

export default {
  name: "ContactUs",
  data () {
    return {
      form: { ...FORM_INIT_VALUES },
      errors: {}
    };
  },

  methods: {
    clearError (name) {
      this.errors[name] = null;
    },
    onSubmit () {
      const { errors, isValid } = validateForm(validationSchema, this.form);

      if (isValid) {
        console.log(this.form);

        this.form = { ...FORM_INIT_VALUES };
      } else {
        this.errors = errors;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-contact-us {
  display: grid;
  grid-template-columns: 536px 1fr;

  &__banner {
    background-color: #1F64FF;
    padding: 76px 100px;

    color: #FFF;
    font-family: "Lato", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 100px;

    padding: 85px;

    &__submit-button { margin-left: auto; }
  }

  &__form-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 90px;
    row-gap: 60px;
  }
}
</style>
