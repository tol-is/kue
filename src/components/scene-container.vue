<template>
  <div
    class="scene-container"
    v-on:click="onclick"
  >
    <div class="scene-container__inner-wrap">
      <slot/>
    </div>
  </div>
</template>


<script>

export default {
  methods: {
    onclick(e) {
      e.preventDefault();
      const currentState = this.$store.state.sm.history[0];
      if (currentState.next) {
        this.$store.dispatch('sm_next');
      }
    },
  },
};
</script>

<style scoped>
  .scene-container {
    position: relative;
    width: 100%;
    height: 100%;
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
