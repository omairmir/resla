<template>
    <div class="border-x border-primary-700 flex flex-col w-full p-10 justify-center items-center">
      <div class="flex flex-col gap-20 w-[1278px]">
        <div class="resources-wrapper flex flex-col gap-8">
          <div class="resource-filter flex justify-between items-center">
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
    </div>
  </template>
  
  
  <script>
  import FilterComponent from "@/components/resources/ResourcesFilter";
  import VideoTutorials from "@/components/resources/VideoTutorials";
  
  export default {
    name: "TutorialsView",
    components: {
      FilterComponent,
      VideoTutorials
    },
  }
  </script>
  
  <style scoped>
  
  </style>