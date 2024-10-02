<template>
    <div class="video-card-wrapper flex flex-col gap-6 w-full">
      <div class="iframe-container flex flex-col rounded-xl h-[280px] md:h-[400px] relative">
        <img
            :src="getThumbnailSrc"
            alt="Video Thumbnail"
            class="w-full h-full rounded-xl object-cover"
            v-if="!isVideoLoaded"
        />
        <div v-if="!isVideoLoaded" class="absolute inset-0 flex justify-center items-center">
          <CtaButton @click="loadVideo" :variant="'primary'" :size="'large'" class="py-4 px-6 rounded-lg gap-2.5 w-[72px] text-resla-ebony-10">
            <svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0.5 11.7831V6.21709C0.5 3.02599 0.5 1.43044 1.53046 0.859305C2.56093 0.288173 3.91395 1.13381 6.62 2.82509L11.0728 5.6081C13.5085 7.13043 14.7264 7.8916 14.7264 9.00009C14.7264 10.1086 13.5085 10.8698 11.0728 12.3921L6.62 15.1751C3.91395 16.8664 2.56093 17.712 1.53046 17.1409C0.5 16.5698 0.5 14.9742 0.5 11.7831Z"
                  fill="#F5F5F7"/>
            </svg>
          </CtaButton>
        </div>
        <!-- load video on play button click -->
        <iframe
            v-if="isVideoLoaded"
            :src="videoUrlWithAutoplay"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="rounded-xl w-full h-full"
            frameborder="0"
        ></iframe>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-2">
          <Badge v-for="(tag, index) in tags" :key="index">{{ tag.name }}</Badge>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-2xl font-medium leading-9 tracking-tight text-left">{{ title }}</div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Badge from "@/components/base/Badge";
  import CtaButton from "@/components/base/CtaButton";
  export default {
    name: "TutorialCard",
    components: {
      Badge,
      CtaButton
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      videoUrl: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default: () => []
      },
      thumbnail: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isVideoLoaded: false
      };
    },
    computed: {
      getThumbnailSrc() {
        return require(`@/assets/img/resources/${this.thumbnail}.png`);
      },
      videoUrlWithAutoplay() {
        return this.isVideoLoaded ? `${this.videoUrl}?rel=0&amp;autoplay=1` : this.videoUrl;
      }
    },
    methods: {
      loadVideo() {
        this.isVideoLoaded = true;
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>