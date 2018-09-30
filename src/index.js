import Vue from 'vue'

import './styles/main.css';
import'./styles/transitions/index.css';

import configureViews from './configure-views';
import configureStore from './configure-store';

import SceneManager from './scene-manager.vue';
import Browser from './components/browser.vue';
import SceneLayer from './components/scene-layer.vue';
import SceneContainer from './components/scene-container.vue';
import Hotspot from './components/hotspot.vue';
import AppContainer from './components/app-container.vue';
import ViewNotFound from './components/view-not-found.vue';
import ScrollContainer from './components/scroll-container.vue';

Vue.component('view-404', ViewNotFound);
Vue.component('scroll-container', ScrollContainer);
Vue.component('browser-window', Browser);
Vue.component('scene-layer', SceneLayer);
Vue.component('hotspot', Hotspot);
Vue.component('scene-container', SceneContainer);
Vue.component('app-container', AppContainer);

const Kue = ({views, states, ...props}) => {

  const vues = configureViews(views);
  console.log(views, vues)
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

