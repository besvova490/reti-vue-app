<template>
  <div class="reti-video-block">
    <video src=""></video>
    <span class="reti-video-block__label">
      Abraham
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseVideoBlock"
};
</script>

<style lang="scss" scoped>
.reti-video-block {
  width: 100%;
  height: 100%;

  border-radius: 12px;
  background: rgba(188, 188, 211, 0.40);
  backdrop-filter: blur(49px);

  overflow: hidden;
  position: relative;

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
