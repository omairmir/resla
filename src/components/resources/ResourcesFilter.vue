<template>
    <div class="flex items-center gap-2">
      <div v-for="(filter, index) in filterList" :key="index">
        <Chip :value="filter.name"  @onSelect="handleFilterChange" @onDeselect="handleFilterChange">
          {{filter.name}}
        </Chip>
      </div>
    </div>
  </template>
  
  <script>
  import Chip from "@/components/base/Chip";
  export default {
    name: 'ResourcesFilter',
    components:{
      Chip
    },
    data() {
      return {
        filterList: [
          {name: "Driving", value: 'driving'},
          {name: "Charging", value: 'charging'},
          {name: "Digital Key", value: 'digital_key'},
          {name: "Rental Process", value: 'rental_process'},
          {name: "Insurance", value: 'insurance'}
        ]
      }
    },
    methods: {
    handleFilterChange(value) {
        this.$emit("onChange", value);
    },
    }
  }
  </script>