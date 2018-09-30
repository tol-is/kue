<template>
  <transition
    appear
    mode="out-in"
    v-bind:name="transitionName"
  >
    <div class="scene-layer" :style="layerStyle">
      <comp :is="view" />
    </div>
  </transition>
</template>

<script>

import VueTypes from 'vue-types';

export default {
  name: 'scene-layer',
  props: {
    view: VueTypes.string.def('view-404'),
    transition: VueTypes.string.def('none'),
    position: VueTypes.shape({
      zIndex: VueTypes.integer.def('auto'),
      backgroundColor: VueTypes.string.def('transparent'),
      centerX: VueTypes.bool.def(false),
      centerY: VueTypes.bool.def(false),
      left: VueTypes.string.def('auto'),
      top: VueTypes.string.def('auto'),
      right: VueTypes.string.def('auto'),
      bottom: VueTypes.string.def('auto'),
      marginLeft: VueTypes.string.def('auto'),
      marginTop: VueTypes.string.def('auto'),
      marginRight: VueTypes.string.def('auto'),
      marginBottom: VueTypes.string.def('auto'),
      width: VueTypes.string.def('100%'),
      maxWidth: VueTypes.string.def('100%'),
      height: VueTypes.string.def('100%'),
      maxHeight: VueTypes.string.def('100%'),
    }),

    // ['view', 'transition', 'zIndex', positions],
  },
  computed: {
    transitionName() {
      return this.$props.transition || 'fade';
    },

    layerStyle() {
      // console.log(this.$props);
      return {
        ...this.$props.position,
      };
    },
  },
};
</script>

<style scoped>

  .scene-layer{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
