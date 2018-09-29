import Vue from 'vue'


const Kue = props => new Vue({
  ...props
});

// class Kue {
//   constructor(props) {
//     console.log(props);
//     return
//   }
// }

export default Kue;



// store,
//   components: { SceneManager },
// template: '<SceneManager/>',
//   created() {
//   this.$store.dispatch('sm_start');
//   this.onWindowResize(null);
//   window.addEventListener('resize', this.onWindowResize);
// },
// beforeDestroy() {
//   window.removeEventListener('resize', this.onWindowResize);
// },
// methods: {
//   onWindowResize() {
//     const width = document.body.clientWidth - 200;
//     const height = document.body.clientHeight - 200;
//     this.$store.commit('set_client_dimensions', { width, height });
//   },
// },
