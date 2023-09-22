<template>
  <div class="reti-tabs">
    <div class="reti-tabs__header">
      <div
        @click="handleTabChange(tab)"
        class="reti-tabs__header-item" v-for="tab in tabs" :key="tab.value"
        :class="className(tab)"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="reti-tabs__content" v-if="activeComponent">
      <component :is="activeTab"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTabs",
  props: {
    tabs: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data () {
    return {
      activeTab: this.modelValue,
      activeComponent: null
    };
  },
  methods: {
    handleTabChange (e) {
      this.activeTab = e.value;
      this.$emit("update:modelValue", e.value);
    },
    className (tab) {
      return {
        "reti-tabs__header-item_active": this.activeTab === tab.value
      };
    }
  },
  watch: {
    modelValue (value) {
      this.activeTab = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-tabs {
  display: flex;
  flex-direction: column;
  gap: 33px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__header-item {
    color: #AAB2C8;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    position: relative;
    padding: 25px;
    transition: all 0.3s ease-in-out;

    &::before {
        content: " ";
        position: absolute;
        bottom: -2px;
        left: 0;
        transition: all 0.3s ease-in-out;

        width: 100%;
        height: 2px;
        border-radius: 0px 3px 3px 0px;
        background: transparent;
      }

    &:hover {
      cursor: pointer;
      color: #002;
    }

    &_active {
      color: #002;

      &::before {
        background: #1F64FF;
      }
    }
  }
}
</style>
