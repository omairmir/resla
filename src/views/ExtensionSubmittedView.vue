<template>
  <div class="reservations">
    <div class="fluid-container">
      <div class="row g-0" style="min-height: 65vh !important">
        <div class="col-10 offset-1 my-auto text-center">
          <h1 class="display-5 mt-5 mb-3">
            <span class="highlighted">Request submitted!</span>
          </h1>
          <p>
            We recieved your request to extend your trip and will follow up with
            you via text message shortly.
          </p>
          <router-link to="/contact" target="_blank" class="btn btn-primary"
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
  name: "ExtensionSubmittedView",
};
</script>
