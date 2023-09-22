<template>
  <div :class="`reti-status-label reti-status-label_status-${status}`">
    {{ MAP_STATUS_LABEL[status] }}
  </div>
</template>

<script>
const MAP_STATUS_LABEL = {
  draft: "Draft",
  ready: "Ready"
};

export default {
  name: "BaseStatuLabel",
  props: {
    status: {
      type: String,
      default: "ready",
      validator: value => ["draft", "ready"].includes(value)
    }
  },
  data () {
    return { MAP_STATUS_LABEL };
  }
};
</script>

<style lang="scss" scoped>
.reti-status-label {
  width: 70px;
  height: 20px;
  border-radius: 4px;

  color: #15D6B3;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(21, 214, 179, 0.2);

  &_status-draft {
    color: #E1E2E9;
    background-color: rgba(157, 157, 182, 1);
  }
}
</style>
