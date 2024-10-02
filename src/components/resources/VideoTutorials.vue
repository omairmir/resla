<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-6">
        <TutorialCard v-for="(blog, index) in filteredVideos" :key="index" :title="blog.title" :videoUrl="blog.src" :tags="blog.tags" :thumbnail="blog.imgURL"/>
    </div>
  </template>
  
  <script>
  import TutorialCard from "@/components/base/TutorialCard";
  export default {
    name: "VideoTutorials",
    components:{
      TutorialCard
    },
    data() {
      return {
        // pre seelcted videos can be turned into feed
        videosList: [
        {
          src: "https://www.youtube.com/embed/bHQOa_epWSw?si=6vLhVzY1R6Zcxp2b",
          imgURL: 'resla_digital',
          title: "How to use Resla’s Digital Key",
          tags:[{name: 'Driving'}, {name: 'Digital Key'}]
        },
        {
          src: "https://www.youtube.com/embed/xs_tASAfF6Y?si=TClY7VyaExpd6jEc",
          imgURL: 'door_lock',
          title: "How do I use doors and locks on a Tesla?",
          tags:[{name: 'Insurance'}, {name: 'Rental Process'}]
        },
        {
          src: "https://www.youtube.com/embed/UHjk0ZX3D7s?si=-vVJSX4s32eGTGqe",
          imgURL: 'shift_tesla',
          title: "How do I shift gears in a tesla?",
          tags:[{name: 'Rental Process'}, {name: 'Digital Key'}]
        },
        {
          src: "https://www.youtube.com/embed/SvBNgC8nN_M?si=UexCWTfbr-WWY8SY",
          imgURL: 'pair_phone',
          title: "How do I pair my phone with a Tesla?",
          tags:[{name: 'Driving'}, {name: 'Charging'}, {name: 'Rental Process'}]
        },
        {
          src: "https://www.youtube.com/embed/fi3Z3pTdZ0M?si=o5fXwDmvCcRyNy57",
          imgURL: 'superchargers',
          title: "How do I find superchargers?",
          tags:[{name: 'Driving'}, {name: 'Charging'}]
        },
        {
          src: "https://www.youtube.com/embed/AR2yzwxFNgo?si=dMEPNq7xYeVPBlpP",
          imgURL: 'charge_tesla',
          title: "How do I charge a Tesla?",
          tags:[{name: 'Rental Process'}, {name: 'Insurance'}]
        }
      ]
      }
    },
    props:{
      limited: {
        type: Boolean,
        default: false
      },
      selectedFilter: {
      type: Array,
      default: () => []
    }
    },
    computed: {
      filteredVideos() {
        let filteredBlogs = this.selectedFilter.length === 0
          ? this.iframeList
          : this.iframeList.filter(blog =>
              this.selectedFilter.some(selected =>
                  blog.tags.some(tag => tag.name === selected)
              )
          );

      if (this.limited) {
        return filteredBlogs.slice(0, 9);
      }
      return filteredBlogs;
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>