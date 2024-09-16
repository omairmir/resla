<template>
  <div class="blog">
    <div class="container mt-5">
      <div class="row g-0 pt-3 d-flex" id="faqs">
        <div class="col-12">
          <!-- Header -->
          <h1 class="display-5 mb-3 text-center">
            <span class="highlighted text-center"
              >Frequently asked questions.</span
            >
          </h1>
          <!-- Faqs -->
          <VideosSection></VideosSection>
          <div class="col-md-10 offset-md-1 mt-3 mb-5">
            <AccordionSection></AccordionSection>
          </div>
          <!-- Call to Action -->
          <div class="d-flex justify-content-center">
            <router-link
              class="btn btn-primary text-center mb-5"
              to="/contact"
              tag="a"
              target="_blank"
              >Contact Us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AccordionSection from "@/components/faqs/AccordionSection.vue";
import VideosSection from "@/components/faqs/VideosSection.vue";

export default {
  name: "FaqsView",
  components: {
    AccordionSection,
    VideosSection,
  },
};
</script>
