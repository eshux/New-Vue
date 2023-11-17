<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

defineProps(['event']);

const router = useRouter();
const GStore = inject('GStore');

const create = () => {
  // If create API is successful
  // Push back to event details page
  GStore.flashMessage = 'You succesfully created an event!';
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);
  router.push({ name: 'EventDetails' });
};
</script>

<template>
  <div v-if="event">
    <p>Create Event</p>
    <button @click="create">CREATE</button>
  </div>
</template>
