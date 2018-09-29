/* eslint-disable */
import Kue from 'Kue';

const states = require.context('./states/', true, /\.js$/);
const views = require.context('./views/', true, /\.js$/);

import App from './App.vue'

new Kue({
  views,
  states,
  render: h => h(App)
}).$mount('#root');


