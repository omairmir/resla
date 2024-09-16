<template>
  <div class="reservations">
    <div class="fluid-container">
      <div class="row g-0">
        <div class="col-10 offset-1">
          <h1 class="display-5 mt-5 mb-3 text-center">
            <span class="highlighted">Book now.</span>
          </h1>
        </div>
        <div class="col-12 mb-5">
          <div
            class="hq-rental-software-integration"
            data-integrator_link="https://resla.resla.com/public/car-rental/integrations"
            data-brand="edl1jdz0-ri4x-exu9-x6yh-guteacejp7pu"
            data-snippet="reservations"
            data-skip_language=""
            data-rate_type_uuid=""
            data-referral=""
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ReservationsView",
  components: {
    //HelloWorld,
  },
  mounted: function () {
    window.requestIframeSnippet(
      document.getElementsByClassName("hq-rental-software-integration")[0]
    );
  },
};
</script>
