<template>
  <div class="mt-16 lg:mt-40 gap-10 lg:gap-20 flex flex-col w-full">
    <div class="flex flex-col lg:flex-row items-start relative">
      <!-- Right Column (Sticky Process Information) -->
      <div
        class="flex flex-col gap-8 lg:py-12 lg:pr-20 lg:pl-12 w-full lg:sticky top-48"
      >
        <p class="text-resla-ebony-50 text-base font-semibold leading-6">
          THE PROCESS
        </p>
        <div class="flex flex-col gap-3">
          <p
            class="text-heading-1 leading-10 text-resla-ebony-20 font-medium tracking-negative-3"
          >
            Renting Made Easy
          </p>
          <p
            class="font-normal font-urbanist text-xl leading-8 text-resla-ebony-40"
          >
            With its advanced crash avoidance technology and high-strength
            reinforcement structure, you can feel confident and secure behind
            the wheel.
          </p>
        </div>
        <!--TODO: reviews - can be made carousel-->
        <ReviewCard></ReviewCard>
      </div>
      <!-- Left Column (Steps and Content) -->
      <div class="flex flex-col gap-6 w-full overflow-y-auto lg:pr-6">
        <!-- Step 1 -->
        <div class="flex flex-col gap-6 w-full mt-16 lg:mt-0">
          <img
            src="@/assets/img/renting-process-1.png"
            class="rounded-xl"
            alt="renting process"
            loading="lazy"
          />
          <div class="flex gap-6 items-center">
            <div
              class="bg-resla-ebony-90 rounded-lg size-12 flex items-center justify-center"
            >
              <p class="text-xl leading-9 text-resla-ebony-20 font-medium">1</p>
            </div>
            <p
              class="text-xl lg:text-2xl leading-9 text-resla-ebony-30 font-medium"
            >
              Book your Tesla Online
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-6 w-full"
          v-for="(step, index) in rentingSteps"
          :key="index"
        >
          <img
            :src="getImageUrl(step.imageUrl)"
            class="rounded-xl"
            alt="renting process"
            loading="lazy"
          />
          <div class="flex gap-6 items-center">
            <div
              class="bg-resla-ebony-90 rounded-lg size-12 flex items-center justify-center"
            >
              <p class="text-xl leading-9 text-resla-ebony-20 font-medium">
                {{ index + 2 }}
              </p>
            </div>
            <p
              class="text-xl lg:text-2xl leading-9 text-resla-ebony-30 font-medium"
            >
              {{ step.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReviewCard from "@/components/base/ReviewCard.vue";

export default {
  name: "RentingSteps",
  components: {
    ReviewCard,
  },
  data() {
    return {
      rentingSteps: [
        {
          imageUrl: "renting-process-2.png",
          title: "Collect using your digital key",
        },
        {
          imageUrl: "renting-process-3.png",
          title: "Enjoy with zero hassle",
        },
        {
          imageUrl: "renting-process-4.png",
          title: "Return at your convenience",
        },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/img/${imageName}`);
    },
  },
};
</script>
