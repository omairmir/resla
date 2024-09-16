<template>
    <div class="reservations">
      <div class="fluid-container">
        <div class="row g-0" style="min-height:65vh !important;">
          <div class="col-10 offset-1 my-auto">
            <h1 class="display-5 mt-5 mb-3 text-center">
              <span class="highlighted">Upload insurance.</span>
            </h1>
            <div class="col-md-6 offset-md-3 mb-5 mt-4">
              <form class="needs-validation" action="https://formcarry.com/s/a8kEcUyv03" method="POST" enctype="multipart/form-data">
                <input class="form-control" type="file" name="insurance" required >
                <input class="form-control" type="hidden" name="reservation_id" :value="reservation_id" required >
                <input class="form-control" type="hidden" name="uuid" :value="uuid" required >
                <input class="form-control" type="hidden" name="type" :value="type" required >
                <button type="submit" class="btn btn-primary mx-auto d-block mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from "@/components/HelloWorld.vue";
  
  export default {
    name: "InsuranceView",
    data: function(){
      return {
        reservation_id:"",
        uuid: "",
        type:""
      }
    },
    mounted: function(){
      const urlParams = new URLSearchParams(window.location.search);
      if(urlParams.get('reservation_id') && urlParams.get('uuid') && urlParams.get('type')){
        this.reservation_id = urlParams.get('reservation_id');
        this.uuid = urlParams.get('uuid');
        this.type = urlParams.get('type');
      }
      else{
        this.$router.push('/error')
      }
    }
  };
  </script>
  