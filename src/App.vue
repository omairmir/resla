<template>
  <div id="app" class="bg-primary-1000">
    <!--remove max width to make it fluid otherwise it will add blank spaces on both side-->
    <div class="w-full max-w-desktop mx-auto bg-primary-1000">
      <LoadingAnimation v-if="$store.state.loading" type="spin"></LoadingAnimation>
      <component :is="currentNav"></component>
      <router-view />
      <component :is="currentFooter"></component>
      <!-- AudioGo Pixel -->
      <!-- <img
        src="https://us-21676-adswizz.attribution.adswizz.com/fire?pixelId=5ddff0b0-98d9-4944-a416-25cc87ae3706&type=sitevisit&subtype=HomePage&aw_0_req.gdpr=true&redirectURL=aHR0cHM6Ly9waXhlbC50YXBhZC5jb20vaWRzeW5jL2V4L3JlY2VpdmU_cGFydG5lcl9pZD0yOTk0JjwjaWYgcmVxdWVzdC5saXN0ZW5lcklkP21hdGNoZXMoJ1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfScpPnBhcnRuZXJfdHlwZWRfZGlkPSU3QiUyMkhBUkRXQVJFX0FORFJPSURfQURfSUQlMjIlM0ElMjIke3JlcXVlc3QubGlzdGVuZXJJZH0lMjIlN0Q8I2Vsc2VpZiByZXF1ZXN0Lmxpc3RlbmVySWQ_bWF0Y2hlcygnWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9Jyk-cGFydG5lcl90eXBlZF9kaWQ9JTdCJTIySEFSRFdBUkVfSURGQSUyMiUzQSUyMiR7cmVxdWVzdC5saXN0ZW5lcklkfSUyMiU3RDwjZWxzZT5wYXJ0bmVyX2RldmljZV9pZD0ke3JlcXVlc3QubGlzdGVuZXJJZCF9PC8jaWY-"
        height="0" width="0" style="display: none; visibility: hidden" />
      <img
        src="https://us-21676-adswizz.attribution.adswizz.com/fire?pixelId=7500c795-18cb-4562-a8a0-612b4e1fd7e6&type=sitevisit&subtype=HomePage&aw_0_req.gdpr=true&redirectURL=aHR0cHM6Ly9waXhlbC50YXBhZC5jb20vaWRzeW5jL2V4L3JlY2VpdmU_cGFydG5lcl9pZD0yOTk0JjwjaWYgcmVxdWVzdC5saXN0ZW5lcklkP21hdGNoZXMoJ1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfScpPnBhcnRuZXJfdHlwZWRfZGlkPSU3QiUyMkhBUkRXQVJFX0FORFJPSURfQURfSUQlMjIlM0ElMjIke3JlcXVlc3QubGlzdGVuZXJJZH0lMjIlN0Q8I2Vsc2VpZiByZXF1ZXN0Lmxpc3RlbmVySWQ_bWF0Y2hlcygnWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9Jyk-cGFydG5lcl90eXBlZF9kaWQ9JTdCJTIySEFSRFdBUkVfSURGQSUyMiUzQSUyMiR7cmVxdWVzdC5saXN0ZW5lcklkfSUyMiU3RDwjZWxzZT5wYXJ0bmVyX2RldmljZV9pZD0ke3JlcXVlc3QubGlzdGVuZXJJZCF9PC8jaWY-"
        height="0" width="0" style="display: none; visibility: hidden" /> -->
    </div>
  </div>
</template>

<script>
import { initFlowbite } from "flowbite";
import NavSection from "./components/NavSection.vue";
import FooterSection from "./components/FooterSection.vue";
import LoadingAnimation from "@/components/base/LoadingAnimation.vue";

export default {
  name: "App",
  components: {
    NavSection,
    FooterSection,
    LoadingAnimation
  },
  computed: {
    currentNav() {
      return this.isCareerPage() ? null : NavSection;
    },

    currentFooter() {
      return this.isCareerPage() ? null : FooterSection;
    }
  },
  methods: {
    isCareerPage() {
      const { path } = this.$route;
      return path.startsWith('/careers/') && (path.endsWith('/apply') || path.endsWith('/confirmed'));
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
