import { defineStore } from 'pinia';

export const useRegisteredEventsStore = defineStore('registeredEvents', {
  state: () => ({
    registeredEvents: []
  })
});