<template>
  <base-error-label :label="label" :error="error" :className="wrapperClass">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="classNames"
      :placeholder="placeholder"
      :type="htmlType"
      :name="name"
    ></textarea>
  </base-error-label>
</template>

<script>
import BaseErrorLabel from "./BaseErrorLabel.vue";

export default {
  name: "BaseTextarea",
  components: {
    BaseErrorLabel
  },
  props: {
    modelValue: String,
    label: String,
    error: String,
    placeholder: String,
    className: String,
    wrapperClass: String,
    name: String,
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
    classNames () {
      return {
        "reti-input reti-input-textarea": true,
        [this.className]: !!this.className,
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
