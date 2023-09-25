<template>
  <base-popover
    class-name="reti-base-dropdown"
    menu-wrapper-class="reti-base-dropdown-menu"
  >
    <slot></slot>
    <template #popover-menu>
      <ul class="reti-base-dropdown-menu__inner">
        <li class="reti-base-dropdown-menu__item" v-for="(item, index) in items" :key="index">
          <slot v-if="this.$slots['list-item']" name="list-item" :data="item">
          </slot>
          <span v-else>{{ item.label }}</span>
        </li>
      </ul>
    </template>
  </base-popover>
</template>

<script>
// components
import BasePopover from "./BasePopover.vue";

export default {
  name: "BaseDropdown",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  components: { BasePopover },
  computed: {
    className () {
      return {
        "reti-base-dropdown-menu": true,
        "reti-base-dropdown-menu_open": this.isOpen
      };
    }
  }
};
</script>

<style lang="scss">
.reti-base-dropdown { cursor: pointer; }

.reti-base-dropdown-menu {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 5px;
    overflow: auto;

    max-height: 320px;
    width: 150px;
  }

  &__item {
    color: #002;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;

    padding: 10px;

    border-radius: 4px;
    transition: all .3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;

    * { color: #002; }

    &:hover { background-color: rgba(170, 178, 200, 0.1); }
  }
}
</style>
