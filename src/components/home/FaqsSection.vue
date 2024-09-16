<template>
  <div class="fluid-container">
    <!-- Mobile -->
    <div class="row g-0 p-3 d-sm-none">
      <div class="col-12">
        <h1 class="display-3 mt-3">
          <span class="highlighted">Got questions?</span>
        </h1>
        <h3 class="mt-3 pb-4 primary-color">We’ve got the answers</h3>
        <!-- FAQS -->
        <AccordionSection></AccordionSection>
      </div>
      <div class="row g-0 mt-5">
        <div class="col-12">
          <h3 class="mt-3 pb-4">
            <a href="" class="primary-color">
              <b>Ready to get on the road?</b> Book now.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2rem"
                height="2rem"
                class="mx-auto float-right"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#0000FF"
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                />
              </svg>
            </a>
          </h3>
        </div>
      </div>
    </div>
    <!-- Desktop -->
    <div class="row g-0 p-3 d-none d-sm-flex" id="faqs">
      <div class="col-12">
        <h1 class="display-3 mt-3 text-center">
          <span class="highlighted">Got questions?</span>
        </h1>
        <h3 class="mt-3 pb-4 primary-color text-center">
          We’ve got the answers
        </h3>
      </div>
      <div class="col-8 offset-2">
        <!-- FAQs -->
        <AccordionSection class="mb-5"></AccordionSection>
      </div>

      <div class="row g-0 mt-3 d-flex">
        <div class="col-8 offset-2">
          <h5 class="mt-3 pb-5 pt-4 text-center">
            <router-link
              to="/reservations"
              tag="a"
              class="primary-color text-center"
            >
              <b class="me-1">Ready to get on the road? </b> Book now.<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2rem"
                height="2rem"
                class="mx-auto float-right"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#0000FF"
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                />
              </svg>
            </router-link>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionSection from "@/components/faqs/AccordionSection.vue";

export default {
  name: "FaqsSection",
  components: {
    AccordionSection,
  },
};
</script>
