<template>
  <div :class="`reti-multi-email-input ${className}`">
    <div class="reti-multi-email-input__emails-list">
      <base-tag
        v-for="(email, index) in emails"
        :key="`${email}-${index}`"
        closable
        @close="handleDeleteEmail(email)"
      >
        <template #icon>
          <font-awesome-icon :icon="faPaperPlane" />
        </template>
        {{ email }}
      </base-tag>
    </div>
    <base-input
      placeholder="Enter email"
      v-model="inputValue"
      @keyup.space="handleAddEmail"
    />
  </div>
</template>

<script>
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// components
import BaseTag from "./shared/BaseTag.vue";

export default {
  name: "MultiEmailInput",
  props: {
    modelValue: Array,
    className: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  components: {
    BaseTag
  },
  data () {
    return {
      inputValue: null,
      emails: []
    };
  },
  methods: {
    validateEmails (emails) {
      const emailRegex = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\s*)+$/;

      return emailRegex.test(emails);
    },
    handleAddEmail (event) {
      if (!this.validateEmails(this.inputValue)) {
        event.preventDefault();

        this.inputValue = `${this.inputValue.slice(0, -1)}`;

        return;
      }

      this.emails = this.inputValue.split(" ").filter(Boolean);

      this.$emit("update:modelValue", this.emails);
    },
    handleDeleteEmail (email) {
      console.log(email);

      this.emails = this.emails.filter(item => item !== email);
      this.inputValue = this.inputValue.replace(`${email} `, "");

      this.$emit("update:modelValue", this.emails);
    }
  },
  watch: {
    modelValue (value) {
      this.emails = value;
      this.inputValue = value.join(" ");
    }
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
  gap: 12px;

  &__emails-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
