<template>
  <transition-group
    class="reti-meeting-room__inner"
    tag="div"
    name="reti-meeting-room__inner"
    :data-videos-count="guests.length >= 3 ? 3 : guests.length"
    >
    <base-video-block
      :key="item.id"
      v-for="(item) in guests"
      :label="item.userName"
      :avatar="item.avatar"
    ></base-video-block>
  </transition-group>
</template>

<script>
import { faker } from "@faker-js/faker";
import BaseVideoBlock from "@/components/BaseVideoBlock.vue";

export default {
  name: "MeetingRoomInner",
  components: {
    BaseVideoBlock
  },
  data () {
    return {
      guests: [
        {
          id: faker.datatype.uuid(),
          userName: faker.internet.displayName(),
          avatar: `https://picsum.photos/200/300?${faker.datatype.uuid()}`,
          isMuted: false,
          isVideoOn: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.reti-meeting-room {

  &__inner-enter-from,
  &__inner-leave-to {
    opacity: 0;
    transform: scale(0.7);
  }

  &__inner {
    display: grid;
    gap: 24px;
    align-items: flex-start;
    justify-content: flex-start;

    &:where([data-videos-count="1"]) {
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(1, 1fr);

      & > :nth-child(1) {
        grid-column: 1/-1;
        height: 600px;
      }
    }

    &:where([data-videos-count="2"]) {
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
    }

    &:where([data-videos-count="3"]) {
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: max-content;

      & > :nth-child(1) { grid-column: span 3; }
      & > :nth-child(2) {grid-column: span 3; }

      & > * {  grid-column: span 2; }
    }
  }

  .reti-video-block {
    transition: all .3s;
  }
}
</style>
