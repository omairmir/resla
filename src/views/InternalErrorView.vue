<template>
    <div class="reservations">
      <div class="fluid-container">
        <div class="row g-0" style="min-height:65vh !important;">
          <div class="col-10 offset-1 my-auto text-center">
            <h1 class="display-5 mt-5 mb-3">
              <span class="highlighted">Oops, it looks like <br>something went wrong.</span>
            </h1>
            <p>Please try again or contact our support for assistance if the error persists.</p>
            <router-link to="/contact" class="btn btn-primary">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from "@/components/HelloWorld.vue";
  
  export default {
    name: "InternalErrorView",
  };
  </script>