import Vue from 'vue'

import './styles/main.css';
import'./styles/transitions/index.css';

import configureViews from './configure-views';
import configureStore from './configure-store';

import SceneManager from './scene-manager.vue';
import SceneLayer from './scene-layer.vue';
import ScrollContainer from './ui/scroll-container.vue';

// Vue.component('view-404', ViewNotFound);
Vue.component('scroll-container', ScrollContainer);
Vue.component('scene-layer', SceneLayer);

const Kue = ({views, states, ...props}) => {

  const components = configureViews(views);
  const store = configureStore(states);

  return new Vue({
    store,
    created() {
      this.$store.dispatch('sm_start');
    },
    render: h => h(SceneManager),
  });
}

export default Kue;

export {
  configureViews,
  configureStore,
};

