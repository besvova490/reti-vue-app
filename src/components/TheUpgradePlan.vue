<template>
  <div class="reti-upgrade-plan">
    <img
      src="../assets/images/other/upgrade-plan.png"
      alt="Upgrade your plan image"
      class="reti-upgrade-plan__image"
    >
    <base-button fullWidth to="/settings/subscription">
      Upgrade your plan
    </base-button>
  </div>
</template>

<style lang="scss">
.reti-upgrade-plan {
  display: flex;
  flex-direction: column;
  gap: 37px;

  &__image {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
</style>
