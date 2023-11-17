<script setup>
import { ref, onMounted, computed } from 'vue';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const event = ref(null);

const id = computed(() => props.id);

onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' }
        });
      } else {
        router.push({ name: 'NetworkError' });
      }
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink> |
      <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>
