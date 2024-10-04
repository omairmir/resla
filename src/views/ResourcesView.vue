<template>
  <div class="border-x border-primary-700 relative">
    <!--header-->
    <div v-if="isScrolledPast"
      class="sticky top-[127px] lg:top-[69px] overflow-hidden flex flex-col lg:flex-row w-full gap-4 lg:gap-0 py-3 px-10 lg:items-center justify-between bg-primary-1000 z-10 border-b border-primary-700 ">
      <div class="text-2xl leading-6 font-medium tracking-negative-5 text-resla-ebony-1000 hidden md:flex">
        Resources
      </div>
      <ResourcesFilter :selected="selectedFilter" @onChange="(filter) => selectedFilter = filter" />
    </div>
    <!--content-->
    <div class="flex flex-col gap-20 p-6 lg:p-10 w-full  justify-center items-center">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <div class="text-heading font-medium tracking-negative-3 text-left">
            Resources
          </div>
          <ResourcesFilter :selected="selectedFilter" @onChange="(filter) => selectedFilter = filter" />
        </div>
        <!--featured post-->
        <router-link v-if="featurePost && (featurePost.title || featurePost.slug)" :to="`/blog/${featurePost.slug}`">
          <div
            class="flex flex-col p-8 lg:p-14 justify-between featured-post bg-local bg-no-repeat h-[400px] bg-cover rounded-xl"
            :style="{
              backgroundImage: `linear-gradient(270deg, rgba(17, 15, 12, 0) 0%, rgba(17, 15, 12, 0.4) 69.8%), url(${featurePost.featured_image})`
            }">
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
                  {{ featurePost.title }}
                </div>
                <div class="font-urbanist font-normal text-base leading-6 text-resla-ebony-90">{{ new
                  Date(featurePost.published).toDateString() }}</div>
              </div>
            </div>
          </div>
        </router-link>
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
import Butter from "buttercms";

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
      isScrolledPast: false,
      featurePost: null,
    }
  },
  methods: {
    handleScroll() {
      this.isScrolledPast = window.scrollY > 100;
    },
    getFeatureArticle() {
      const butter = Butter("1c7753d56039b8a301e84d0bd5283672aa83b1d5");
      butter.post.list()
        .then((response) => {


          // Sort posts by published date
          this.featurePost = response.data.data
            .sort((a, b) => new Date(b.published) - new Date(a.published))[0];
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getFeatureArticle();

  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>