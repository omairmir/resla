<template>
  <div class="min-h-screen">
    <!--nav-->
    <div
      class="relative flex justify-between min-h-[69px] px-10 py-3 gap-x-4 bg-primary-1000 border-b border-primary-700">
      <div class="flex items-center w-full gap-5">
        <router-link to="/" tag="a" class="w-28 h-4">
          <img src="@/assets/resla-logo-black-rgb.svg" alt="resla logo black" />
        </router-link>
        <div class="hidden md:block w-px h-full bg-primary-800"></div>
        <p class="hidden md:block font-medium text-2xl leading-[38.4px] text-primary-100">
          Apply
        </p>
      </div>
      <div class="flex w-full justify-end">
        <div class="flex flex-col gap-2 w-max md:max-w-full max-w-56">
          <p class="font-medium text-base leading-6.5 text-primary-300 truncate">
            {{ jobTitle ? jobTitle : "" }}
          </p>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
              <LocationIcon class="size-4"></LocationIcon>
              <p class="font-urbanist text-xs text-primary-100">
                {{ location ? location : "" }}
              </p>
            </div>
            <div class="flex items-center gap-1">
              <TimeIcon class="size-4"></TimeIcon>
              <p class="font-urbanist text-xs text-primary-100">Full Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-x border-primary-700">
      <div class="py-32 lg:px-0 px-6 max-w-[30rem] w-full mx-auto flex flex-col items-start md:items-center gap-10">
        <div class="flex items-center justify-center size-12 rounded-full bg-[#38BA84]">
          <CheckIcon class="size-6"></CheckIcon>
        </div>
        <div class="flex flex-col gap-2 text-left md:text-center">
          <h2 class="font-medium text-primary-100 tracking-negative-3 text-heading-1 leading-10">
            We’ve got your application!
          </h2>
          <p class="text-primary-500 text-xl leading-8">
            We’ll review your application and send you an email with our
            response. Thanks for applying!
          </p>
        </div>

        <CtaButton to="/">
          Home
        </CtaButton>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CtaButton from "@/components/base/CtaButton.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import LocationIcon from "@/components/icons/PinIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
export default {
  name: "JobApplicationConfirmedView",
  components: {
    CheckIcon,
    LocationIcon,
    TimeIcon,
    CtaButton
  },
  data() {
    return {
      jobTitle: "",
      location: "",
    };
  },
  mounted() {
    this.jobTitle = this.$route.query.jobTitle;
    this.location = this.$route.query.location;
  },
  beforeDestroy() {
    // clear access when navigating away
    localStorage.removeItem("accessJobConfirmed");
  },
};
</script>