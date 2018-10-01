/* eslint-disable */
<template>
  <div class="hotspot" :style="hotspotPosition" v-on:click="onclick">
    <div class="dot"></div>
    <span class="line" :style="linePosition"></span>
    <div :style="messagePosition" class="message">
      <h4 :if="spot.title">{{spot.title}}</h4>
      <p :if="spot.message">{{spot.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['spot'],
  computed: {
    hotspotPosition() {
      return {
        left: `${this.hotspotPositionLeft}px`,
        top: `${this.hotspotPositionTop}px`,
      };
    },
    hotspotPositionLeft() {
      const clientWidth = this.$store.state.settings.width;
      return (clientWidth * this.posLeft) + 100;
    },
    hotspotPositionTop() {
      const clientHeight = this.$store.state.settings.height;
      return (clientHeight * this.posTop) + 100;
    },
    messagePositionTop() {
      const baseMessagePositionTop = this.$store.state.settings.height + 110;
      return baseMessagePositionTop - this.hotspotPositionTop;
    },
    messagePosition() {
      return {
        top: `${this.messagePositionTop}px`,
      };
    },
    linePosition() {
      return {
        height: `${this.messagePositionTop}px`,
      };
    },
    posLeft() {
      return parseFloat(this.$props.spot.left) / 100.0;
    },
    posTop() {
      return parseFloat(this.$props.spot.top) / 100.0;
    },
  },
  methods: {
    onclick(e) {
      e.preventDefault();
      console.log('hotspot click');
      return false;
    },
  },
};
</script>


<style scoped>
  .hotspot {
    position: absolute;
    z-index: 999;
    left: 50%;
    top: 15%;
  }

  .dot{
    position: absolute;
    margin-left: -5px;
    margin-top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    display: block;
  }


  .message{
    position: absolute;
    width: 240px;
  }

  .line{
    position: absolute;
    display: block;
    background-color: black;
    width: 2px;
  }
</style>
