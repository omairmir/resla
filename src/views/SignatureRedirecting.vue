<template>
  <div>
    <div class="fluid-container">
      <div class="row g-0" style="min-height: 65vh !important">
        <div class="col-10 offset-1 my-auto text-center">
          <div
            class="spinner-border mt-3 text-primary highlighted"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <h1 class="display-5 mt-3 mb-3">
            <span class="highlighted">Redirecting</span>
          </h1>
          <p>
            If you are not redirected within 5 seconds, please click the link
            below.
          </p>
          <a :href="url" class="btn btn-primary">Go to link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignatureRedirecting",
  data: function () {
    return {
      url: "",
    };
  },
  mounted: function () {
    this.forward();
  },
  methods: {
    forward: function () {
      const id = this.$route.params.id;
      console.log(this.$route.params.id);

      this.url = "https://esignatures.io/sign/" + id;
      console.log(this.url);

      setTimeout(() => {
        window.location.href = this.url;
      }, 3000);
    },
  },
};
</script>
