<template>
  <base-modal
    :open="open"
    title="Add/Edit Meeting"
  >
    <add-edit-meeting-modal-content
      v-if="open"
      v-bind="props"
    />
  </base-modal>
</template>

<script>
import { defineAsyncComponent } from "vue";

// components
import BaseModal from "../BaseModal.vue";
const AddEditMeetingModalContent = defineAsyncComponent(() => import("./AddEditMeetingModalContent.vue"));

export default {
  name: "AddEditMeetingModal",
  components: {
    BaseModal,
    AddEditMeetingModalContent
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
