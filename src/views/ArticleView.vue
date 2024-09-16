<template>
    <div class="container mt-5">
        <div class="row g-0 pt-3 pb-3 d-flex ">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <!-- Header -->
                <h1 class="display-5 mb-3 text-center">
                <span class="highlighted">{{ article.title }}</span>
                </h1>
                <!-- Tag and Published -->
                <div class="text-center mb-4"><span class="badge badge-primary">{{ article.tags[0].name }}</span> | {{ new Date(article.published).toDateString() }}</div>
                <!-- Summary -->
                <p class="text-center">{{ article.summary }}</p>
                <!-- Image -->
                <img :src="article.featured_image" class="rounded w-100 mb-3"/>
                <!-- Content -->
                <div class="mt-3 mb-5" v-html="article.body">
                </div>
                <!-- Author and Meta -->
                <div class="row g-0 d-flex mb-3">
                    <div class="col-auto my-auto">
                        <img class="rounded-circle" style="height:5vh;width:5vh" :src="article.author.profile_image"/>
                    </div>
                    <div class="col-auto ms-2">
                        <p class="my-auto">
                            {{ article.author.first_name }}  {{ article.author.last_name }}<br/>
                            {{ article.author.title }} at Resla
                        </p>
                    </div>
                    <div class="col-auto d-block ms-auto my-auto">
                        <router-link tag="a" class="btn btn-primary" target="_blank" to="/contact">Contact Us</router-link>
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
    name: "ArticleView",
    data: function() {
      return {
        article: {}
      }
    },
    components: {
      //HelloWorld,
    },
    mounted: function(){
        this.getArticle()
    },
    methods:{
        getArticle: function(){
            const butter = Butter('1c7753d56039b8a301e84d0bd5283672aa83b1d5');
            butter.post.retrieve(this.$route.params.slug)
            .then((response) => {
                // console.log(res.data.data) // Check the results in the console
                this.article = response.data.data;
                document.title = this.article.seo_title + " | Resla"
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
  <style scoped>
    img{
        border-radius: var(--bs-border-radius) !important;
    }
  </style>
  