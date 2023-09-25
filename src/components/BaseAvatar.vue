<template>
  <div class="reti-avatar">
    <img class="reti-avatar__image" v-if="!!src" :src="src" :alt="alt">
    <span class="reti-avatar__placeholder" v-else>{{ getPlaceholder }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseAvatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "User avatar"
    },
    fullName: {
      type: String,
      default: ""
    }
  },
  computed: {
    getPlaceholder () {
      return this.fullName.split(" ").map(word => word[0]).join("");
    }
  }
};
</script>

<style lang="scss" scoped>
.reti-avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  flex: 0 0 36px;

  border-radius: 50%;
  overflow: hidden;

  background-color: #F5F6FA;

  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__placeholder {
    color: #AAB2C8;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
