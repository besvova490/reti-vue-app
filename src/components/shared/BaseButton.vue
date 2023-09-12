<template>
  <button v-if="!to" :class="className" :type="htmlType">
    <slot></slot>
  </button>
  <router-link :to="to" v-else :class="className">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    htmlType: { validator: value => ["button", "submit", "reset"].includes(value) },
    type: {
      default: "primary",
      validator: value => ["primary", "secondary", "tertiary"].includes(value)
    },
    to: { type: String, default: null },
    class: { type: String, default: null },
    fullWidth: { type: Boolean, default: false }
  },
  name: "BaseButton",
  computed: {
    className () {
      return {
        "reti-button": true,
        [this.class]: !!this.class,
        "reti-button_full-width": this.fullWidth,
        [`reti-button_${this.type}`]: !!this.type
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-button {
  padding: 10px 20px;
  width: max-content;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  text-align: center;

  border-radius: 10px;
  background-color: #1F64FF;
  border: 1px solid transparent;

  &_full-width { width: 100%; }

  &_secondary {
    background-color: transparent;
    border-color: #1F64FF;

    color: #1F64FF;
  }
}
</style>
