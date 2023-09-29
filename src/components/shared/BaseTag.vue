<template>
  <div :class="getClassName" v-if="!closed">
    <slot name="icon"></slot>
    <p class="reti-tag__label">
      <slot></slot>
    </p>
    <span v-if="closable" @click="handleClose" class="reti-tag__close-icon">
      <font-awesome-icon :icon="faXmark" />
    </span>
  </div>
</template>

<script>
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BaseTag",
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: value => ["primary", "danger"].includes(value)
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    className: String
  },
  emits: ["close"],
  data () {
    return {
      closed: false
    };
  },
  methods: {
    getClassName () {
      return {
        "reti-tag": true,
        [`reti-tag_color-${this.color}`]: !!this.color,
        "reti-tag_full-width": this.fullWidth,
        [this.className]: !!this.className
      };
    },
    handleClose () {
      this.closed = true;
      this.$emit("close");
    }
  },
  computed: {
    faXmark: () => faXmark
  }
};
</script>

<style lang="scss" scoped>
.reti-tag {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  border-radius: 2px;
  background: rgba(31, 100, 255, 0.25);

  color: #1F64FF;

  width: max-content;

  &_full-width { width: 100%; }

  &_color-danger {
    color: #EA5050;
    background: #FFB8B8;
  }

  &__label {
    color: inherit;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__close-icon {
    color: inherit;

    width: 16px;
    height: 16px;
    flex: 0 0 16px;

    cursor: pointer;
  }
}
</style>
