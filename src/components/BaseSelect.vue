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
export default {
  // by default attributes get inheritet by root element - in this case our div
  // we need it to be the input element instead
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  computed: {
    // To resolve v-on $listeners conflict with @input we need to modify them
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style scoped></style>
