<template>
    <div class="blog">    
        <div class="container mt-5">
                <div class="row g-0 pt-3 pb-3 d-flex " id="how-it-works">
                <div class="col-12">
                    <!-- Header -->
                    <h1 class="display-5 mb-3 text-center">
                        <span class="highlighted text-center">Latest Articles.</span>
                    </h1>
                    <!-- Articles -->
                    <div class="row g-0">
                        <!-- Article -->
                        <div class="col-lg-4 col-md-6 mt-3" v-for="page in pages" :key="'article-' + page.slug">
                            <div class="card shadow rounded-3 mx-auto" style="width: 95% !important;">
                                <div class="card-body">
                                    <img :src="page.featured_image" alt="" class="card-img-top rounded">
                                    <h3 class="card-title primary-color mt-3 font-weight-bold fw-600">{{ page.title }}</h3>
                                    <h6 class="text-muted card-text mt-1">{{ new Date(page.published).toDateString() }} | {{ calculateReadingTime(page.body) }} min<span v-if="calculateReadingTime(page.body) > 1">s</span></h6>
                                    <p class="card-text mt-3 mb-0">{{ page.summary }} </p>
                                    <p>
                                        <span v-for="tag, index of page.tags" :key="'article-' + page.slug + '-tag-' + tag.slug" class="badge badge-primary mt-3" :class="{'ms-1':index!==0}">{{ tag.name }}</span>
                                    </p>
                                    <router-link tag="a" :to="'/blog/' + page.slug" target="_blank" class="stretched-link"></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <!-- Call to Action -->
                        <router-link class="btn btn-primary text-center mt-5 mb-5" to="/contact" tag="a" target="_blank">Contact Us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from "@/components/HelloWorld.vue";
  import Butter from 'buttercms';

  export default {
    name: "BlogView",
    data: function() {
      return {
        pages: []
      }
    },
    components: {
      //HelloWorld,
    },
    mounted: function(){
        this.getArticles()
    },
    methods:{
        getArticles: function(){
            const butter = Butter('1c7753d56039b8a301e84d0bd5283672aa83b1d5');
            butter.post.list()
            .then((response) => {
                // console.log(res.data.data) // Check the results in the console
                this.pages = response.data.data;
                console.log(response)
            })
        },
        calculateReadingTime: function(text){
            const wpm = 225;
            const words = text.toString().trim().split(/\s+/).length;
            const time = Math.ceil(words / wpm);
            return time
        }
    }
  };
  </script>
  