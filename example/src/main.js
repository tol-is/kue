/* eslint-disable */
import Kue from 'Kue';

const states = require.context('./states/');
const views = require.context('./views/');

new Kue({
  views,
  states,
}).$mount('#root');
