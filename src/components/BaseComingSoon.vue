<template>
  <section class="reti-coming-soon">
    <img
      src="../assets/images/other/coming-soon.png"
      alt="empty state image"
      class="reti-coming-soon__image"
    >
    <h2 class="reti-coming-soon__label">Coming Soon</h2>
  </section>
</template>

<style lang="scss" scoped>
.reti-coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;

  min-height: 100vh;

  &__image {
    object-fit: cover;
    max-width: 1200px;
    height: auto;
  }

  &__label {
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
