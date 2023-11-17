<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

defineProps(['event']);

const router = useRouter();
const GStore = inject('GStore');

const register = () => {
  // If register API call is successful
  // Push back to event details page
  GStore.flashMessage = 'You succesfully registered to the event!';
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);
  router.push({ name: 'EventDetails' });
};
</script>

<template>
  <div v-if="event">
    <p>Register to Event</p>
    <button @click="register">Register</button>
  </div>
</template>
