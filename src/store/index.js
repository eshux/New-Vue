import Vue from 'vue';
import Vuex from 'vuex';
import * as user from '@/store/modules/user';
import * as event from '@/store/modules/event';
import * as notification from '@/store/modules/notification';
import 'nprogress/nprogress.css';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    }
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    event,
    notification
  }
});
