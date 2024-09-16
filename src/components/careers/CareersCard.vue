<template>
  <div class="rounded-xl bg-primary-900 border border-primary-700 py-5 px-6 flex items-center gap-5">
    <div class="flex flex-col gap-1 w-full">
      <!-- Title -->
      <h5 class="text-lg font-medium leading-9 tracking-negative-2 text-primary-200">{{ title }}</h5>
      <!-- Content Row -->
      <div class="flex items-center gap-4">
        <!-- Location SVG Icon -->
        <div class="flex items-center gap-1">
          <LocationIcon class="size-5"></LocationIcon>
          <p class="font-urbanist text-base text-primary-100 leading-6.5">{{ locationName }}</p>
        </div>
        <!-- Time SVG Icon -->
        <div class="flex items-center gap-1">
          <TimeIcon class="size-5"></TimeIcon>
          <p class="font-urbanist text-base text-primary-100 leading-6.5">Full Time</p>
        </div>
      </div>
    </div>
    <router-link :to="'/careers/' + id" tag="div" class="cursor-pointer">
      <RightArrow class="size-6 text-primary-400"></RightArrow>
    </router-link>
  </div>
</template>

<script>
import TimeIcon from '@/components/icons/TimeIcon.vue';
import LocationIcon from '@/components/icons/PinIcon.vue';
import RightArrow from '@/components/icons/RightArrow.vue';

export default {
  components: {
    LocationIcon,
    RightArrow,
    TimeIcon,
  },
  props: {
    locationName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
