export const formFieldMixin = {
  // by default attributes get inheritet by root element - in this case our div
  // we need it to be the input element instead
  inheritAttrs: false,
  props: {
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
