<template>
  <div :class="className">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "BaseSpin",
  props: {
    size: {
      default: "medium",
      validator: value => ["small", "medium", "large"].includes(value)
    },
    class: String
  },
  computed: {
    className () {
      return {
        "reti-base-spin": true,
        [this.class]: !!this.class,
        [`reti-base-spin_size-${this.size}`]: !!this.size
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-spin {
  --size: 80px;
  --border-width: 4px;
  --half-size: calc(var(--size) / 2);
  --border-calc: calc(var(--size) - var(--border-width) * 2);
  display: inline-block;
  position: relative;
  width: var(--size);
  height: var(--size);

  &_size-medium {
    --size: 40px;
    --border-width: 2px;
  }

  &_size-small {
    --size: 20px;
    --border-width: 1px;
  }
}

.reti-base-spin div {
  position: absolute;
  border: var(--border-width) solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: reti-base-spin 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.reti-base-spin div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes reti-base-spin {
  0% {
    top: var(--half-size);
    left: var(--half-size);
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: var(--half-size);
    left: var(--half-size);
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: var(--half-size);
    left: var(--half-size);
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: var(--border-width);
    left: var(--border-width);
    width: var(--border-calc);
    height: var(--border-calc);
    opacity: 0;
  }
}
</style>
