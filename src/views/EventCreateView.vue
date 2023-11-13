<template>
  <div>
    <h1>Create an Event</h1>
    <p>This event was created by {{ userName }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
    <p>Get event: {{ getEventById('1') }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // catLength() {
    //   return this.$store.getters.catLength;
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById;
    // },
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState({
      userName: (state) => state.user.name,
      userId: (state) => state.user.id,
      categories: 'categories'
    })
  }
};
</script>
