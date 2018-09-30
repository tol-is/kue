/* eslint-disable */
<template>
  <div class="app-container">
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['onclick'],
};
</script>

<style scoped>
  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;

  }
</style>
