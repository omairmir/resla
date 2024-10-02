<template>
  <div class="border-x border-primary-700">
    <div class="flex flex-col w-full p-6 lg:p-10 justify-center max-w-content items-center mx-auto gap-20">
        <div class="header-detail flex flex-col gap-6 w-full">
          <div class="post-title flex flex-col gap-3 justify-start">
            <div class="flex">
              <CtaButton :variant="'tertiary'" :leadingIcon="true" :to="'/resources'">Resources</CtaButton>
            </div>
            <div class="flex">
              <span class="font-medium text-heading-1 negative-3 text-resla-ebony-10 tracking-[-1px]">{{
                  article.title
                }}</span>
            </div>
            <div class="flex flex-row gap-4">
              <div class="flex items-center gap-1">
                <LocationIcon class="size-5"></LocationIcon>
                <p class="font-urbanist text-base text-primary-100 leading-6.5">St. Louis, MO</p>
              </div>
              <div class="flex items-center gap-1">
                <CalenderIcon class="size-5"></CalenderIcon>
                <p class="font-urbanist text-base text-primary-100 leading-6.5">
                  {{ new Date(article.published).toDateString() }}</p>
              </div>
            </div>
          </div>
            <div class="flex gap-2">
              <Badge v-for="(tag, index) in article.tags" :key="index">{{ tag.name }}</Badge>
            </div>
            <img :src="article.featured_image" class="h-[340px] rounded-xl w-full"/>
        </div>
        <div v-html="article.body" id="content-detail-html"/>
    </div>
    <LegalPageCta heading="Ready to get" sub-heading="on the road?"></LegalPageCta>
  </div>
    
  </template>
  
  <script>
  import Butter from "buttercms";

  import CtaButton from "@/components/base/CtaButton";
  import LocationIcon from '@/components/icons/PinIcon.vue';
  import CalenderIcon from '@/components/icons/CalendarIcon';
  import Badge from "@/components/base/Badge.vue";
  import LegalPageCta from "@/components/LegalPageCta.vue";
  
  export default {
    name: "BlogPostDetail",
    components: {
      CtaButton,
      CalenderIcon,
      LocationIcon,
      Badge,
      LegalPageCta
    },
    data() {
      return {
        article: {}
      }
    },
    mounted: function () {
      this.getArticle()
    },
    computed: {
      outputHtml() {
        return this.article.body;
      },
    },
    methods: {
      getArticle: function () {
        const butter = Butter('1c7753d56039b8a301e84d0bd5283672aa83b1d5');
        butter.post.retrieve(this.$route.params.slug)
            .then((response) => {
              this.article = response.data.data;
              document.title = this.article.seo_title + " | Resla"
              console.log(response)
            })
      },
      calculateReadingTime: function (text) {
        const wpm = 225;
        const words = text.toString().trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time
      }
    }
  }
  </script>
  
  <style lang="scss">
  #content-detail-html {
    p {
      @apply font-urbanist font-normal text-base leading-[25.6px] text-left mb-4;
    }
  
    p:not(:has(ul)):not(:has(ol)) > strong {
      @apply font-medium text-2xl leading-[38.4px] tracking-[-0.02em];
    }
  
    h4 {
      @apply font-medium text-2xl leading-[38.4px] tracking-[-0.02em] mb-2 mt-6;
    }
  
    ul {
      @apply list-disc list-inside pl-2 font-urbanist font-normal text-base leading-[25.6px] text-primary-300;
    }
  
    ol {
      @apply list-decimal list-inside pl-2 font-urbanist font-normal text-base leading-[25.6px] text-primary-300;
    }
  
    li {
      @apply mb-2;
    }
  }
  
  </style>