<template>
  <div :class="loadingClass">
    <!-- fading logo -->
    <svg v-if="type === 'logo'" aria-hidden="true"
      class="w-14 h-9 text-primary-900 animate-pulse dark:text-gray-600 fill-primary-500" viewBox="0 0 53 36"
      fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="56" height="36" fill="url(#pattern0_2211_282)" />
      <defs>
        <pattern id="pattern0_2211_282" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2211_282" transform="matrix(0.0011396 0 0 0.0017094 -0.000569801 0)" />
        </pattern>
      </defs>
      <image href="@/assets/resla-logo-r.svg" x="0" y="0" width="56" height="36" />
    </svg>


    <!--spinner with logo-->
    <svg v-if="type === 'spin'" width="55" height="54" viewBox="0 0 55 54" fill="none"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle cx="27.5" cy="27" r="24" stroke="#E5E3E0" stroke-width="6"></circle>
      <path d="M51.5 27C51.5 13.7452 40.7548 3 27.5 3" stroke="#110F0C" stroke-width="6" class="animate-spin-logo" />
      <rect x="18" y="20" width="21" height="14" fill="url(#pattern0_2210_6813)" />
      <defs>
        <pattern id="pattern0_2210_6813" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2210_6813" transform="matrix(0.0011396 0 0 0.0017094 -0.000569801 0)" />
        </pattern>
      </defs>
      <image href="@/assets/resla-logo-r.svg" x="18" y="20" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "LoadingAnimation",
  // more loading animation & option can be added
  props: {
    type: {
      type: String,
      default: 'spin',
      validator(value) {
        return ["logo", "spin"].includes(value);
      },
    },
    fullScreen: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    loadingClass() {
      return this.fullScreen
        ? "fixed top-0 left-0 bg-primary-900 min-w-full min-h-screen z-[1000] flex flex-col justify-center items-center"
        : "relative ";
    },
  },
};
</script>

<style>
.animate-spin-logo {
  animation: spin 2s linear infinite;
  transform-origin: 27.5px 27px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
