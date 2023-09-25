<template>
  <teleport to="body">
    <transition name="reti-modal">
      <dialog v-if="open" :class="`reti-modal ${className}`" open>
        <div class="reti-modal__inner">
          <div class="reti-modal__header">
            <div class="reti-modal__header__heading">
              <h3 v-if="!!title" class="reti-modal__header__title">
                {{ title }}
              </h3>
              <h5 v-if="!!subtitle" class="reti-modal__header__subtitle">
                {{ subtitle }}
              </h5>
            </div>
            <span
              class="reti-modal__header__close"
              @click="$emit('onClose')"
            >
              <font-awesome-icon :icon="faXmark" />
            </span>
          </div>
          <div class="reti-modal__content">
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="reti-modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BaseModal",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  },
  emits: ["onClose"],
  computed: { faXmark: () => faXmark }
};
</script>

<style lang="scss" scoped>
.reti-modal {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 9999;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 12px 24px;

    border-radius: 5px;
    background: #FFF;
    box-shadow: 1px 5px 20px 0px #AAB2C8;

    min-height: 100px;
    min-width: 320px;

    position: relative;
    z-index: 999;

    transition: all .2s ease-in-out;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    &__heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
    }

    &__title {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__subtitle {
      color: #AAB2C8;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &__close {
      margin-left: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(170, 178, 200, 0.50);
    transition: all .2s ease-in-out;
  }
}

.reti-modal-enter-active {
  transition: all .2s ease-in-out;

  .reti-modal::after { opacity: 1; }
}

.reti-modal-leave-active {
  transition: all .2s ease-in-out;

  .reti-modal::after { opacity: 0; }
}

.reti-modal-enter-from,
.reti-modal-leave-to {
  .reti-modal__inner {
    transform: translateY(-50px) scale(0.9);
    opacity: 0;
  }

  .reti-modal::after { opacity: 0; }
}
</style>
