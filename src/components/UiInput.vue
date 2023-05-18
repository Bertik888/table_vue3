<template>
  <div>
    <label 
      :for="name" 
      class="form-label"
    >
      {{ label }}
    </label>
    <input 
      :value="modelValue"
      :id="name"
      :type="type" 
      class="form-control" 
      :class="{'is-invalid': invalidText}"
      @input="onInput"
    >
    <div class="invalid-feedback">
      {{ invalidText }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UiInput',

    props: {
      name: {
        type: String,
        required: true
      },

      modelValue: {
        type: [String, Number],
        default: ''
      },

      type: {
        type: String,
        default: 'text'
      },

      label: {
        type: String,
        default: ''
      },

      invalidText: {
        type: String,
        default: ''
      }
    },

    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }    
  }
</script>

<style lang="scss" scoped>

</style>