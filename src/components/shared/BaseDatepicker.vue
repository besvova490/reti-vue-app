<template>
  <base-error-label :error="error" :label="label">
    <base-popover
      class-name="reti-date-picker"
      menu-wrapper-class="reti-date-picker__menu"
    >
      <font-awesome-icon :icon="faCalendar" class="reti-date-picker__placeholder-icon"/>
      {{ format(new Date(), "MMM dd, yyyy") }}

      <template #popover-menu>
        date
      </template>
    </base-popover>
  </base-error-label>
</template>

<script>
import { format } from "date-fns";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

// components
import BaseErrorLabel from "./BaseErrorLabel.vue";
import BasePopover from "./BasePopover.vue";

export default {
  name: "BaseDatePicker",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: String,
    error: String
  },
  components: {
    BasePopover,
    BaseErrorLabel
  },
  computed: {
    faCalendar: () => faCalendar
  },
  methods: { format }
};
</script>

<style lang="scss">
.reti-date-picker {
  border-radius: 5px;
  background-color: #F5F6FA;

  padding: 9px 15px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  color: #002;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &__placeholder-icon {
    color: #AAB2C8;
  }

  &__menu {

  }
}
</style>
