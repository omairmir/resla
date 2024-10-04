<template>
  <div>
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(filter, index) in filterList" :key="index" class="">
        <Chip :value="filter.value" :selected="selectedFilters.has(filter.value)"
          @onSelect="handleFilterChange(filter.value, true)" @onDeselect="handleFilterChange(filter.value, false)"
          class="w-max">
          {{ filter.name }}
        </Chip>
      </div>
    </div>

    <carousel :navigation-enabled="false" :paginationEnabled="false" :perPage="3" :perPageCustom="[[640, 4], [768, 4]]"
      class="flex md:hidden">
      <slide v-for="(filter, index) in filterList" :key="index" class="basis-0 w-max ml-2">
        <Chip :value="filter.value" :selected="selectedFilters.has(filter.value)"
          @onSelect="handleFilterChange(filter.value, true)" @onDeselect="handleFilterChange(filter.value, false)"
          class="w-max">
          {{ filter.name }}
        </Chip>
      </slide>
    </carousel>

  </div>
</template>

<script>
import Chip from "@/components/base/Chip";
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'ResourcesFilter',
  components: {
    Chip,
    Carousel,
    Slide
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
