<template>
    <div class="reservations">
      <div class="fluid-container">
        <div class="row g-0" style="min-height:65vh !important;">
          <div class="col-10 offset-1 my-auto text-center">
            <h1 class="display-5 mt-5 mb-3">
              <span class="highlighted">Pending reservation!</span>
            </h1>
            <p>Your reservation id is #{{id}}. We will be reaching out shortly over text with next steps.</p>
            <router-link to="/contact" class="btn btn-primary">Contact us</router-link>
          </div>
        </div>
      </div>
      <!-- Facebook pixel -->
      <img height="1" width="1" src="https://www.facebook.com/tr?id=575262810938424&ev=PageView&noscript=1"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from "@/components/HelloWorld.vue";
  
  export default {
    name: "ReservationConfirmedView",
    data: function(){
      return {
        id:""
      }
    },
    mounted: function(){
      const urlParams = new URLSearchParams(window.location.search);
      this.id = urlParams.get('reservation_id');
    }
  };
  </script>
  