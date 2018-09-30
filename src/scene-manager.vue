<template>
  <app-container>
    <scene-container >
      <scene-layer
        v-for="v in views"
        :key="v.component"
        :view="v.component"
        :transition="v.transition"
        :position="v.position"
        :data="v.data"
        :z-index="v.zIndex"
      />
    </scene-container>
    <!-- <hotspot
      v-for="(h,i) in hotspots"
      :key="`hs-${i}`"
      :spot="h"
    /> -->
  </app-container>

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

    hotspots() {
      return this.$store.state.sm.history[0].hotspots;
    },
  },
};
</script>
