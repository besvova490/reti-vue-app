<template>
  <div class="reti-base-rate-plan-switch">
    <span
      :key="`${index}-${item.value}`"
      v-for="(item, index) in items"
      @click="$emit('update:modelValue', item.value)"
      class="reti-base-rate-plan-switch__item"
      :class="itemClassName(item)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseSwitch",
  props: {
    items: Array,
    modelValue: String,
    label: String,
    error: String
  },
  emits: ["update:modelValue"],
  methods: {
    itemClassName (item) {
      return {
        "reti-base-rate-plan-switch__item_active": item.value === this.modelValue
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-rate-plan-switch {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  padding: 4px;

  border-radius: 5px;
  background: #6293FF;

  &__item {
    padding: 6px 22px;
    border-radius: 5px;

    color: #FFF;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: all 0.2s ease-in-out;

    &_active {
      color: #1F64FF;
      background: #FFF;
    }
  }
}
</style>
