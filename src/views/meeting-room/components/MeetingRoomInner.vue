<template>
  <div class="reti-meeting-room__inner">
    <base-video-block></base-video-block>
    <base-video-block></base-video-block>
    <base-video-block></base-video-block>
  </div>
</template>

<script>
import BaseVideoBlock from "@/components/BaseVideoBlock.vue";

export default {
  name: "MeetingRoomInner",
  components: {
    BaseVideoBlock
  }
};
</script>

<style lang="scss" scoped>
.reti-meeting-room__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px
}
</style>
