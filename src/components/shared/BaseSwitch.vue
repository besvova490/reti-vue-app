<template>
  <base-error-label>
    <div :class="className" @click="onChange">
      <div class="reti-base-switch__inner"></div>
    </div>
  </base-error-label>
</template>

<script>
import BaseErrorLabel from "./BaseErrorLabel.vue";

export default {
  name: "BaseSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  components: {
    BaseErrorLabel
  },
  data () {
    return {
      checked: this.modelValue
    };
  },
  methods: {
    onChange () {
      this.checked = !this.checked;
      this.$emit("update:modelValue", this.checked);
    }
  },
  computed: {
    className () {
      return {
        "reti-base-switch": true,
        "reti-base-switch_active": this.checked
      };
    }
  },
  watch: {
    modelValue () {
      this.checked = this.modelValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-switch {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 12px;

  position: relative;
  width: 46px;
  height: 24px;

  background-color: #AAB2C8;

  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all .3s;

  &::before {
    content: " ";
    position: absolute;
    background-color: #AAB2C8;

    width: 100%;
    height: 100%;

    border-radius: 12px;
    right: calc(100% - 23px);
    transition: all .2s, background-color .2s .2s;
  }

  &_active {
    &::before {
      right: 0;
      background-color: #15D6B3;
      transition: right .2s;
    }

    .reti-base-switch__inner {
      border-color: #15D6B3;
      transform: translateX(calc(100% - 2px));
    }
  }

  &__inner {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;

    border: 2px solid #AAB2C8;
    background-color: #FFFFFF;
    border-radius: 100%;

    transition: all .2s;

    position: relative;
    z-index: 1;
  }
}
</style>
