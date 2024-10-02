<template>
  <div class="border-x border-primary-700">
    <div class="flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">

      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            FAQs
          </div>
          <ResourcesFilter @onChange="(filter) => selectedFilter = filter" />
        </div>
        <div class="col-md-10 offset-md-1 mt-3 mb-5">
          <FaqsList :selectedFilter="selectedFilter"/>
        </div>
      </div>

    </div>
    <LegalPageCta heading="Still have" sub-heading="questions?" btn-label="Contact Us" to="/contact"></LegalPageCta>
  </div>
</template>

<script>
// @ is an alias to /src
import ResourcesFilter from "@/components/resources/ResourcesFilter";
import FaqsList from "@/components/resources/FaqsList";
import LegalPageCta from "@/components/LegalPageCta";

export default {
  name: "FaqsView",
  components: {
    ResourcesFilter,
    FaqsList
    FilterComponent,
    FaqsList,
    LegalPageCta
  },
  data: function() {
        return {
          selectedFilter: []
        }
      },
};
</script>