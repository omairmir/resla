<template>
  <div>
    <div v-if="filteredBlogs.length > 0" class="flex flex-col gap-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
        <router-link v-for="(blog, index) in filteredBlogs" :key="index" :to="`/blog/${blog.slug}`">
          <BlogCard :title="blog.title" :imageUrl="blog.featured_image" :tags="blog.tags" :date="blog.published" />
        </router-link>
      </div>
      <div v-if="!limited" class="flex flex-col gap-4">
        <div class="bg-primary-700 w-full h-px"></div>
        <div class="grid grid-cols-2 md:grid-cols-3 w-full justify-between items-center gap-4">
          <div class="flex justify-start ">
            <CtaButton v-if="previousPage" variant="secondary" leading-icon @click="getPreviousPage"
              class="w-full md:w-max">Previous
            </CtaButton>
          </div>
          <div
            class="hidden md:flex items-center justify-center mt-2.5 font-urbanist text-base leading-6.5 text-primary-400 font-normal w-full whitespace-nowrap">
            Displaying <span class="ml-1 font-semibold">{{ totalDisplayedItem }} of {{ totalItem }}</span>
          </div>
          <div class="flex justify-end ">
            <CtaButton v-if="nextPage" trailing-icon @click="getNextPage" class="w-full md:w-max">Next</CtaButton>
          </div>
        </div>
        <div
          class="flex items-center justify-center md:hidden mt-2.5 font-urbanist text-base leading-6.5 text-primary-400 font-normal w-full whitespace-nowrap">
          Displaying <span class="ml-1 font-semibold">{{ totalDisplayedItem }} of {{ totalItem }}</span>
        </div>
      </div>
    </div>

    <div v-else class="flex items-center justify-center h-[400px]">
      No Blog Post Found
    </div>
  </div>
</template>

<script>
import Butter from "buttercms";
import CtaButton from "@/components/base/CtaButton.vue";
import BlogCard from "@/components/base/BlogCard";

export default {
  name: "BlogPost",
  components: {
    BlogCard,
    CtaButton,
  },
  props: {
    limited: {
      type: Boolean,
      default: false,
    },
    selectedFilter: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      blogPostList: [],
      currentPage: 1,
      totalItem: null,
      totalDisplayedItem: 9,
      nextPage: null,
      previousPage: null,

      PAGE_SIZE: 9,
    };
  },
  mounted() {
    this.getArticles(this.currentPage);
  },
  computed: {
    filteredBlogs() {
      let filteredBlogs =
        this.selectedFilter.length === 0
          ? this.blogPostList
          : this.blogPostList.filter((blog) =>
            this.selectedFilter.some((selected) =>
              blog.tags.some((tag) => tag.value === selected)
            )
          );

      if (this.limited) {
        return filteredBlogs.slice(0, 9);
      }
      return filteredBlogs;
    },
  },
  methods: {
    getArticles(page = 1) {
      const butter = Butter("1c7753d56039b8a301e84d0bd5283672aa83b1d5");
      const filters = [
        { name: "Driving", value: "driving" },
        { name: "Charging", value: "charging" },
        { name: "Digital Key", value: "digital_key" },
        { name: "Rental Process", value: "rental_process" },
        { name: "Insurance", value: "insurance" },
      ];

      butter.post
        .list({
          // TODO: implement search by tag
          page_size: this.PAGE_SIZE,
          page: page,
        })
        .then((response) => {
          const { next_page, previous_page, count } = response.data.meta;

          this.blogPostList = response.data.data.map((post) => {
            // remove mock tags if post have appropriate tags
            const randomTags = this.getRandomTags(filters);
            return { ...post, tags: [...post.tags, ...randomTags] };
          });

          this.nextPage = next_page;
          this.previousPage = previous_page;
          this.currentPage = page;
          this.totalItem = count
          this.totalDisplayedItem = response.data.data.length
        });
    },
    getNextPage() {
      if (this.nextPage) {
        this.getArticles(this.nextPage);
      }
    },
    getPreviousPage() {
      if (this.previousPage) {
        this.getArticles(this.previousPage);
      }
    },
    // Mock function for random tags
    getRandomTags(filters) {
      const numberOfTags = Math.floor(Math.random() * 3) + 1;
      const shuffledFilters = filters.sort(() => 0.5 - Math.random());
      return shuffledFilters.slice(0, numberOfTags);
    },
  },
};
</script>
