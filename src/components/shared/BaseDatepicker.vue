<template>
  <base-error-label :error="error" :label="label">
    <base-popover
      class-name="reti-date-picker"
      menu-wrapper-class="reti-date-picker__menu"
    >
      <font-awesome-icon :icon="faCalendar" class="reti-date-picker__placeholder-icon"/>
      {{ format(selectedDate, "MMM dd, yyyy") }}

      <template #popover-menu>
        <div class="reti-date-picker__menu__header">
          <span
            @click="onMonthChange(-1)"
            class="reti-date-picker__menu__header__control"
          >
            <font-awesome-icon :icon="faChevronLeft" />
          </span>
          {{ format(activeMonth, "MMMM") }}
          <span
            @click="onMonthChange(1)"
            class="reti-date-picker__menu__header__control"
          >
            <font-awesome-icon :icon="faChevronRight" />
          </span>
        </div>
        <div class="reti-date-picker__menu__body">
          <ul class="reti-date-picker__menu__body__week-label">
            <li
              :key="`${dayLabel}-${index}`"
              v-for="(dayLabel, index) in shortWeekDays"
              class="reti-date-picker__menu__body__week-label-item"
            >
              {{ dayLabel }}
            </li>
          </ul>
          <ul class="reti-date-picker__menu__body__week-days">
            <li
              :key="`${day}-${index}`"
              v-for="(day, index) in daysItems"
              :class="dayClassName(day)"
              @click="onChange(day)"
            >
              <span class="reti-date-picker__menu__body__week-days-inner">
                {{ format(day.date, "d") }}
              </span>
            </li>
          </ul>
        </div>
        <div class="reti-date-picker__menu__footer">

        </div>
      </template>
    </base-popover>
  </base-error-label>
</template>

<script>
import { format, add, isSameDay } from "date-fns";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// components
import BaseErrorLabel from "./BaseErrorLabel.vue";
import BasePopover from "./BasePopover.vue";

// helpers
import { shortWeekDays } from "@/constants/date";
import generateDateRange from "@/helpers/generateDateRange";

export default {
  name: "BaseDatePicker",
  props: {
    modelValue: {
      type: Date,
      default: null
    },
    label: String,
    error: String
  },
  emits: ["update:modelValue"],
  components: {
    BasePopover,
    BaseErrorLabel
  },
  data () {
    return {
      shortWeekDays,
      activeMonth: new Date(),
      selectedDate: new Date(),
      daysItems: generateDateRange(new Date())
    };
  },
  methods: {
    format,
    dayClassName (day) {
      return {
        "reti-date-picker__menu__body__week-days-item": true,
        "reti-date-picker__menu__body__week-days-item_prev-month": day.isPrevMonth,
        "reti-date-picker__menu__body__week-days-item_next-month": day.isNextMonth,
        "reti-date-picker__menu__body__week-days-item_is-today": day.isToday,
        "reti-date-picker__menu__body__week-days-item_active": isSameDay(day.date, this.modelValue)
      };
    },
    onMonthChange (index) {
      this.activeMonth = add(this.activeMonth, { months: index });
      this.daysItems = generateDateRange(this.activeMonth);
    },
    onChange (day) {
      this.$emit("update:modelValue", day.date);
      this.selectedDate = day.date;

      if (day.isPrevMonth) this.onMonthChange(-1);
      else if (day.isNextMonth) this.onMonthChange(1);
    }
  },
  watch: {
    modelValue (value) {
      this.selectedDate = value;
    }
  },
  computed: {
    faCalendar: () => faCalendar,
    faChevronLeft: () => faChevronLeft,
    faChevronRight: () => faChevronRight
  }
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
    &__header {
      color: #002;
      font-size: 16px;
      line-height: 40px;
      font-weight: 600;
      font-family: "Lato", sans-serif;

      padding: 0 8px;
      color: rgba(0, 0, 0, .88);
      border-bottom: 1px solid rgba(5, 5, 5, .06);

      margin: 0 -5px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &__control {
        color: rgba(0, 0, 0, .45);

        padding: 5px 10px;

        transition: all .2s ease-in-out;
        cursor: pointer;

        &:hover { color: rgba(0, 0, 0, .88); }
      }
    }

    &__body {
      padding: 8px 18px;

      &__week-days,
      &__week-label {
        display: grid;
        grid-template-columns: repeat(7, 36px);
      }

      &__week-label-item,
      &__week-days-item {
        color: #002;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        font-family: "Lato", sans-serif;

        height: 36px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all .2s ease-in-out;
        border-radius: 4px;
      }

      &__week-days-item {
        cursor: pointer;

        &_next-month,
        &_prev-month {
          color: rgba(0,0,0,.25);
        }

        &_is-today .reti-date-picker__menu__body__week-days-inner {
          border: 1px solid #1677ff;
        }

        &_active .reti-date-picker__menu__body__week-days-inner {
          color: #fff;
          background: #1677ff !important;
        }
      }

      &__week-days-inner {
        padding: 5px;
        border-radius: 4px;

        &:hover { background-color: rgba(0, 0, 0, .04); }
      }
    }
  }
}
</style>
