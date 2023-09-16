<template>
  <section class="reti-about-us">
    <h2 class="reti-home-page__title-with-divider reti-about-us__title">
      About us
    </h2>
    <div class="reti-about-us__content">
      <div class="reti-about-us__content-main">
        <p class="reti-about-us__content-paragraph">
          Picture this….you’re in your weekly meeting and you ask a question.<br/>
          No one responds. Whether they’re zoned out or are responding to emails or chatting<br/>
          on slack, it can feel defeating.
        </p>
        <br/>
        <br/>
        <p class="reti-about-us__content-paragraph">In order to have an epic meeting, you need five parts:</p>
        <ul class="reti-about-us__content-list">
          <li class="reti-about-us__content-list-item">Set a cadence for your team meetings</li>
          <li class="reti-about-us__content-list-item">Have a clear meeting objective and agenda</li>
          <li class="reti-about-us__content-list-item">Start on time and end on time</li>
          <li class="reti-about-us__content-list-item">Have the right attendees in the room</li>
          <li class="reti-about-us__content-list-item">Have clear action items [who, what, when] at the end of the meeting</li>
        </ul>
        <br/>
        <br/>
        <p class="reti-about-us__content-paragraph">
          Rate It was created to help leaders and managers have epic meetings that aren’t wasting anyone’s time. With timely feedback on how meetings can be productive, you will soon be holding world-class and super effective meetings.
        </p>
      </div>
      <img
        src="../../../assets/images/home/reti-logo-large.png"
        alt="about us logo"
        class="reti-about-us__content-logo"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reti-about-us {
  display: flex;
  flex-direction: column;
  gap: 120px;

  padding: 0 120px;

  &__title { justify-content: flex-start; }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  &__content-list-item,
  &__content-paragraph {
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__content-list-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    &::before {
      content: " ";
      width: 9px;
      height: 9px;
      border-radius: 100%;
      border: 1px solid #1F64FF;
    }
  }

  &__content-logo {
    width: 190px;
    height: auto;
  }
}
</style>
