<template>
  <div class="flex">
    <carousel
        v-if="0"
        :navigation-enabled="false"
        :perPageCustom="[[400, 3], [768, 6]]"
        :wrap-around="true"
    class="flex items-center"
    >
    <slide
        v-for="(filter, index) in filterList"
        :key="index"
        class="flex items-center"
    >
      <Chip
          :value="filter.value"
          @onSelect="handleFilterChange(filter.value, true)"
          @onDeselect="handleFilterChange(filter.value, false)"
          class="mr-2"
      >
      {{ filter.name }}
      </Chip>
    </slide>
    </carousel>

    <!-- Render div layout on larger screens -->
    <div v-else class="flex items-center gap-2">
      <div v-for="(filter, index) in filterList" :key="index">
        <Chip :value="filter.value" @onSelect="handleFilterChange(filter.value, true)"
              @onDeselect="handleFilterChange(filter.value, false)">
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
      selectedFilters: new Set(), // use set to avoid duplicate
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
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
