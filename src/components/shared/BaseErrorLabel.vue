<template>
  <div :class="getClassName">
    <span v-if="label" class="reti-error-label__label">{{ label }}</span>
    <slot></slot>
    <span v-if="error" class="reti-error-label__error">
      <font-awesome-icon :icon="faCircleExclamation"/>
      {{ error }}
    </span>
  </div>
</template>

<script>
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BaseErrorLabel",
  props: {
    label: String,
    error: String,
    className: {
      type: String,
      default: ""
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    faCircleExclamation: () => faCircleExclamation,
    getClassName () {
      return {
        "reti-error-label": true,
        "reti-error-label_full-width": this.fullWidth,
        [this.className]: !!this.className
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-error-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  &__label {
    color: rgba(0, 0, 34, 0.35);
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__error {
    position: absolute;
    top: calc(100% + 8px);

    color: #EA5050;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  &_full-width { width: 100%; }
}
</style>
