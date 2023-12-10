<template>
  <div class="reti-two-factor-success">
    <h2 class="reti-two-factor-success__title">
      <font-awesome-icon :icon="faCircleCheck" class="reti-two-factor-success__title-icon"/>
      Enable Two Factor Authentication
    </h2>
    <base-checkbox
      class-name="reti-two-factor-success__checkbox"
      :model-value="true"
      @update:model-value="onDisableTwoFactor"
    >
      Disable Two Factor Authentication
    </base-checkbox>
  </div>
</template>

<script>
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// components
import BaseCheckbox from "@/components/shared/BaseCheckbox.vue";

// helpers
import auth from "@/api/auth";

export default {
  components: {
    BaseCheckbox
  },
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  },
  computed: {
    faCircleCheck: () => faCircleCheck
  },
  methods: {
    async onDisableTwoFactor () {
      try {
        await auth.deleteTwoFactor();
        this.onSubmit();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style lang="scss" scoped>
.reti-two-factor-success {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__title {
    color: #002;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: "Lato", sans-serif;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }

  &__title-icon {
      color: #35D5C3;
      width: 16px;
      height: 16px;
    }
}
</style>
