<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import { useRegisteredEventsStore } from '@/stores/registeredEvents';
import { storeToRefs } from 'pinia';

const props = defineProps(['event']);

const router = useRouter();
// Global store
const GStore = inject('GStore');
// Pinia store
const store = useRegisteredEventsStore();
const { isEventRegistered } = storeToRefs(store);

const register = () => {
  // If register API call is successful
  // Push back to event details page
  GStore.flashMessage = 'You succesfully registered to the event!';
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);
  router.push({ name: 'EventDetails' });

  store.registerEvent(props.event);
};

const cancelRegistration = () => {
  GStore.flashMessage = 'You succesfully canceled your registration to the event!';
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);

  store.cancelEvent(props.event.id);
};
</script>

<template>
  <div v-if="event">
    <div v-if="!isEventRegistered(event.id)">
      <p>Register to Event</p>
      <button @click="register">Register</button>
    </div>
    <div v-else>
      <p>You have already registered to this Event</p>
      <button @click="cancelRegistration">Cancel registration</button>
    </div>
  </div>
</template>
