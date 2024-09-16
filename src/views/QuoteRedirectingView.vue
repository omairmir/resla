<template>
    <div>
      <div class="fluid-container">
        <div class="row g-0" style="min-height:65vh !important;">
          <div class="col-10 offset-1 my-auto text-center">
            <div class="spinner-border mt-3 text-primary highlighted" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h1 class="display-5 mt-3 mb-3">
              <span class="highlighted">Redirecting</span>
            </h1>
            <p>If you are not redirected within 5 seconds, please click the link below.</p>
            <a :href="url" class="btn btn-primary">Go to link</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "QuoteRedirectingView",
    data: function(){
      return {
        url:""
      }
    },
    mounted: function(){
        this.forward()
    },
    methods:{
        forward: function(){
          const quote_id = this.$route.params.quoteId;
          console.log(this.$route.params.quoteId);

          const brand_id = this.$route.params.brandId;
          console.log(this.$route.params.quoteId);

          this.url = "https://resla.us5.hqrentals.app/public/car-rental/reservations/step3?new=1&forced_locale=en&currency=usd&quote_id=" + quote_id + "&quote_brand_uuid=" + brand_id;
          console.log(this.url);
          
          setTimeout(() => {
            window.location.href = this.url;
          }, 3000);

        }
    }
  };
  </script>