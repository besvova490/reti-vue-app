<template>
  <section class="reti-try-for-free">
    <div class="reti-try-for-free__content">
      <h2 class="reti-try-for-free__title">Send out your first<br/>Rate It today!</h2>
      <base-button to="/auth/sign-up" size="large">
        Try for free
      </base-button>
    </div>
    <img
      class="reti-try-for-free__background"
      src="../../../assets/images/home/try-for-free-background.png"
      alt="try for free background"
      loading="lazy"
    />
  </section>
</template>

<style lang="scss" scoped>
.reti-try-for-free {
  background-color: #F5F6FA;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 65px;

    padding: 96px 102px;
  }

  &__background {
    object-fit: cover;
    height: 100%;
    width: auto;
  }
}
</style>
