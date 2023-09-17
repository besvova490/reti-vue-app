<template>
  <section class="reti-tech-page">
    <img
      :src="imageUrl"
      alt="tech page image"
      class="reti-tech-page__image"
    >
    <p class="reti-tech-page__message">
      {{ message }}
    </p>
  </section>
</template>

<script>
export default {
  name: "TechPageLayout",
  props: {
    message: String,
    imageUrl: String
  }
};
</script>

<style lang="scss" scoped>
.reti-tech-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65px;

  height: 100vh;
  width: 100%;

  background-color: #FFF;

  &__image {
    object-fit: cover;
    width: 900px;
    height: auto;
  }

  &__message {
    color: #AAB2C8;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>
