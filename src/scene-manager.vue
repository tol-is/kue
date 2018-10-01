<template>
  <main class="app-container">
    <div class="scene-container" v-on:click="onclick">
      <scene-layer
        v-for="v in views"
        :key="v.component"
        :view="v.component"
        :transition="v.transition"
        :position="v.position"
        :data="v.data"
        :z-index="v.zIndex"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'SceneManager',
  computed: {
    views() {
      let vuez = [];
      let skip = 0;

      this.$store.state.sm.history.every((n) => {
        const nodeVuez = n.views.map(v => ({
          component: v.component,
          transition: v.transition || undefined,
          position: v.position || undefined,
          data: v.data || undefined,
        }));

        const nodeVuezLen = nodeVuez.length;

        if (skip > 0) {
          nodeVuez.splice(skip * -1);
          skip = Math.max(skip - nodeVuezLen, 0);
        }

        vuez = [...nodeVuez, ...vuez];
        skip += n.pop ? n.pop : 0;

        return (n.reset === false || n.pop);
      });

      return vuez;
    },
  },
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
  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .scene-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
