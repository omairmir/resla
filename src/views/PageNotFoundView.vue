<template>
    <div class="reservations">
      <div class="fluid-container">
        <div class="row g-0" style="min-height:65vh !important;">
          <div class="col-10 offset-1 my-auto text-center">
            <h1 class="display-5 mt-5 mb-3">
              <span class="highlighted">Page not found.</span>
            </h1>
            <p>Ooops! We couldn't find what you're looking for.</p>
            <router-link to="/" class="btn btn-primary">Back to home</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from "@/components/HelloWorld.vue";
  
  export default {
    name: "PageNotFoundView",
  };
  </script>