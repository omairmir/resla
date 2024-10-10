<template>
<div class="sale-filter-container flex justify-between items-center sticky top-[127px] lg:top-[67px] flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:items-center bg-primary-1000 z-10 py-3">
  <div class="filter-wrapper flex justify-center items-center gap-5">
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(model, index) in saleFilterModelList" :key="index">
        <Chip :value="model.value" class="w-max" @onSelect="handleFilterChange(model.name, true)" @onDeselect="handleFilterChange(model.name, false)">{{ model.name }}</Chip>
      </div>
    </div>
    <div class="separator flex justify-center items-center w-px h-7 text-resla-ebony-80"></div>
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(range, index) in saleFilterRangeList" :key="index">
        <Chip :value="range.value" class="w-max" @onSelect="handleFilterChange(range.name, true)" @onDeselect="handleFilterChange(range.name, false)">{{ range.name }}</Chip>
      </div>
    </div>
    <div class="separator flex justify-center items-center w-px h-7 text-resla-ebony-80"></div>
    <div class="items-center gap-2 hidden md:flex">
      <div v-for="(color, index) in saleFilterColorList" :key="index">
        <ColorChip :color="color.value" class="w-max" @onSelect="handleFilterChange(color.name, true)" @onDeselect="handleFilterChange(color.name, false)"></ColorChip>
      </div>
    </div>
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
        { name: "Model X", value: 'model_x' },
        { name: "Model Y", value: 'model_y' },
        { name: "Model S", value: 'model_s' },
        { name: "Model 3", value: 'model_3' },
      ],

      saleFilterRangeList: [
        { name: "Long Range", value: 'long_range' },
      ],

      saleFilterColorList: [
        { name: "Red", value: 'red' },
        { name: "Blue", value: 'blue' },
        { name: "Black", value: 'black' },
        { name: "White", value: 'pearl' },
        { name: "Grey", value: 'silver' },
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