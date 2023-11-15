<template>
  <div>
    <h1>Oops!</h1>
    <h4>The {{ resource }} you are looking for doesn't exist!</h4>
    <router-link :to="{ name: 'event-list' }">Back to homepage</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
};
</script>

<style scoped></style>
