<template>
  <div class="scrollable-container">
    <slot/>
  </div>
</template>


<style scoped>
  .scrollable-container {
    position: relative;
    width: 100%;
    display: flex;
     overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
