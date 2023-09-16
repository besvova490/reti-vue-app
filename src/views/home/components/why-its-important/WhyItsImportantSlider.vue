<template>
  <swiper
    :effect="'coverflow'"
    :centeredSlides="true"
    :slidesPerView="'3'"
    :pagination="true"
    :modules="modules"
    :loop="true"
    :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    class="reti-why-its-important-slider"
  >
    <swiper-slide
      :key="index"
      v-for="(slide, index) in slides"
      class="reti-why-its-important-slider__slide"
    >
      <div class="reti-why-its-important-slider__slide-inner">
        <div class="reti-why-its-important-slider__slide-info">
          <h4 class="reti-why-its-important-slider__slide-info__title">{{ slide.title }}</h4>
          <p class="reti-why-its-important-slider__slide-info__description">{{ slide.description }}</p>
          <span class="reti-why-its-important-slider__slide-info__source">{{ slide.source }}</span>
        </div>
        <div class="reti-why-its-important-slider__slide-info__image">
          <img
            class="reti-why-its-important-slider__slide-info__image-border"
            src="../../../../assets/images/home/why-its-important-slider-image-border.jpg"
            alt="slider image border"
          />
          <span class="reti-why-its-important-slider__slide-info__image-background">
            <font-awesome-icon :icon="fortawesomeIcons[slide.icon]" />
          </span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectCoverflow } from "swiper/modules";
import * as fortawesomeIcons from "@fortawesome/free-solid-svg-icons";

// assets
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
</script>

<script>

// helpers
import WHY_ITS_IMPORTANT_SLIDES from "./constants";

export default {
  name: "WhyItsImportantSlider",
  components: [
    Swiper,
    SwiperSlide
  ],
  data () {
    return {
      slides: WHY_ITS_IMPORTANT_SLIDES,
      modules: [Pagination, EffectCoverflow],
      fortawesomeIcons
    };
  }
};

</script>

<style lang="scss">
@mixin quote {
  content: '“';
  color: #090949;
  font-family: "Lato", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.reti-why-its-important-slider {
  width: 1100px;
  margin-top: 100px;

  &__slide {
    margin: 10px 10px 78px 10px;

    .swiper-slide-shadow-right.swiper-slide-shadow-coverflow,
    .swiper-slide-shadow-left.swiper-slide-shadow-coverflow {
      background-image: none;
    }

    &.swiper-slide-active .reti-why-its-important-slider__slide-inner {
      opacity: 1;
      position: relative;
      z-index: 1;
    }
  }

  &__slide-inner {
    position: relative;

    width: 550px !important;
    height: 290px !important;
    padding: 28px 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 52px;

    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 6px 20px 3px rgba(229, 229, 229, 0.60);

    transition: all 0.3s ease-in-out;
    opacity: 0.6;

    &::after {
      @include quote;

      position: absolute;
      right: 30px;
      bottom: 20px;

      transform: rotate(180deg);
    }
  }

  &__slide-info {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__title {
      color: #1F64FF;
      font-family: "Lato", sans-serif;
      font-size: 36px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    &__description {
      color: #090949;
      font-family: "Lato", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__source {
      display: inline-block;
      margin-top: auto;

      color: #A6A6B2;
      font-family: "Lato", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      width: 120px;
      height: 120px;
    }

    &__image-border {
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &__image-background {
      width: 86px;
      height: 86px;
      border-radius: 100%;
      background-color: #C4DBF7;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #1F64FF;

      position: relative;
      z-index: 2;

      svg {
        width: 50px;
        height: 50px;
      }
    }

    &::before {
      @include quote;

      margin-left: -20px;
    }
  }

  .swiper-pagination-bullet {
    width: 49px;
    height: 4px;
    border-radius: 4px;
    background-color:#F0F0F0;
    opacity: 1;

    &.swiper-pagination-bullet-active {
      background-color: #1F64FF;
    }
  }
}
</style>
