<template>
  <div class="scene-container" v-on:click="onclick">
    <div class="scene-container__inner-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .scene-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: block;
    overflow: hidden;
  }

  .scene-container__inner-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
  }

</style>
