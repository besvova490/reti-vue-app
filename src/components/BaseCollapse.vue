<template>
  <ul class="reti-collapse">
    <li
      :key="`${item.key}-${index}`"
      :class="getPanelClassName(item.key)"
      v-for="(item, index) in items"
    >
      <div class="reti-collapse__panel-item__header">
        <div
          class="reti-collapse__panel-item__header-title-container"
          @click="togglePanel(item.key)"
        >
          <h4 v-if="!!item.title" class="reti-collapse__panel-item__header-title">
            {{ item.title }}
          </h4>
          <span class="reti-collapse__panel-item__header-control">
            <font-awesome-icon :icon="faChevronDown" />
          </span>
        </div>
        <h6 v-if="!!item.subtitle" class="reti-collapse__panel-item__header-subtitle">
          {{ item.subtitle }}
        </h6>
      </div>
      <transition
        name="reti-collapse-panel-item"
        @enter="onPanelEnter"
        @leave="onPanelLeave"
        @after-enter="onAfterEnter"
      >
        <div class="reti-collapse__panel-item__content" v-if="activePanelKey === item.key">
          <slot :data="item"></slot>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BaseCollapse",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activePanelKey: null
    };
  },
  methods: {
    togglePanel (key) {
      this.activePanelKey = this.activePanelKey === key ? null : key;
    },
    getPanelClassName (key) {
      return {
        "reti-collapse__panel-item": true,
        "reti-collapse__panel-item_active": this.activePanelKey === key
      };
    },
    onPanelEnter (element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = height;
        element.style.marginTop = "24px";
      });
    },
    onAfterEnter (element) {
      element.style.height = "auto";
      element.style.marginTop = "24px";
    },
    onPanelLeave (element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
        element.style.marginTop = 0;
      });
    }
  },
  computed: {
    faChevronDown: () => faChevronDown
  }
};
</script>

<style lang="scss" scoped>
.reti-collapse {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__panel-item {
    &__header {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__header-control {
      width: 25px;
      height: 25px;
      flex: 0 0 25px;

      border-radius: 50%;
      background-color: #AAB2C8;
      color: #F5F6FA;

      transition: all .3s;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 4px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__header-subtitle,
    &__header-title {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    &__header-subtitle {
      font-size: 18px;
      font-weight: 400;
      color: rgba(0, 0, 34, 0.50);
    }

    &__header-title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    &_active .reti-collapse__panel-item__header-control {
      background-color: rgba(31, 100, 255, 1);
      transform: rotate(180deg);
    }
  }
}

.reti-collapse-panel-item-enter-active,
.reti-collapse-panel-item-leave-active {
  transition: height .3s, margin-top .3s;
  overflow: hidden;
}

.reti-collapse-panel-item-enter,
.reti-collapse-panel-item-leave-to {
  height: 0;
}
</style>
