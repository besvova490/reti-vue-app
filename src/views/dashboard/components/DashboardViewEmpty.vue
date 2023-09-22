<template>
  <section class="reti-dashboard-empty">
    <img
      src="../../../assets/images/other/empty-state-image.png"
      alt="dashboard empty state image"
      class="reti-dashboard-empty__image"
    />
    <p class="reti-dashboard-empty__description">
      Currently you don’t have any meetings synced on your dashboard.<br/>Connect your calendar to begin!
    </p>
    <div class="reti-dashboard-empty__actions">
      <base-button full-width type="secondary">Create for later</base-button>
      <base-button full-width>Start new meeting</base-button>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.reti-dashboard-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;

  width: 100%;

  &__image {
    width: 420px;
    height: auto;
    object-fit: cover;
  }

  &__description {
    color: #AAB2C8;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    width: 520px;
  }
}
</style>
