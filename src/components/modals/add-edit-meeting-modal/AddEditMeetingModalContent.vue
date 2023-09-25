<template>
  <form
    class="reti-add-edit-meeting-modal-content"
    @submit.prevent="onSubmit"
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
          v-model="form.isFavorite"
          @change="clearError('isFavorite')"
          :error="errors.isFavorite"
        />
      </div>
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
import BaseSwitch from "@/components/shared/BaseSwitch.vue";
import BaseDatepicker from "@/components/shared/BaseDatepicker.vue";

export default {
  name: "AddEditMeetingModalContent",
  props: {},
  components: {
    BaseSwitch,
    BaseDatepicker
  },
  data () {
    return {
      form: {
        title: "",
        description: ""
      },
      errors: {}
    };
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

  &__submit-button { margin-left: auto; }
}
</style>
