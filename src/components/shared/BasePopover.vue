<template>
  <div
    :class="`reti-base-popover ${className}`"
    ref="dropdown"
    @click="onChangeOpen"
  >
    <slot></slot>
    <teleport to="body">
      <transition name="reti-base-popover-menu">
        <div
          :class="menuClassNames"
          :style="getPosition"
          v-if="isOpen"
          ref="dropdownMenu"
          @click.stop
        >
          <slot name="popover-menu"></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import clickOutside from "@/helpers/clickOutside";

export default {
  name: "BaseDropdown",
  props: {
    className: {
      type: String,
      default: ""
    },
    menuWrapperClass: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      isOpen: this.modelValue,
      position: { top: 0, left: 0, height: 0 }
    };
  },
  methods: {
    onChangeOpen () {
      this.position = this.getDropdownRootPosition();

      this.isOpen = !this.isOpen;
    },
    getDropdownRootPosition () {
      const newPosition = this.$refs.dropdown.getBoundingClientRect();

      const newLeftPosition = newPosition.left + 175 >= document.body.offsetWidth
        ? document.body.offsetWidth - 175
        : newPosition.left;

      return {
        top: newPosition.top,
        left: newLeftPosition,
        height: newPosition.height
      };
    }
  },
  mounted () {
    this.position = this.getDropdownRootPosition();

    const outsideClickHandler = clickOutside(this.$refs.dropdown, () => {
      this.isOpen = false;
    });

    document.body.addEventListener("click", outsideClickHandler);
  },
  computed: {
    menuClassNames () {
      return {
        [this.menuWrapperClass]: !!this.menuWrapperClass,
        "reti-base-popover-menu": true,
        "reti-base-popover-menu_open": this.isOpen
      };
    },
    getPosition () {
      return {
        top: `${this.position.top + this.position.height + 2}px`,
        left: `${this.position.left}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-base-popover { cursor: pointer; }

.reti-base-popover-menu {
  position: absolute;
  z-index: 9999;

  border-radius: 10px;
  background: #FFF;
  box-shadow: 1px 4px 10px 0px rgba(170, 178, 200, 0.45);
  padding: 5px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 5px;
    overflow: auto;

    max-height: 320px;
    width: 150px;
  }
}

.reti-base-popover-menu-enter-active {
  transition: all .2s ease-out .1s;
}

.reti-base-popover-menu-leave-active {
  transition: all .2s ease-out;
}

.reti-base-popover-menu-enter-from,
.reti-base-popover-menu-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
