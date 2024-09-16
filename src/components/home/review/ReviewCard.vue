<template>
  <div
    class="card shadow rounded-3 d-block mx-auto"
    style="width: 75% !important"
  >
    <div class="card-body">
      <div class="mb-3 mt-3">
        <svg
          v-for="star in rating"
          :key="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
            fill="#0000FF"
          />
        </svg>
      </div>
      <p class="card-text mt-3 mb-5 fw-500 h5">{{ reviewText }}</p>
      <h6 class="card-text mt-3 mb-0 fw-600">{{ customerName }}</h6>
      <p class="text-muted card-text mt-0">Satisfied Customer</p>
      <div class="row g-0 p-0">
        <div class="col-3 border secondary-border p-0"></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ReviewCard",
  props: {
    customerName: String,
    reviewText: String,
    rating: Number,
  },
};
</script>

  