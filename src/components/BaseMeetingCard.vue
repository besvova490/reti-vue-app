<template>
  <div class="reti-meeting-card">
    <transition>
      <font-awesome-icon class="reti-meeting-card__star" v-if="isFavorite" :icon="faStar" />
      <font-awesome-icon class="reti-meeting-card__star reti-meeting-card__star_active" v-else :icon="faStarSolid" />
    </transition>
    <div class="reti-meeting-card__main-info">
      <div class="reti-meeting-card__main-info__header">
        <p class="reti-meeting-card__main-info__title">{{ title }}</p>
      </div>
      <span class="reti-meeting-card__main-info__date">{{ date }}</span>
    </div>
    <div class="reti-meeting-card__actions">

    </div>
  </div>
</template>

<script>
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "BaseMeetingCard",
  props: {
    title: { type: String, default: null },
    date: { type: String, default: null },
    guests: { type: Array, default: () => [] },
    isFavorite: { type: Boolean, default: false },
    status: {
      type: String,
      default: "upcoming",
      validator: value => ["upcoming", "past", "archived"].includes(value)
    }
  },
  computed: {
    faStar: () => faStar,
    faStarSolid: () => faStarSolid
  }
};
</script>

<style lang="scss" scoped>
.reti-meeting-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;

  padding: 20px 15px;

  border-radius: 10px;
  background: #F5F6FA;

  &__star {
    width: 24px;
    height: 24px;

    color: #AAB2C8;
    opacity: .8;

    transition: all .3s ease-in-out;
    cursor: pointer;

    &_active {
      color: #FFDF6C;
      opacity: 1;
    }
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }

    &__title {
      color: #002;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__date {
      color: #AAB2C8;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;

    margin-left: auto;
  }
}
</style>
