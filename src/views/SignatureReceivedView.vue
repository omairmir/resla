<template>
  <div class="reservations">
    <div class="fluid-container">
      <div class="row g-0" style="min-height: 65vh !important">
        <div class="col-10 offset-1 my-auto text-center">
          <h1 class="display-5 mt-5 mb-3">
            <span class="highlighted">Signature received!</span>
          </h1>
          <p>
            We received your signature for reservation #{{ id }}. We will be
            reaching out shortly over text with next steps.
          </p>
          <router-link to="/contact" class="btn btn-primary"
            >Contact us</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignatureReceivedView",
  data: function () {
    return {
      id: "",
    };
  },
  mounted: function () {
    const urlParams = new URLSearchParams(window.location.search);
    this.id = urlParams.get("reservation_id");
  },
};
</script>
