<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue';

const registeredEvents = ref(null);
</script>

<template>
  <h1>Registered Events</h1>
  <div v-if="registeredEvents && registeredEvents.length">
    <p>You have registered for the following events:</p>
    <div class="events">
      <EventCard v-for="event in registeredEvents" :key="event.id" :event="event" />
    </div>
  </div>
  <div v-else>
    <p>You have not registered for any events yet</p>
    <RouterLink :to="{ name: 'EventList' }">Look for events</RouterLink>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
