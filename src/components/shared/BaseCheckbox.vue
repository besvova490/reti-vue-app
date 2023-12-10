<template>
  <base-error-label :label="label" :error="error" :class-name="wrapperClass">
    <div :class="getClassName" @click="onClick">
      <div class="reti-checkbox__inner">
        <font-awesome-icon :icon="faCheck" />
      </div>
      <input :value="isChecked" type="checkbox" v-show="false">
      <slot></slot>
    </div>
  </base-error-label>
</template>

<script>
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// components
import BaseErrorLabel from "./BaseErrorLabel.vue";

export default {
  name: "BaseCheckbox",
  props: {
    wrapperClass: String,
    label: String,
    error: String,
    modelValue: Boolean,
    className: String
  },
  emits: ["update:modelValue"],
  components: {
    BaseErrorLabel
  },
  data () {
    return {
      isChecked: this.modelValue
    };
  },
  methods: {
    onClick () {
      this.isChecked = !this.isChecked;
      this.$emit("update:modelValue", this.isChecked);
    }
  },
  watch: {
    modelValue (value) {
      this.isChecked = value;
    }
  },
  computed: {
    faCheck: () => faCheck,
    getClassName () {
      return {
        "reti-checkbox": true,
        "reti-checkbox_checked": this.isChecked,
        [this.className]: !!this.className
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes activateAnimation {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(31, 100, 255, .1);
  }

  25% {
    box-shadow: 0px 0px 20px 7px rgba(31, 100, 255, .2);
  }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(31, 100, 255, .1);
  }

  75% {
    box-shadow: 0px 0px 10px 4px rgba(31, 100, 255, .2);
  }

  100% {
    box-shadow: 0px 0px 0px 0px rgba(31, 100, 255, .1);
  }
}

.reti-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  color: #002;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  &__inner {
    width: 23px;
    height: 23px;
    flex: 0 0 23px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFF;

    border-radius: 4px;
    border: 1px solid #AAB2C8;

    transition: all 0.2s ease-in-out;

    svg {
      color: #FFF;

      transition: all 0.2s ease-in-out;
      opacity: 0;

      width: 100%;
      height: 100%;
      flex: 0 0 100%;
    }
  }

  &_checked .reti-checkbox__inner {
    background-color: #1F64FF;
    border-color: #1F64FF;

    animation: activateAnimation 0.3s ease-in-out;

    svg { opacity: 1; }
  }
}
</style>
