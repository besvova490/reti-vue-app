<template>
  <div class="reti-progress-bar">
    <canvas
      ref="progressBarCanvas"
      class="reti-progress-bar__canvas"
      width="104"
      height="104"
    ></canvas>
    <span class="reti-progress-bar__label">
      {{ value }}%
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseProgressBar",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    drawPercentageCircle () {
      const canvas = this.$refs.progressBarCanvas;
      const canvasContext = canvas.getContext("2d");

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const canvasPositionX = canvasWidth / 2;
      const canvasPositionY = canvasHeight / 2;
      const onePercent = 360 / 100;
      const totalProgress = onePercent * this.value;
      const fps = 1000 / 200;

      canvasContext.lineCap = "round";

      function fillPercentage () {
        let degrees = 0;

        const acrInterval = setInterval(() => {
          degrees += 1;

          canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

          canvasContext.beginPath();
          canvasContext.arc(canvasPositionX, canvasPositionY, canvasWidth / 2.1, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
          canvasContext.strokeStyle = "transparent";
          canvasContext.lineWidth = 2;
          canvasContext.stroke();

          canvasContext.beginPath();
          canvasContext.strokeStyle = "#FFF";
          canvasContext.lineWidth = 3;
          canvasContext.arc(canvasPositionX, canvasPositionY, canvasWidth / 2.1, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees));
          canvasContext.stroke();

          if (degrees >= totalProgress) {
            clearInterval(acrInterval);
          }
        }, fps);
      }

      fillPercentage();
    }
  },
  mounted () {
    this.drawPercentageCircle();
  }
};
</script>

<style lang="scss" scoped>
.reti-progress-bar {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 104px;
  height: 104px;

  background-color: rgba(255, 255, 255, 0.10);

  border-radius: 50%;
  overflow: hidden;

  &__label {
    color: #FFF;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    position: absolute;
  }
}
</style>
