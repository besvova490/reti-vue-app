<template>
  <base-error-label :label="label" :error="error">
    <base-popover close-on-menu-click :class-name="getClassName">
      <div class="reti-base-select__inner">
        <input
          type="text"
          class="reti-base-select__inner__input"
          :value="value?.label"
        >
        <span class="reti-base-select__inner__arrow-icon">
          <font-awesome-icon :icon="faChevronDown" />
        </span>
      </div>
      <template #popover-menu>
        <ul class="reti-base-select__menu">
          <li
            :key="`${index}-${item.value}`"
            v-for="(item, index) in options"
            :class="getItemClassName(item)"
            @click="onSelect(item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </template>
    </base-popover>
  </base-error-label>
</template>

<script>
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// components
import BaseErrorLabel from "./BaseErrorLabel.vue";
import BasePopover from "./BasePopover.vue";

// helpers
import classNames from "@/helpers/classNames";

export default {
  name: "BaseSelect",
  props: {
    wrapperClass: String,
    label: String,
    error: String,
    modelValue: {
      type: Object,
      default: null
    },
    className: String,
    fullWidth: Boolean,
    isSearchable: Boolean,
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  components: {
    BasePopover,
    BaseErrorLabel
  },
  data () {
    return {
      value: this.modelValue
    };
  },
  methods: {
    onSelect (item) {
      this.value = item;
      this.$emit("update:modelValue", item);
    },
    getItemClassName (item) {
      return {
        "reti-base-select__menu-item": true,
        "reti-base-select__menu-item_selected": item.value === this.value?.value
      };
    }
  },
  watch: {
    modelValue (value) {
      this.value = value;
    }
  },
  computed: {
    faChevronDown: () => faChevronDown,
    getClassName () {
      return classNames({
        "reti-base-select": true,
        "reti-base-select_is-searchable": this.isSearchable,
        "reti-base-select_full-width": this.fullWidth,
        [this.className]: !!this.className
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-select {
  min-width: 150px;
  max-width: 300px;
  width: max-content;

  &__inner {
    width: 100%;
    height: 40px;
    padding: 8px 12px;

    border-radius: 5px;
    background-color: #FFF;

    gap: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;

    &__input {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      width: 100%;
      height: 100%;

      pointer-events: none;
    }

    &__arrow-icon {
      margin-left: auto;

      color: #1F64FF;

      width: 16px;
      height: 16px;
      flex: 0 0 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__menu {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__menu-item {
    padding: 10px;
    border-radius: 4px;

    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &_selected,
    &:hover {
      background-color: rgba(245, 246, 250, 1);
    }
  }

  &_full-width {
    width: 100%;
    max-width: 100%;
  }

  &_is-searchable .reti-base-select__inner__input {
    pointer-events: all;
  }
}
</style>
