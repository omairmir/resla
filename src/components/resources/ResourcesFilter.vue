<template>
  <div class="flex">
    <carousel
        v-if="isMobile"
    >
    <slide
        v-for="(filter, index) in filterList"
        :key="index"
        class="flex items-center justify-between"
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
      isMobile: false
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1024;
    },
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

<style lang="scss">
.VueCarousel {
  width: max-content;
}
.VueCarousel-inner{
  flex-basis: 0px !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.VueCarousel-slide {
  button {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.VueCarousel-pagination {
  display: none;
}
</style>
