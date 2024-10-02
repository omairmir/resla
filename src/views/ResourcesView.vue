<template>
  <div class="border-x border-primary-700 ">

    <div class="flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            Resources
          </div>
          <ResourcesFilter @onChange="handleFilterSelect" />
        </div>
        <!--get featured post from butter cms-->
        <div
          class="flex flex-col p-8 lg:p-14 justify-between featured-post bg-bg bg-local bg-no-repeat h-[400px] bg-cover rounded-xl">
          <div class="font-urbanist text-xl font-semibold leading-8 text-left text-resla-ebony-90">
            FEATURED POST
          </div>
          <div class="flex max-w-[391px]  gap-6 flex-col">
            <div class="flex gap-2">
              <Badge>Insurance</Badge>
              <Badge>Rental Process</Badge>
            </div>
            <div class="flex flex-col gap-3">
              <div class="font-medium text-heading-1 leading-10 tracking-negative-3 text-resla-ebony-100">
                Rent a Tesla with Resla: Las Vegas, NV
              </div>
              <div class="font-urbanist font-normal text-base leading-6 text-resla-ebony-90">Thu Jul 11 2024</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-10 w-full">
        <div class="flex flex-row justify-between items-center">
          <div class="font-medium text-heading-1 leading-10 tracking-negative-3 text-resla-ebony-10">Blog Posts</div>
          <CtaButton :variant="'tertiary'" :trailingIcon="true" :to="'/blog'">View All</CtaButton>
        </div>
        <BlogPost :limited="true" :selectedFilter="selectedFilter" />
      </div>

      <div class="flex flex-col gap-10 w-full">
        <div class="flex flex-row justify-between items-center">
          <div class="font-medium text-heading-1 leading-10 tracking-negative-3 text-resla-ebony-10">Tutorials</div>
          <CtaButton :variant="'tertiary'" :trailingIcon="true" :to="'/tutorials'">View All</CtaButton>
        </div>
        <VideoTutorials :limited="true" :selectedFilter="selectedFilter" />
      </div>

      <div class="flex flex-col gap-10 w-full">
        <div class="flex flex-row justify-between items-center">
          <div class="font-medium text-heading-1 leading-10 tracking-negative-3 text-resla-ebony-10">FAQs</div>
          <CtaButton :variant="'tertiary'" :trailingIcon="true" :to="'/faqs'">View All</CtaButton>
        </div>
        <FaqsList :limited="true" :selectedFilter="selectedFilter" />
      </div>

    </div>
    <LegalPageCta heading="Still have" sub-heading="questions?" btn-label="Contact Us" to="/contact"></LegalPageCta>
  </div>

</template>

<script>
import ResourcesFilter from "@/components/resources/ResourcesFilter.vue";
import Badge from "@/components/base/Badge";
import CtaButton from "@/components/base/CtaButton";
import BlogPost from "@/components/resources/BlogPost";
import VideoTutorials from "@/components/resources/VideoTutorials";
import FaqsList from "@/components/resources/FaqsList";
import LegalPageCta from "@/components/LegalPageCta.vue";
export default {
  name: "ResourcePage",
  components: {
    ResourcesFilter,
    Badge,
    CtaButton,
    BlogPost,
    VideoTutorials,
    FaqsList,
    LegalPageCta
  },
  data() {
    return {
      selectedFilter: [],
    }
  },
  methods: {
    handleFilterSelect(filter) {
      const filterIndex = this.selectedFilter.findIndex(selected => selected.toLowerCase() === filter.toLowerCase());

      if (filterIndex !== -1) {
        this.selectedFilter.splice(filterIndex, 1);
      } else {
        this.selectedFilter.push(filter);
      }
    },
  }


}
</script>

<style scoped>
.bg-bg {
  background-image: linear-gradient(270deg, rgba(17, 15, 12, 0) 0%, rgba(17, 15, 12, 0.4) 69.8%), url('../assets/img/featured-post-croped.png');
}
</style>