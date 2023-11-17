<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '../services/EventService';

const props = defineProps(['page']);

const perPage = 2;

const events = ref(null);
const totalEvents = ref(0);

const page = computed(() => props.page);

const hasNextPage = computed(() => {
  const totlaPages = Math.ceil(totalEvents.value / perPage);
  return page.value < totlaPages;
});

const hasPrevPage = computed(() => {
  return page.value > 1;
});

onMounted(() => {
  // WatchEffect
  // When reactive values will cahnge, this function will run again
  // So once the query params ( page ) is changed
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(perPage, page.value)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
</script>

<template>
  <h1>World Events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        v-if="hasPrevPage"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        >&#60; Previous</RouterLink
      >
      <RouterLink
        id="page-next"
        v-if="hasNextPage"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        >Next &#62;</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
