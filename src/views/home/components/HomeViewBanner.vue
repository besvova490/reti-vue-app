<template>
  <section class="reti-home-vue-banner">
    <div class="reti-home-vue-banner__description">
      <h1 class="reti-home-vue-banner__description__title">
        Stop wasting time<br/>
        <b>in meetings</b>
      </h1>
      <h6 class="reti-home-vue-banner__description__subtitle">Boost efficiency, save time & money with post meeting surveys.</h6>
      <div class="reti-home-vue-banner__description__actions">
        <base-button full-width size="large" to="/auth/sign-up">Get Started</base-button>
        <base-button full-width size="large" type="secondary">Sign up with Google</base-button>
      </div>
    </div>
    <img class="reti-home-vue-banner__image" src="../../../assets/images/home/home-banner-image.jpg" alt="home page banner">
  </section>
</template>

<style lang="scss" scoped>
.reti-home-vue-banner {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 160px;
  flex-wrap: wrap;

  &__description {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #002;

    &__title {
      font-family: "Lato", sans-serif;
      font-size: 48px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }

    &__subtitle {
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
