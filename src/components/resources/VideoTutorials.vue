<template>
  <div>
    <div v-if="filteredVideos.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-6">
      <TutorialCard v-for="(blog, index) in filteredVideos" :key="index" :title="blog.title" :videoUrl="blog.src"
        :tags="blog.tags" :thumbnail="blog.imgURL" />
    </div>
    <div v-else class="flex items-center justify-center h-[400px]">
      No Video Tutorial Found
    </div>
  </div>
</template>

<script>
import TutorialCard from "@/components/base/TutorialCard";
export default {
  name: "VideoTutorials",
  components: {
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
          tags: [{ name: "Driving", value: "driving" },
          { name: "Digital Key", value: "digital_key" },]
        },
        {
          src: "https://www.youtube.com/embed/xs_tASAfF6Y?si=TClY7VyaExpd6jEc",
          imgURL: 'door_lock',
          title: "How do I use doors and locks on a Tesla?",
          tags: [{ name: "Rental Process", value: "rental_process" },
          { name: "Insurance", value: "insurance" }]
        },
        {
          src: "https://www.youtube.com/embed/UHjk0ZX3D7s?si=-vVJSX4s32eGTGqe",
          imgURL: 'shift_tesla',
          title: "How do I shift gears in a tesla?",
          tags: [{ name: "Digital Key", value: "digital_key" },
          { name: "Rental Process", value: "rental_process" },]
        },
        {
          src: "https://www.youtube.com/embed/SvBNgC8nN_M?si=UexCWTfbr-WWY8SY",
          imgURL: 'pair_phone',
          title: "How do I pair my phone with a Tesla?",
          tags: [{ name: "Driving", value: "driving" },
          { name: "Charging", value: "charging" },
          { name: "Rental Process", value: "rental_process" }]
        },
        {
          src: "https://www.youtube.com/embed/fi3Z3pTdZ0M?si=o5fXwDmvCcRyNy57",
          imgURL: 'superchargers',
          title: "How do I find superchargers?",
          tags: [{ name: "Driving", value: "driving" },
          { name: "Charging", value: "charging" },]
        },
        {
          src: "https://www.youtube.com/embed/AR2yzwxFNgo?si=dMEPNq7xYeVPBlpP",
          imgURL: 'charge_tesla',
          title: "How do I charge a Tesla?",
          tags: [{ name: "Rental Process", value: "rental_process" },
          { name: "Insurance", value: "insurance" }]
        }
      ]
    }
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
  computed: {
    filteredVideos() {
      let filteredVideos = this.selectedFilter.length === 0
        ? this.videosList
        : this.videosList.filter(video =>
          this.selectedFilter.some(selected =>
            video.tags.some(tag => tag.value === selected)
          )
        );

      if (this.limited) {
        return filteredVideos.slice(0, 9);
      }
      return filteredVideos;
    }
  }
}
</script>

<style scoped></style>