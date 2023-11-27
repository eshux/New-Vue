import { defineStore } from 'pinia';

export const useRegisteredEventsStore = defineStore('registeredEvents', {
  state: () => ({
    registeredEvents: []
  }),
  actions: {
    registerEvent(event) {
      this.registeredEvents.push(event);
    },
    cancelEvent(eventId) {
      this.registeredEvents = this.registeredEvents.filter((item) => item.id !== eventId);
    }
  },
  getters: {
    // Cannot pass argumens to getters, becuase these are simply just computed properties
    // However you can return a function with argument
    isEventRegistered() {
      return (eventId) => this.registeredEvents.find((item) => item.id === eventId);
    }
  }
});