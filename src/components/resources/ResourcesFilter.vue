<template>
  <div>
    <div class="flex items-center gap-2 overflow-auto md:overflow-hidden custom-scroll">
      <div v-for="(filter, index) in filterList" :key="index" class="">
        <Chip :value="filter.value" :selected="selectedFilters.has(filter.value)"
          @onSelect="handleFilterChange(filter.value, true)" @onDeselect="handleFilterChange(filter.value, false)"
          class="w-max">
          {{ filter.name }}
        </Chip>
      </div>
    </div>

  </div>
</template>

<script>
import Chip from "@/components/base/Chip";
export default {
  name: 'ResourcesFilter',
  components: {
    Chip,
  },
  props: {
    selected: {
      type: Array,
      default: (() => [])
    }
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
      selectedFilters: new Set(this.selected) // use set to avoid duplicate
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
  },
  watch: {
    selected(newSelected) {
      this.selectedFilters = new Set(newSelected);
    }
  }
}
</script>

<style scoped>
/* Hide scrollbar in WebKit browsers (Chrome, Safari) */
.custom-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar in Firefox */
.custom-scroll {
  scrollbar-width: none;
}

/* Keep overflow functionality */
.custom-scroll {
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
}
</style>
