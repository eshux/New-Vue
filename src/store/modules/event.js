import EventService from '@/services/EventService';

// This means that now all getters, mutations and actions are under a namespace
// e.g. when dispatching actions in components you need to use 'event/actionName'
export const namespaced = true;

export const state = {
  events: [],
  totalEvents: 0,
  event: {}
};

export const mutations = {
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
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  }
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event);

        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        };

        dispatch('notification/add', notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was an error creating your event: ' + error.message
        };
        dispatch('notification/add', notification, { root: true });
        // When throwing error, it becomes available in components
        throw error;
      });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((response) => {
        commit('SET_EVENTS', response.data);
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        };
        dispatch('notification/add', notification, { root: true });
      });
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    const event = getters.getEventById(id);

    // See if we already have this event in state
    // Skip fetching it if we have
    if (event) {
      commit('SET_EVENT', event);
      return;
    }

    return EventService.getEvent(id)
      .then((response) => {
        commit('SET_EVENT', response.data);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching event: ' + error.message
        };
        dispatch('notification/add', notification, { root: true });
      });
  }
};
