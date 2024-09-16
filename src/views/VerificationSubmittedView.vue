<template>
  <div class="reservations">
    <div class="fluid-container">
      <div class="row g-0" style="min-height: 65vh !important">
        <div class="col-10 offset-1 my-auto text-center">
          <h1 class="display-5 mt-5 mb-3">
            <span class="highlighted">Verification Submitted!</span>
          </h1>
          <p>
            Your verification attempt was submitted. It can take up to 5 minutes
            to complete. <br />We will send you a text message when it has
            completed.
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
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "VerificationSubmittedView",
};
</script>
