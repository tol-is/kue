/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

export default context => {
  Vue.use(Vuex);
  const appSettings = {
    state: {
      frame: 'desktop',
      width: undefined,
      height: undefined,
    },

    mutations: {
      set_client_dimensions(state, dimensions, root) {
        state.width = dimensions.width;
        state.height = dimensions.height;
      },
    },
  }

  const store = new Vuex.Store({
    modules: {
      settings: appSettings,
      sm: createSMfromStateContext(context),
    }
  });
  return store;
};


const createSMfromStateContext = context => {

  const smNodes = context
    .keys()
    .map(key => context(key).default);

  // Create Keux StateMachine Module
  return {
    nodes: smNodes,
    state: {
      history: [],
      views: 0,
    },
    actions: {
      sm_start(context) {
        const initialNode = smNodes.find((n) => n.initial === true)
        context.commit('sm_to', initialNode);
      },
      sm_next(context) {
        const currentNode = context.state.history[0];
        const nextNodeId = currentNode.next;
        // if not next node return
        if (!nextNodeId) return;
        const nextNode = smNodes.find((n) => n.id === nextNodeId);
        context.commit('sm_to', nextNode);
      },
      sm_reset(context) {
        context.commit('sm_reset');
        context.dispatch('sm_start');
      },
    },
    mutations: {
      sm_to(state, node, root) {
        state.history.splice(0, 0, node);
        state.views = state.history.length;
      },
      sm_reset(state, root) {
        Vue.set(state, 'history', []);
      },
    },
  };
};


