<template>
  <div class="border-x border-primary-700">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-y-6">
      <LoadingAnimation v-if="loading" :full-screen="false" type="spin" class="flex items-center justify-center w-full min-h-96">
      </LoadingAnimation>
      <template v-if="data">
        <div class="flex flex-col gap-4 md:gap-3">
          <CtaButton to="/careers" variant="tertiary" leading-icon class="w-max">
            Careers
          </CtaButton>
          <!-- Job Title -->
          <h1 class="font-medium text-heading-1 leading-10 tracking-negative-3 text-resla-ebony-1000">{{ data.title }}
          </h1>
          <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <!-- Location -->
            <div class="flex gap-2">
              <LocationIcon class="size-5"></LocationIcon>
              <span class="block">{{ data.location.name }}.</span>
            </div>

            <!-- Employment Type -->
            <div class="flex gap-2">
              <TimeIcon class="size-5"></TimeIcon>
              <span class="block">Full Time</span>
            </div>

            <!-- Department -->
            <div class="flex gap-2">
              <UserIcon class="size-5"></UserIcon>
              <span class="block">{{ data.departments[0].name }}</span>
            </div>
          </div>
        </div>

        <CtaButton :to="`${$route.path}/apply`" size="small" class="w-full md:w-max">
          Apply now
        </CtaButton>

        <div class="bg-primary-700 w-full h-px"></div>

        <p v-html="decodeHtmlEntities(data.content)"
          class="font-urbanist font-normal text-primary-300 leading-6.5 text-base job-detail-html"></p>

        <p class="font-urbanist text-sm leading-5 text-primary-300">
          Updated
          {{
          data.updated_at ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
          }).format(new Date(data.updated_at)) : 'Loading...'
          }}
        </p>
      </template>
    </div>
    <!--cta section-->
    <LegalPageCta></LegalPageCta>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import UserIcon from "@/components/icons/UserIcon.vue";
import LocationIcon from "@/components/icons/PinIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import LegalPageCta from "@/components/LegalPageCta.vue";
import LoadingAnimation from "@/components/base/LoadingAnimation.vue";
import CtaButton from "@/components/base/CtaButton.vue";

export default {
  components: {
    LocationIcon,
    UserIcon,
    TimeIcon,
    LegalPageCta,
    LoadingAnimation,
    CtaButton
  },
  name: "JobView",
  data: function () {
    return {
      data: null,
      loading: false,
      url: "https://boards-api.greenhouse.io/v1/",
    };
  },
  mounted() {
    this.getJobDetail();
  },
  methods: {
    getJobDetail: function () {
      this.loading = true
      axios
        .get(this.url + "boards/resla/jobs/" + this.$route.params.id)
        .then((response) => {
          this.data = response.data;
          document.title = response.data.title + " | Careers | Resla";
          this.loading = false
        })
        .catch((error) => {
          console.log(error);
          this.loading = false
          if (error.response.status === 404) {
            this.$router.push({ name: "404" });
          }
        });
    },
    decodeHtmlEntities: function (encodedString) {
      // First, replace encoded ampersand entities to actual ampersands
      const partiallyDecoded = encodedString.replace(/&amp;/g, "&");

// Then, replace the rest of the HTML entities with their respective characters
      return partiallyDecoded
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    },
  },
};
</script>
<style lang="css" scoped>
.job-detail-html{

   p{
    font-family: "Urbanist";
    font-size: 1rem;
    line-height: 1.5rem;
    color: #2b2825;
    margin-top: 10px;
    margin-bottom: 8px;
   }

   ul {
    font-family: "Urbanist";
    padding-left: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    list-style-type: decimal;
    list-style-position: inside;
    color: #2b2825;
  }
  
  ul > li {
    margin-top: 10px;
    margin-bottom: 8px;
  }

  p > strong{
    font-family: "Urbanist";
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #2b2825;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ul > li > strong{
    font-family: "Urbanist";
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #2b2825;
  }
}
</style>