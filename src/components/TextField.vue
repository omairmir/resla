<template>
    <div class="mb-3">
      <label :for="fieldId" class="form-label">{{ label }}</label>
      <input
        :type="type"
        class="form-control"
        :id="fieldId"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextField',
    props: {
      label: {
        type: String,
        required: true
      },
      fieldId: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    }
  };
  </script>
  