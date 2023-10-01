<template>
  <button v-if="!to" :class="getClassName" :type="htmlType">
    <slot></slot>
  </button>
  <router-link :to="to" v-else :class="getClassName">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    htmlType: { validator: value => ["button", "submit", "reset"].includes(value) },
    type: {
      default: "primary",
      validator: value => ["primary", "secondary", "tertiary", "text"].includes(value)
    },
    size: {
      default: "medium",
      validator: value => ["small", "medium", "large"].includes(value)
    },
    to: { type: String, default: null },
    className: { type: String, default: null },
    fullWidth: { type: Boolean, default: false },
    ghost: { type: Boolean, default: false }
  },
  name: "BaseButton",
  computed: {
    getClassName () {
      return {
        "reti-button": true,
        [this.className]: !!this.className,
        "reti-button_full-width": this.fullWidth,
        "reti-button_ghost": this.ghost,
        [`reti-button_${this.type}`]: !!this.type,
        [`reti-button_size-${this.size}`]: !!this.size
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
    background-color: #FFF;
    border-color: #1F64FF;

    color: #1F64FF;
  }

  &_tertiary {
    background-color: transparent;
    border-color: transparent;
    color: #002;
  }

  &_ghost { background-color: transparent; }

  &_size-large { height: 52px; }
  &_size-small {
    border-radius: 5px;

    height: 40px;
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
