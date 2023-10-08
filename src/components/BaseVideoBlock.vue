<template>
  <div class="reti-video-block">
    <video v-if="!!src" :src="src"></video>
    <div v-else class="reti-video-block__icon">
      <font-awesome-icon v-if="!avatar" :icon="faUser" />
      <img :src="avatar" :alt="`user logo avatar ${label}`">
    </div>
    <span v-if="!!label" class="reti-video-block__label">
      {{ label }}
    </span>
  </div>
</template>

<script>
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BaseVideoBlock",
  props: {
    src: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    }
  },
  computed: {
    faUser: () => faUser
  }
};
</script>

<style lang="scss" scoped>
.reti-video-block {
  width: 100%;
  height: 300px;

  border-radius: 12px;
  background: rgba(188, 188, 211, 0.40);
  backdrop-filter: blur(49px);

  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 68px;
    height: 68px;

    overflow: hidden;
    border-radius: 50%;
    background: #F5F5FD;
    box-shadow: 0px 0px 8px 4px rgba(86, 57, 203, 0.50);

    color: #8871E6;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  &__label {
    position: absolute;
    right: 10px;
    bottom: 10px;

    padding: 8px;

    border-radius: 8px;
    border: 1px solid #2E2C54;
    opacity: 0.5;
    background: #2E2C54;

    color: #FFF;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
