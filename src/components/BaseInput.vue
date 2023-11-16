<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- Make sure input inherits the attributes with v-bind $attrs -->
    <input
      v-on="listeners"
      @input="updateValue"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin]
};
</script>

<style scoped></style>
