<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
      <router-link
          v-for="(blog, index) in filteredBlogs" :key="index"
          :to="`/blog/${blog.slug}`"
      >
        <BlogCard :title="blog.title" :imageUrl="blog.featured_image" :tags="blog.tags" :date="blog.published"/>
      </router-link>
  </div>
</template>

<script>
import BlogCard from "@/components/base/BlogCard";
import Butter from "buttercms";

export default {
  name: "BlogPost",
  components: {
    BlogCard
  },
  props: {
    limited: {
      type: Boolean,
      default: false
    },
    selectedFilter: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      blogPostList: []
    }
  },
  mounted: function () {
    this.getArticles()
  },
  computed: {
    filteredBlogs() {
      let filteredBlogs = this.selectedFilter.length === 0
          ? this.blogPostList
          : this.blogPostList.filter(blog =>
              this.selectedFilter.some(selected =>
                  blog.tags.some(tag => tag.name === selected)
              )
          );

      if (this.limited) {
        return filteredBlogs.slice(0, 9);
      }
      return filteredBlogs;
    }
  },
  methods: {
    getArticles() {
      const butter = Butter('1c7753d56039b8a301e84d0bd5283672aa83b1d5');
      const filters = [
        {name: "Driving", slug: "driving"},
        {name: "Charging", slug: "charging"},
        {name: "Digital Key", slug: "digital_key"},
        {name: "Rental Process", slug: "rental_process"},
        {name: "Insurance", slug: "insurance"}
      ];

      butter.post.list()
          .then((response) => {
            this.blogPostList = response.data.data.map(post => {
              const randomTags = this.getRandomTags(filters);

              return {
                ...post,
                tags: [...post.tags, ...randomTags]
              };
            });
          });
    },
    // remove this if post gets appropriate tags from butter
    getRandomTags(filters) {
      const numberOfTags = Math.floor(Math.random() * 3) + 1;
      const shuffledFilters = filters.sort(() => 0.5 - Math.random());
      return shuffledFilters.slice(0, numberOfTags);
    }
  }
}
</script>

<style scoped>

</style>