<template>
  <div class="fluid-container" id="main-section">
    <div id="desktop-background">
      <div class="container" id="hero-container">
        <div class="row g-0">
          <!-- Mobile -->
          <div class="container">
            <div class="col-md-12 d-lg-none">
              <h1 class="fw-600 display-3 white" id="main-title">
                Book a Tesla that’s <br />waiting to be driven.
              </h1>
              <h3 class="fw-400 mt-3 mb-3 white">
                You’re always guaranteed a Tesla with Resla.
              </h3>
              <div>
                <router-link
                  class="btn btn-secondary btn-lg mt-3 mb-5 rounded-pill"
                  tag="button"
                  to="/reservations"
                >
                  Book now
                </router-link>
              </div>
            </div>
          </div>
          <!-- Desktop -->
          <div class="col-lg-10 d-none d-lg-block" id="home">
            <div class="fluid-container">
              <div class="pt-3 pb-3">
                <h1 class="fw-600 display-3 white" id="main-title">
                  Book a Tesla that’s <br />waiting to be driven.
                </h1>
                <h3 class="fw-400 mt-3 mb-3 white">
                  You’re always guaranteed a Tesla.
                </h3>
                <div>
                  <router-link
                    class="btn btn-secondary btn-lg mt-3 mb-5 rounded-pill text-center"
                    tag="button"
                    to="/reservations"
                  >
                    Book now
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fluid-container">
      <div class="row g-0">
        <div class="col-12 d-lg-none image-container">
          <img
            class="mobile-image"
            src="../../assets/img/ReslaHeroMobile-01.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
  data: function () {
    return {
      startDate: "",
      endDate: "",
    };
  },
};
</script>

<style lang="scss">
$primary-color: #0000ff;
$desktop-hero-image: "../../assets/img/ReslaHeroDesktop-01.png";
$mobile-breakpoint: 600px;
$tablet-breakpoint: 992px;

#desktop-background {
  @media (max-width: $mobile-breakpoint),
    (min-width: $mobile-breakpoint + 1) and (max-width: $tablet-breakpoint) {
    background-color: $primary-color;
  }
}

#main-section {
  min-height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: $mobile-breakpoint),
    (min-width: $mobile-breakpoint + 1) and (max-width: $tablet-breakpoint) {
    height: 91vh;
    // background-color: $primary-color;
  }

  @media (min-width: $tablet-breakpoint) {
    background-image: url($desktop-hero-image);
    margin-top: -1px;
    z-index: 100;
    background-position: center center;
    // background-color: #0000ff;
    
  }
}

#main-title {
  margin-top: 20vh;

  @media (max-width: $mobile-breakpoint),
    (min-width: $mobile-breakpoint + 1) and (max-width: $tablet-breakpoint) {
    margin-top: 10vh;
  }
}

.image-container {
  padding: 0;
  margin: 0;
  overflow: hidden;
  // border: 1px solid red;
}

#hero-container {
  @media (max-width: $mobile-breakpoint),
    (min-width: $mobile-breakpoint + 1) and (max-width: $tablet-breakpoint) {
    background-color: $primary-color;
  }
}

.mobile-image {
  width: 100%;
  height: auto;

  @media (max-width: $mobile-breakpoint) {
    margin-top: -100px;
  }

  @media (min-width: $mobile-breakpoint + 1) and (max-width: $tablet-breakpoint) {
    margin-top: -40vw;

    @media (min-height: $tablet-breakpoint + 1) {
      margin-top: -20vw;
    }
  }
}
</style>