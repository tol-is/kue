/* eslint-disable */
import Kue, { configureViews, configureStates } from 'Kue';

const states = require.context('./states/');
const views = require.context('./views/');

new Kue({
  views,
  states,
}).$mount('#root');


