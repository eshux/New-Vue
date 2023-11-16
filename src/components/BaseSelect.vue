<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- Make sure input inherits the attributes with v-bind $attrs -->
    <select
      v-on="listeners"
      @change="updateValue"
      :value="value"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
