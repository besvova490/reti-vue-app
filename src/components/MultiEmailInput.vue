<template>
  <div :class="`reti-multi-email-input ${className}`">
    <div class="reti-multi-email-input__emails-list">
      <base-tag
        v-for="(email, index) in emails"
        :key="`${email}-${index}`"
        closable
      >
        <template #icon>
          <font-awesome-icon :icon="faPaperPlane" />
        </template>
        {{ email }}
      </base-tag>
    </div>
    <base-input placeholder="Enter email"/>
  </div>
</template>

<script>
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// components
import BaseTag from "./shared/BaseTag.vue";

export default {
  name: "MultiEmailInput",
  props: {
    className: { type: String, default: "" }
  },
  components: {
    BaseTag
  },
  data () {
    return {
      emails: []
    };
  },
  computed: {
    faPaperPlane: () => faPaperPlane
  }
};
</script>

<style lang="scss" scoped>
.reti-multi-email-input {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__emails-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
