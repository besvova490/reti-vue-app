<template>
  <nav class="reti-dashboard-settings-navigation">
    <ul class="reti-dashboard-settings-navigation__inner">
      <li
        :key="`${item.value}-${index}`"
        v-for="(item, index) in items"
        class="reti-dashboard-settings-navigation__inner-item"
      >
        <router-link
          :to="item.value"
          class="reti-dashboard-settings-navigation__inner-item__link"
          active-class="reti-dashboard-settings-navigation__inner-item__link_active"
        >
          <font-awesome-icon :icon="icons[item.icon]" />
          {{ item.label }}
          <font-awesome-icon class="reti-dashboard-settings-navigation__inner-item__chevron" :icon="faChevronRight" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { faMoneyBill, faFileInvoiceDollar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "DashboardSettingsNavigation",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.items);
  },
  computed: {
    icons: () => ({
      faFileInvoiceDollar,
      faMoneyBill,
      faUser
    }),
    faChevronRight: () => faChevronRight
  }
};
</script>

<style lang="scss" scoped>
.reti-dashboard-settings-navigation {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__inner-item {
    &__chevron { margin-left: auto; }

    &__link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 21px;

      padding: 22px 32px;

      border-radius: 10px;

      color: #AAB2C8;
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      cursor: pointer;
      transition: all .2s ease-in-out;

      &_active {
        color: #1F64FF;
        background-color: #F5F6FA;
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
