<template>
  <div>
    <h1>Events listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>
    <router-link
      v-if="page * 3 < totalEvents"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      // take page from router query
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(['events', 'totalEvents'])
  }
};
</script>
