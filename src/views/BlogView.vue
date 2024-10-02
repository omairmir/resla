<template>
    <div class="border-x border-primary-700 flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
        <div class="flex flex-col gap-8 w-full">
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
            <div class="text-heading font-medium tracking-negative-3 text-left">
              Blog Posts
            </div>
            <ResourcesFilter @onChange="(filter) => selectedFilter = filter" />
          </div>
          <div class="">
            <BlogPost :selectedFilter="selectedFilter"/>
          </div>
        </div>
  <div class="border-x border-primary-700">
    <div class="flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            Blog Posts
          </div>
          <FilterComponent />
        </div>
        <div class="">
          <BlogPost />
        </div>
      </div>
    </div>
    <LegalPageCta heading="Still have" sub-heading="questions?" btn-label="Contact Us" to="/contact"></LegalPageCta>
  </div>
    </template>
    
    <script>
    import ResourcesFilter from "@/components/resources/ResourcesFilter";
    import BlogPost from "@/components/resources/BlogPost";
    import LegalPageCta from "@/components/LegalPageCta";

    export default {
      name: "BlogView",
      data: function() {
        return {
          selectedFilter: []
        }
      },
      components: {
        ResourcesFilter,
        BlogPost
        FilterComponent,
        BlogPost,
        LegalPageCta
      },
    };
    </script>
    