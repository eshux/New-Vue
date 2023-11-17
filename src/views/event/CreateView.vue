<script setup>
import { useRouter } from 'vue-router';

// const props = defineProps(['event']);
const router = useRouter();

const create = () => {
  // If create API is successful
  // Push back to event details page
  router.push({ name: 'EventDetails' });
};
</script>

<template>
  <div v-if="event">
    <p>Create Event</p>
    <button @click="create">CREATE</button>
  </div>
</template>
