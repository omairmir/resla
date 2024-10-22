<template>
  <div class="flex items-center justify-center rounded-xl mt-8 lg:mt-7 w-full sm:h-full h-[15rem]">
    <!-- url and embedding  can be redefined -->
      <video controls poster="../../assets/img/hero-video-poster.png" class="rounded-xl size-full object-cover">
          <source src="#" type="video/mp4">
          Your browser does not support the video tag.
        </video>
  </div>
</template>

<script>
export default {
name: "IntroVideo",
};
</script>
