<template>
  <footer class="reti-the-footer">
    <div class="reti-the-footer__main-column">
      <h2 class="reti-the-footer__main-column__title">Need help with anything?</h2>
      <div class="reti-the-footer__main-column__socials">
        <a href="#" class="reti-the-footer__main-column__socials-inner"><font-awesome-icon :icon="faTwitter"/></a>
        <a href="#" class="reti-the-footer__main-column__socials-inner"><font-awesome-icon :icon="faLinkedin"/></a>
      </div>
    </div>
    <icon-base-logo/>
  </footer>
</template>

<script>
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconBaseLogo from "./icons/IconBaseLogo.vue";

export default {
  name: "TheFooter",
  components: { IconBaseLogo },
  computed: {
    faTwitter: () => faTwitter,
    faLinkedin: () => faLinkedin
  }
};
</script>

<style lang="scss">
</style>
