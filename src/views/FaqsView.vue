<template>
  <div class="border-x border-primary-700 flex flex-col w-full p-10 justify-center items-center">
    <div class="flex flex-col gap-20 w-[1278px]">
      <div class="resources-wrapper flex flex-col gap-8">
        <div class="resource-filter flex justify-between items-center">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            FAQs
          </div>
          <FilterComponent />
        </div>
        <div class="col-md-10 offset-md-1 mt-3 mb-5">
          <FaqsList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterComponent from "@/components/resources/ResourcesFilter";
import FaqsList from "@/components/resources/FaqsList";

export default {
  name: "FaqsView",
  components: {
    FilterComponent,
    FaqsList
  },
};
</script>