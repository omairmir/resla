<template>
    <div class="border-x border-primary-700 flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
        <div class="flex flex-col gap-8 w-full">
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
            <div class="text-heading font-medium tracking-negative-3 text-left">
              Video Tutorials
            </div>
            <ResourcesFilter @onChange="(filter) => selectedFilter = filter" />
          </div>
          <div class="col-md-10 offset-md-1 mt-3 mb-5">
            <VideoTutorials :selectedFilter="selectedFilter"/>
          </div>
        </div>
  <div class="border-x border-primary-700">
    <div class="flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            Video Tutorials
          </div>
          <FilterComponent />
        </div>
        <div class="col-md-10 offset-md-1 mt-3 mb-5">
          <VideoTutorials />
        </div>
      </div>
    </div>
    <LegalPageCta heading="Still have" sub-heading="questions?" btn-label="Contact Us" to="/contact"></LegalPageCta>
  </div>
  </template>
  
  
  <script>
  import ResourcesFilter from "@/components/resources/ResourcesFilter";
  import VideoTutorials from "@/components/resources/VideoTutorials";
  import LegalPageCta from "@/components/LegalPageCta";

  export default {
    name: "TutorialsView",
    components: {
      ResourcesFilter,
      VideoTutorials
      FilterComponent,
      VideoTutorials,
      LegalPageCta
    },
    data: function() {
        return {
          selectedFilter: []
        }
      },
  }
  </script>
  
  <style scoped>
  
  </style>