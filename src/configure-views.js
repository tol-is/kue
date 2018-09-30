import Vue from 'vue';

import getFileName from './utils/get-filename';

export default context => {
  const views = context
    .keys()
    .map(key => ({
      ctx: context(key),
      key: getFileName(key),
    }))
    .reduce((res, comp) => ({
      ...res,
      [comp.key]: comp.ctx.default,
    }), {});

  return Object.keys(views).map((v) => {
    Vue.component(v, views[v]);
    return Vue.component(v, views[v]);
  });
}

