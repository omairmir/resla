<template>
    <div class="mb-3">
      <label :for="fieldId" class="form-label">{{ label }}</label>
      <select
        class="form-select"
        :id="fieldId"
        :value="value"
        @change="$emit('update:value', $event.target.value)"
      >
        <option disabled value="">{{ defaultOption }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropdownField',
    props: {
      label: {
        type: String,
        required: true
      },
      fieldId: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      value: {
        type: [String, Number],
        default: ''
      },
      defaultOption: {
        type: String,
        default: 'Select an option'
      }
    }
  };
  </script>
  