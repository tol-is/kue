import Vue from 'vue'

import SceneManager from './scene-manager.vue';

const Kue = ({ views, states, ...props }) => {
  return new Vue({
    render: h => h(SceneManager),
  });
}

export default Kue;
