<template>
  <div class="reti-profile-score-plan">
    <base-progress-bar :value="85"/>
    <div class="reti-profile-score-plan__info">
      <div>
        <h2 class="reti-profile-score-plan__info__title">
          Profile Informations
        </h2>
        <p class="reti-profile-score-plan__info__subtitle">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <base-button type="secondary" size="small">
        Complete your profile
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseProgressBar from "./BaseProgressBar.vue";

export default {
  name: "TheProfileScorePlan",
  components: {
    BaseProgressBar
  }
};
</script>

<style lang="scss" scoped>
.reti-profile-score-plan {
  display: flex;
  align-items: center;
  gap: 32px;

  padding: 22px;

  border-radius: 10px;
  background-color: #1F64FF;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 17px;

    &__subtitle,
    &__title {
      color: #FFF;
      font-family: "Lato", sans-serif;
      font-style: normal;
      line-height: normal;
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
