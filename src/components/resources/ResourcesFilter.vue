<template>
  <div class="flex items-center gap-2">
    <div v-for="(filter, index) in filterList" :key="index">
      <Chip :value="filter.value" @onSelect="handleFilterChange(filter.value, true)"
        @onDeselect="handleFilterChange(filter.value, false)">
        {{ filter.name }}
      </Chip>
    </div>
  </div>
</template>

<script>
import Chip from "@/components/base/Chip";

export default {
  name: 'ResourcesFilter',
  components: {
    Chip
  },
  data() {
    return {
      filterList: [
        { name: "Driving", value: 'driving' },
        { name: "Charging", value: 'charging' },
        { name: "Digital Key", value: 'digital_key' },
        { name: "Rental Process", value: 'rental_process' },
        { name: "Insurance", value: 'insurance' }
      ],
      selectedFilters: new Set() // use set to avoid duplicate
    };
  },
  methods: {
    handleFilterChange(value, isSelected) {
      if (isSelected) {
        this.selectedFilters.add(value);
      } else {
        this.selectedFilters.delete(value);
      }
      this.$emit("onChange", Array.from(this.selectedFilters));
    }
  }
}
</script>
