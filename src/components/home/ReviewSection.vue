<template>
  <div class="container">
    <div class="row g-0 mt-5 mb-5">
      <carousel
        :autoplay="true"
        :perPageCustom="[
          [0, 1],
          [576, 1],
          [768, 2],
          [992, 2],
          [1200, 3],
        ]"
      >
        <slide v-for="(review, index) in reviews" :key="index">
          <ReviewCard
            :customer-name="review.name"
            :review-text="review.text"
            :rating="review.rating"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>
  
  <script>
import ReviewCard from "./review/ReviewCard.vue";

export default {
  name: "ReviewSection",
  components: {
    ReviewCard,
  },
  data() {
    return {
      reviews: [
        {
          name: "Denise F.",
          text: "Everyone we talked with at Resla was extremely helpful, professional, and attentive. We’d definitely rent from Resla again, and we’ve told everyone about it!!",
          rating: 5,
        },
        {
          name: "Troy S.",
          text: "Great company to rent from. All Model Ys they have a clean, have 7 seats, and very generous mile restrictions. Have used them twice and will use them anytime I need a local rental.",
          rating: 5,
        },
        {
          name: "Moe B.",
          text: "Great experience. Rental process was fast and easy to use. Representative was available right away for questions. Price was very affordable when compared to other companies. Will definitely use this company again next month when we travel.",
          rating: 5,
        },
        {
          name: "Emily K.",
          text: "I had a great experience with Resla! Customer service was fantastic. They were helpful with any questions I had. The car I rented was brand new and super nice. I am definitely renting with them again!",
          rating: 5,
        },
      ],
    };
  },
};
</script>
  
<style>
.VueCarousel-inner {
  padding-bottom: 2rem !important;
}
</style>
  