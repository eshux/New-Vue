import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';

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
    events: [],
    totalEvents: 0,
    event: {}
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENTS_TOTAL(state, total) {
      state.totalEvents = total;
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          commit('SET_EVENTS', response.data);
          commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
        })
        .catch((error) => {
          console.log('There was an error: ' + error);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);

      // See if we already have this event in state
      // Skip fetching it if we have
      if (event) {
        commit('SET_EVENT', event);
        return;
      }

      EventService.getEvent(id)
        .then((response) => {
          commit('SET_EVENT', response.data);
        })
        .catch((error) => {
          console.log('There was an error: ' + error);
        });
    }
  },
  modules: {}
});
