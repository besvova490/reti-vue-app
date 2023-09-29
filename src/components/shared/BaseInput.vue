<template>
  <base-error-label :label="label" :error="error" :class="wrapperClass">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="className"
      :placeholder="placeholder"
      :type="htmlType"
      :name="name"
    />
  </base-error-label>
</template>

<script>
import BaseErrorLabel from "./BaseErrorLabel.vue";

export default {
  name: "BaseInput",
  components: {
    BaseErrorLabel
  },
  props: {
    modelValue: String,
    label: String,
    error: String,
    placeholder: String,
    name: String,
    class: String,
    wrapperClass: String,
    size: {
      default: "medium",
      validator: value => ["small", "medium", "large"].includes(value)
    },
    htmlType: {
      default: "text",
      validator: value => ["text", "password", "email"].includes(value)
    },
    type: {
      default: "primary",
      validator: value => ["primary", "secondary", "tertiary"].includes(value)
    }
  },
  emits: ["update:modelValue"],
  computed: {
    className () {
      return {
        "reti-input": true,
        [this.class]: !!this.class,
        [`reti-input_${this.type}`]: !!this.type,
        [`reti-input_size-${this.size}`]: !!this.size
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-input {
  border-radius: 5px;
  background: #F5F6FA;

  padding: 9px 15px;
  height: 40px;

  color: #002;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &_secondary {
    padding-left: 0;

    background-color: #FFF;

    border-bottom: 1px solid #1F64FF;
    border-radius: 0;
  }

  &::placeholder { color: #AAB2C8; }
}
</style>
