import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: '1',
      name: 'Adam Jahr'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [{ id: '1', name: 'Hi' }]
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
