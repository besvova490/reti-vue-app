<template>
  <section class="reti-settings-user-management">
    <h1 class="reti-settings-user-management__title">User Management</h1>
    <form class="reti-settings-user-management__main">
      <div class="reti-settings-user-management__main__block">
        <base-collapse :items="profileCollapseItems">
          <div class="reti-settings-user-management__main__inputs-block">
            <base-input
              full-width
              placeholder="First Name"
              class-name="reti-settings-user-management__input"
              name="firstName"
            />
            <base-input
              full-width
              placeholder="Last Name"
              class-name="reti-settings-user-management__input"
              name="lastName"
            />
            <base-input
              full-width
              placeholder="Email"
              class-name="reti-settings-user-management__input"
              name="email"
            />
            <base-button size="small">Update info</base-button>
          </div>
        </base-collapse>
      </div>
      <div class="reti-settings-user-management__main__block">
        <base-collapse :items="passwordsCollapseItems">
          <div class="reti-settings-user-management__main__inputs-block">
            <base-input
              full-width
              placeholder="Current password"
              class-name="reti-settings-user-management__input"
              name="password"
              html-type="password"
            />
            <base-input
              full-width
              placeholder="New password"
              class-name="reti-settings-user-management__input"
              name="newPassword"
              html-type="password"
            />
            <base-input
              full-width
              placeholder="Confirm password"
              class-name="reti-settings-user-management__input"
              name="confirmPassword"
              html-type="password"
            />
            <base-button size="small">Update password</base-button>
          </div>
        </base-collapse>
      </div>
      <div class="reti-settings-user-management__main__block">
        <base-collapse :items="notificationsCollapseItems">
          <div class="reti-settings-user-management__main__inputs-block">
            <base-input
              full-width
              placeholder="Current password"
              class-name="reti-settings-user-management__input"
              name="password"
              html-type="password"
            />
            <base-input
              full-width
              placeholder="New password"
              class-name="reti-settings-user-management__input"
              name="newPassword"
              html-type="password"
            />
          </div>
        </base-collapse>
      </div>
      <div class="reti-settings-user-management__main__block"></div>
      <base-button type="secondary" size="small" ghost>Add Account</base-button>
    </form>
  </section>
</template>

<script>
// components
import BaseCollapse from "@/components/BaseCollapse.vue";

const profileCollapseItems = [{ title: "Profile", subtitle: "Name, Surname, Email address", key: "profile-settings" }];
const passwordsCollapseItems = [{ title: "Password", subtitle: "Change your password", key: "password-settings" }];
const notificationsCollapseItems = [{ title: "Notifications", subtitle: "Rateit will send you notifications", key: "notifications-settings" }];

export default {
  name: "SettingsUserManagementView",
  components: { BaseCollapse },
  data () {
    return {
      profileCollapseItems,
      passwordsCollapseItems,
      notificationsCollapseItems
    };
  }
};
</script>

<style lang="scss">
.reti-settings-user-management {
  border-radius: 10px;
  background-color: #F5F6FA;

  padding: 42px 38px;

  &__title {
    color: #002;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 28px;

    margin-top: 38px;

    &__block {
      padding-bottom: 28px;
      border-bottom: 1px solid #002;
    }

    &__inputs-block {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__input .reti-input { background-color: #FFF !important; }
}
</style>
