<template>
  <footer class="reti-the-footer">
    <div class="reti-the-footer__main">
      <div class="reti-the-footer__main-column">
        <h2 class="reti-the-footer__main-column__title">Need help with<br/>anything?</h2>
        <div class="reti-the-footer__main-column__socials">
          <a href="#" class="reti-the-footer__main-column__socials-inner"><font-awesome-icon :icon="faTwitter"/></a>
          <a href="#" class="reti-the-footer__main-column__socials-inner"><font-awesome-icon :icon="faLinkedin"/></a>
        </div>
      </div>
      <div
        :key="index" v-for="(column, index) in FOOTER_NAVIGATION_URLS"
        class="reti-the-footer__main-column"
      >
        <div class="reti-the-footer__main-column__nested">
          <router-link class="reti-the-footer__main-column__nested-link reti-the-footer__main-column__nested-link_main" :to="column.value">{{ column.label }}</router-link>
          <a
            :key="item.value"
            :href="item.value" v-for="item in column.items"
            class="reti-the-footer__main-column__nested-link"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
    <icon-base-logo/>
  </footer>
</template>

<script>
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconBaseLogo from "./icons/IconBaseLogo.vue";

// helpers
import { FOOTER_NAVIGATION_URLS } from "../constants/navigation.constants";

export default {
  name: "TheFooter",
  components: { IconBaseLogo },
  computed: {
    faTwitter: () => faTwitter,
    faLinkedin: () => faLinkedin
  },
  data () {
    return { FOOTER_NAVIGATION_URLS };
  }
};
</script>

<style lang="scss" scoped>
.reti-the-footer {
  background-color: #090949;

  padding: 89px 72px 72px 72px;

  display: flex;
  flex-direction: column;
  gap: 62px;

  color: #FFF;
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  &__main {
    display: grid;
    grid-template-columns: 1fr 140px 140px 140px 140px;
    gap: 60px;
  }

  &__main-column {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__socials {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }

    &__socials-inner {
      border-radius: 2px;

      width: 28px;
      height: 28px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #FFFFFF;
      color: rgba(9, 9, 73, 1);

      svg {
        width: 20px;
        height: 20px;
        flex: 0 0 20px;
      }
    }

    &__nested {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__nested-link {
      color: rgba(255, 255, 255, 0.60);
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      &_main {
        color: #FFF;
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
}
</style>
