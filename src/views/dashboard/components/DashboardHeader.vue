<template>
  <header class="reti-dashboard-header">
    <div class="reti-dashboard-header__info">
      <font-awesome-icon :icon="faBell" class="reti-dashboard-header__info__icon"/>
      <div class="reti-dashboard-header__avatar">
        <base-dropdown
          :items="items"
        >
          <base-avatar full-name="Full Name"/>
          <font-awesome-icon :icon="faEllipsisVertical"/>
          <template #list-item="{ data }">
            <router-link
              :to="data.value"
              class="reti-dashboard-header__avatar__links"
            >
              <font-awesome-icon :icon="data.icon" class="reti-dashboard-header__info__icon"/>
              {{ data.label }}
            </router-link>
          </template>
        </base-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// components
import BaseDropdown from "@/components/shared/BaseDropdown.vue";
import BaseAvatar from "@/components/BaseAvatar.vue";

const AVATAR_ITEMS = [
  { label: "Settings", value: "/dashboard/settings", icon: faArrowRightFromBracket },
  { label: "Logout", value: "logout", icon: faGear }
];

export default {
  name: "DashboardHeader",
  components: {
    BaseAvatar,
    BaseDropdown
  },
  data () {
    return { items: AVATAR_ITEMS };
  },
  computed: {
    faBell: () => faBell,
    faArrowRightFromBracket: () => faArrowRightFromBracket,
    faGear: () => faGear,
    faEllipsisVertical: () => faEllipsisVertical
  }
};
</script>

<style lang="scss" scoped>
.reti-dashboard-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;

  svg { color: #AAB2C8 }

  &__info {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    &__icon {
      width: 18px;
      height: 18px;
      flex: 0 0 18px;

      cursor: pointer;
    }
  }

  &__avatar {
    &__links {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      gap: 8px;

      svg {
        width: 14px;
        height: 14px;
        flex: 0 0 14px;
      }
    }

    svg { font-size: 18px; }
  }

  .reti-base-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
