<template>
  <div class="border-x border-primary-700">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-y-6">

      <div class="flex flex-col gap-4 md:gap-3">
        <router-link to="/careers" tag="button" class="flex items-center w-max space-x-2">
          <RightArrow class="size-5 rotate-180"></RightArrow>
          <span class="block mt-0.5 font-semibold text-base leading-7 text-primary-400">Careers</span>
        </router-link>
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

      <router-link :to="`${$route.path}/apply`" tag="button"
        class="bg-primary-100 text-primary-1000 font-semibold text-base rounded-lg px-5 py-2.5 w-full md:w-max">
        Apply now
      </router-link>

      <div class="bg-primary-700 w-full h-px"></div>

      <p v-html="decodeHtmlEntities(data.content)"
        class="font-urbanist font-normal text-primary-300 leading-6.5 text-base"></p>

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
import RightArrow from "@/components/icons/RightArrow.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import LegalPageCta from "@/components/LegalPageCta.vue";

export default {
  components: {
    RightArrow,
    LocationIcon,
    UserIcon,
    TimeIcon,
    LegalPageCta
  },
  name: "JobView",
  data: function () {
    return {
      data: {
        content: "",
      },
      loading: true,
      url: "https://boards-api.greenhouse.io/v1/",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function () {
      axios
        .get(this.url + "boards/resla/jobs/" + this.$route.params.id)
        .then((response) => {
          this.data = response.data;
          document.title = response.data.title + " | Careers | Resla";
        })
        .catch((error) => {
          console.log(error);

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
