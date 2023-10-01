<template>
  <form
    class="reti-add-edit-meeting-modal-content"
    @submit.prevent="handleSubmit"
  >
    <div class="reti-add-edit-meeting-modal-content__inner">
      <base-input
        placeholder="Add title"
        name="title"
        v-model="form.title"
        @change="clearError('title')"
        :error="errors.title"
      />
      <base-datepicker
        placeholder="Add date"
        name="date"
        v-model="form.date"
        @change="clearError('date')"
        :error="errors.date"
      />
      <base-textarea
        wrapper-class="reti-input-textarea"
        class-name="reti-input-textarea__inner"
        placeholder="Add description"
        name="description"
        v-model="form.description"
        @change="clearError('description')"
        :error="errors.description"
      />
      <div class="reti-add-edit-meeting-modal-content__form-item">
        Create as draft
        <base-switch
          v-model="form.isDraft"
          @change="clearError('isDraft')"
          :error="errors.isDraft"
        />
      </div>
      <multi-email-input
        v-model="form.guests"
        class-name="reti-add-edit-meeting-modal-content__full-width-input"
      />
    </div>
    <base-button
      size="small"
      html-type="submit"
      class="reti-add-edit-meeting-modal-content__submit-button"
    >
      Save
    </base-button>
  </form>
</template>

<script>
import * as yup from "yup";

// components
import MultiEmailInput from "@/components/MultiEmailInput.vue";
import BaseSwitch from "@/components/shared/BaseSwitch.vue";
import BaseDatepicker from "@/components/shared/BaseDatepicker.vue";

// helpers
import validateForm from "@/helpers/validateForm";

const validationSchema = yup.object().shape({
  title: yup.string().nullable().required("Title is required"),
  description: yup.string().nullable().required("Description is required"),
  date: yup.date().nullable().required("Date is required"),
  isDraft: yup.boolean().nullable().required("Is draft is required"),
  guests: yup.array().of(yup.string().email("Email is invalid")).nullable()
});

const formInitialValues = {
  title: null,
  date: new Date(),
  description: null,
  isDraft: false,
  guests: []
};

export default {
  name: "AddEditMeetingModalContent",
  props: {},
  components: {
    BaseSwitch,
    BaseDatepicker,
    MultiEmailInput
  },
  data () {
    return {
      form: { ...formInitialValues },
      errors: {}
    };
  },
  methods: {
    handleSubmit () {
      const { errors, isValid } = validateForm(validationSchema, this.form);

      if (!isValid) {
        this.errors = errors;
      } else {
        console.log("submit", this.form);
        this.form = { ...formInitialValues };
      }
    },
    clearError (field) {
      this.errors[field] = null;
    }
  }
};
</script>

<style lang="scss">
.reti-add-edit-meeting-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    row-gap: 32px;

    .reti-input-textarea {
      grid-column: 1/-1;
      height: 120px;

      &__inner {
        height: 100%;
      }
    }
  }

  &__form-item {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }

  &__full-width-input { grid-column: 1/-1; }

  &__submit-button { margin-left: auto; }
}
</style>
