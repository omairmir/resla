<template>
<div class="sale-filter-container flex justify-between items-center sticky top-[127px] lg:top-[67px] overflow-hidden flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:items-center bg-primary-1000 z-10 py-3">
  <div class="filter-wrapper flex justify-center items-center gap-5">
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(model, index) in saleFilterModelList" :key="index">
        <Chip :value="model.value" class="w-max" @onSelect="handleFilterChange(filter.value, true)" @onDeselect="handleFilterChange(filter.value, false)">{{ model.name }}</Chip>
      </div>
    </div>
    <div class="separator flex justify-center items-center w-px h-7 text-resla-ebony-80"></div>
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(range, index) in saleFilterRangeList" :key="index">
        <Chip :value="range.value" class="w-max">{{ range.name }}</Chip>
      </div>
    </div>
    <div class="separator flex justify-center items-center w-px h-7 text-resla-ebony-80"></div>
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(color, index) in saleFilterColorList" :key="index">
        <ColorChip :color="color.value" class="w-max"></ColorChip>
      </div>
    </div>
  </div>
  <div class="year-wrapper">
    <DropdownMenu :id="'my-dropdown'" label="Year" variant="secondary" size="small" dropdownClass="w-[295px]" :options="[
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
        { name: "Model X", value: 'model_x' },
        { name: "Model Y", value: 'model_y' },
        { name: "Model S", value: 'model_s' },
        { name: "Model 3", value: 'model_3' },
      ],

      saleFilterRangeList: [
        { name: "Long Range", value: 'long_range' },
      ],

      saleFilterColorList: [
        { name: "red", value: 'red' },
        { name: "blue", value: 'blue' },
        { name: "black", value: 'black' },
        { name: "white", value: 'pearl' },
        { name: "grey", value: 'silver' },
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