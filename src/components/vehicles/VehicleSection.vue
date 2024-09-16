<template>
  <div class="container">
    <!-- Desktop -->
    <div class="container mt-5">
      <div class="row g-0 pt-3 pb-3 d-flex text-center" id="how-it-works">
        <div class="col-lg-5">
          <!-- Header -->
          <h1 class="display-5 mb-3">
            <span class="highlighted">{{ model }}.</span>
          </h1>
          <!-- Location -->
          <h5 class="mb-3 mt-3">Available in {{ availability }}</h5>

          <!-- Images -->
          <div
            id="carouselExampleIndicators3"
            class="carousel slide mt-3 mb-3 d-block d-lg-none"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                :class="{ active: index == 0 }"
                v-for="(image, index) of images"
                :key="model + '-image-' + index"
              >
                <div class="row g-0">
                  <div class="col-12">
                    <div class="card">
                      <img
                        :src="require('@/assets/img/interior/' + image)"
                        class="card-img-top rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature #1 -->
          <p class="text-start" v-if="feature_one_header">
            <u>{{ feature_one_header }}</u>
          </p>
          <p class="text-start" v-html="feature_one"></p>

          <!-- Feature #2 -->
          <p class="text-start" v-if="feature_two_header">
            <u>{{ feature_two_header }}</u>
          </p>
          <p class="text-start" v-html="feature_two"></p>

          <!-- Feature #3 -->
          <p class="text-start" v-if="feature_three_header">
            <u>{{ feature_three_header }}</u>
          </p>
          <p class="text-start" v-html="feature_three"></p>

          <!-- Feature #4 -->
          <p class="text-start" v-if="feature_four_header">
            <u>{{ feature_four_header }}</u>
          </p>
          <p class="text-start" v-html="feature_four"></p>

          <!-- Features -->
          <div class="row g-0 mt-5">
            <div class="col">
              <h5>0-60</h5>
              <p>{{ acceleration }}</p>
            </div>
            <div class="col">
              <h5>top speed</h5>
              <p>{{ top_speed }}</p>
            </div>
            <div class="col">
              <h5>range</h5>
              <p>{{ range }}</p>
            </div>
            <div class="col">
              <h5>drivetrain</h5>
              <p>{{ drivetrain }}</p>
            </div>
          </div>
          <!-- Call to Action -->
          <router-link
            class="btn btn-primary btn-lg mt-3 mb-5 rounded-pill text-center"
            to="/reservations"
            tag="button"
            >Book Now</router-link
          >
        </div>
        <div class="col-lg-6 offset-lg-1 my-auto">
          <!-- Images -->
          <div
            id="carouselExampleIndicators3"
            class="carousel slide mt-3 d-none d-lg-block"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                :class="{ active: index == 0 }"
                v-for="(image, index) of images"
                :key="model + '-image-' + index"
              >
                <div class="row g-0">
                  <div class="col-12">
                    <div class="card">
                      <img
                        :src="require('@/assets/img/interior/' + image)"
                        class="card-img-top rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-indicators mt-3">
              <button
                v-for="(image, index) of images"
                :key="model + '-image-controls-' + index"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                :data-bs-slide-to="index"
                :class="{ active: index == 0 }"
                aria-current="true"
                :aria-label="'Slide' + index + 1"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleSection",
  props: [
    "availability",
    "model",
    "feature_one",
    "feature_two",
    "feature_three",
    "feature_four",
    "feature_one_header",
    "feature_two_header",
    "feature_three_header",
    "feature_four_header",
    "top_speed",
    "range",
    "drivetrain",
    "acceleration",
    "images",
  ],
};
</script>
