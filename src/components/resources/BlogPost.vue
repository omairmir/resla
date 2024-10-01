<template>
    <div class="flex flex-row gap-6 flex-wrap justify-between">
      <div class="flex flex-wrap" v-for="(blog, index) in displayedBlogs" :key="index">
        <BlogCard :title="blog.title" :imageUrl="blog.featured_image" :tags="blog.tags" :date="blog.published"/>
      </div>
    </div>
  </template>
  
  <script>
  import BlogCard from "@/components/base/BlogCard";
  import Butter from "buttercms";
  
  export default {
    name: "BlogPost",
    components:{
      BlogCard
    },
    props:{
      limited: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        blogPostList:[]
      }
    },
    mounted: function(){
      this.getArticles()
    },
    computed:{
      displayedBlogs() {
        return this.limited ? this.blogPostList.slice(0, 9) : this.blogPostList;
      }
    },
    methods:{
      getArticles: function(){
        const butter = Butter('1c7753d56039b8a301e84d0bd5283672aa83b1d5');
        butter.post.list()
            .then((response) => {
              this.blogPostList = response.data.data;
            })
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>