<template>
<div class="sale-filter-container flex justify-between items-center sticky top-[127px] lg:top-[67px] flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:items-center bg-primary-1000 z-10 py-3">
  <div class="filter-wrapper flex justify-center items-center gap-5">
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(model, index) in saleFilterModelList" :key="index" class="flex">
        <component
            :is="model.componentName"
            :value="model.componentName === 'Chip' ? model.value : undefined"
            class="w-max"
            @onSelect="handleFilterChange(model.name, true)"
            @onDeselect="handleFilterChange(model.name, false)"
            :color="model.componentName === 'ColorChip' ? model.value : undefined"
        >
        {{ model.name }}
        </component>
      </div>
    </div>

    <carousel :navigation-enabled="false" :paginationEnabled="false" :perPage="1" :perPageCustom="[[640, 3], [768, 4]]"
              class="flex md:hidden" :touchDrag="true">
      <slide v-for="(filter, index) in saleFilterModelList" :key="index" class="basis-0 w-max ml-2">
        <component
            :is="filter.componentName"
            :value="filter.componentName === 'Chip' ? filter.value : undefined"
            class="w-max"
            @onSelect="handleFilterChange(filter.name, true)"
            @onDeselect="handleFilterChange(filter.name, false)"
            :color="filter.componentName === 'ColorChip' ? filter.value : undefined"
        >
          {{ filter.name }}
        </component>
      </slide>
    </carousel>

  </div>
  <div class="year-wrapper" @click.stop="">
    <DropdownMenu :id="'my-dropdown-year'" label="Year" variant="secondary" size="small" dropdownClass="w-[295px] right-0 top-16" :options="[
          { id: '2021', label: '2021' },
          { id: '2022', label: '2022' },
          { id: '2023', label: '2023' },
          { id: '2024', label: '2024' },
        ]" valueKey="id" />
  </div>
</div>
</template>

<script>
import Chip from "@/components/base/Chip";
import ColorChip from "@/components/base/ColorChip";
import DropdownMenu from "@/components/base/DropdownMenu";
export default {
  name: "SaleFilter",
  components:{
    Chip,
    ColorChip,
    DropdownMenu
  },
  props: {
    selected: {
      type: Array,
      default: (() => [])
    }
  },
  data() {
    return {
      saleFilterModelList: [
        { name: "Model X", value: 'model_x', componentName: 'Chip' },
        { name: "Model Y", value: 'model_y', componentName: 'Chip' },
        { name: "Model S", value: 'model_s', componentName: 'Chip' },
        { name: "Model 3", value: 'model_3', componentName: 'Chip' },
        { name: "Long Range", value: 'long_range', componentName: 'Chip' },
        { name: "Red", value: 'red', componentName: 'ColorChip' },
        { name: "Blue", value: 'blue', componentName: 'ColorChip' },
        { name: "Black", value: 'black', componentName: 'ColorChip' },
        { name: "White", value: 'pearl', componentName: 'ColorChip' },
        { name: "Grey", value: 'silver', componentName: 'ColorChip' },
      ],
      selectedFilters: new Set(this.selected)
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

</style>