<template>
  <div class="reti-meeting-room">
    <meeting-room-header>

    </meeting-room-header>
    <meeting-room-inner>

    </meeting-room-inner>
    <meeting-room-controls>

    </meeting-room-controls>
    <meeting-room-chat>

    </meeting-room-chat>
  </div>
</template>

<script>
import MeetingRoomHeader from "./components/MeetingRoomHeader.vue";
import MeetingRoomInner from "./components/MeetingRoomInner.vue";
import MeetingRoomControls from "./components/MeetingRoomControls.vue";
import MeetingRoomChat from "./components/MeetingRoomChat.vue";

export default {
  name: "MeetingRoomView",
  components: {
    MeetingRoomHeader,
    MeetingRoomInner,
    MeetingRoomControls,
    MeetingRoomChat
  }
};
</script>

<style lang="scss">
.reti-meeting-room {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "header header header header"
    "inner inner inner chat"
    "controls controls controls controls";

  grid-auto-rows: max-content 1fr max-content;
  column-gap: 24px;
  row-gap: 32px;

  height: calc(100vh - 80px);
  width: 100%;

  .reti-meeting-room__header { grid-area: header; }
  .reti-meeting-room__inner { grid-area: inner; }
  .reti-meeting-room__controls { grid-area: controls; }
  .reti-meeting-room__chat { grid-area: chat; }
}
</style>
