<template>
  <div>
    <div class="field">
      <label v-if="label">{{ label }}</label>
      <select :value="value" @change="updateValue" v-bind="$attrs">
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="option === value"
        >{{ option }}</option>
      </select>
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
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>