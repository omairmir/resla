<template>
  <div>
    <div class="px-6 lg:px-10 mx-auto">
      <HeroSection></HeroSection>
      <IntroVideo></IntroVideo>
    </div>
    <LocationsSearch></LocationsSearch>
    <div class="px-6 lg:px-10 mx-auto">
      <div class="lg:!border border-resla-ebony-70 lg:px-10">
        <ModelsSection></ModelsSection>
        <RentingSteps></RentingSteps>
        <WhyResla></WhyResla>
        <ResourcesSection></ResourcesSection>
      </div>
      <CtaSection></CtaSection>
      

    </div>
    <!-- <MainSection></MainSection>
    <HowItWorksSection></HowItWorksSection>
    <CompetitionSection></CompetitionSection>
    <FeatureSection></FeatureSection>
    <FaqsSection></FaqsSection>
    <ReviewSection></ReviewSection> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import IntroVideo from "@/components/home/IntroVideo.vue";
import LocationsSearch from "@/components/home/LocationsSearch.vue";
import ModelsSection from "@/components/home/ModelsSection.vue";
import RentingSteps from "@/components/home/RentingSteps.vue";
import WhyResla from "@/components/home/WhyResla.vue";
import ResourcesSection from "@/components/home/ResourcesSection.vue";
import CtaSection from "@/components/home/CtaSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    IntroVideo,
    LocationsSearch,
    ModelsSection,
    RentingSteps,
    WhyResla,
    ResourcesSection,
    CtaSection,
  },
};
</script>
