<template>
  <div>
    <div class="field">
      <label v-if="label">{{ label }}</label>
      <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners" />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>

<style scoped>
</style>