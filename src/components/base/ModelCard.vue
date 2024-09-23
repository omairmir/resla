<template>
    <router-link :to="routePath" tag="div" class="border w-full border-resla-ebony-70 rounded-xl bg-primary-900 hover:bg-primary-800 cursor-pointer overflow-hidden">
      <img :src="getImageUrl(modelDetail.imageUrl)" class="flex rounded-t-xl w-full" />
      <div class="p-6 md:p-10 gap-6 w-full flex flex-col">
        <!-- Model Name & Rent -->
        <div class="flex justify-between items-center">
          <p class="font-medium text-[32px] leading-8 text-resla-ebony-20">
            {{ modelDetail.name }}
          </p>
  
          <div class="flex gap-6">
            <!-- Colors Section -->
            <div class="hidden md:flex items-center gap-3">
              <p class="font-normal text-resla-ebony-10 text-base leading-6">Available in</p>
              <div class="flex -space-x-1">
                <div 
                  v-for="(color, index) in colorGradients"
                  :key="index"
                  :class="color"
                  class="w-5 h-5 rounded-full"
                  aria-label="Car color option"
                ></div>
              </div>
            </div>
            <div class="flex">
              <p class="text-heading-1 font-medium text-resla-ebony-20 leading-8">
                ${{ modelDetail.rent }}
              </p>
              <sub class="inline-block text-xl font-normal">/day</sub>
            </div>
          </div>
        </div>
  
        <!-- Mobile Colors Section -->
        <div class="flex w-full md:hidden items-center gap-3">
          <p class="font-normal text-resla-ebony-10 text-base leading-6">Available in</p>
          <div class="flex -space-x-1">
            <div 
              v-for="(color, index) in colorGradients"
              :key="index"
              :class="color"
              class="w-5 h-5 rounded-full"
              aria-label="Car color option"
            ></div>
          </div>
        </div>
  
        <div class="w-full border border-resla-ebony-70"></div>
  
        <!-- Model Details -->
        <div class="flex gap-8 items-center">
          <div class="w-full block md:flex gap-3 items-center">
            <div class="font-medium text-2xl leading-9 text-resla-ebony-10">
              {{ modelDetail.range }}
            </div>
            <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
              mi Range
            </div>
          </div>
          <div class="w-full block md:flex gap-3 items-center">
            <div class="font-medium text-2xl leading-9 text-resla-ebony-10">
              0-60
            </div>
            <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
              mph in {{ modelDetail.zeroToSixty }} sec
            </div>
          </div>
        </div>
  
        <div class="mt-3 flex gap-8 items-center">
          <div class="w-full block md:flex gap-3 items-center">
            <div class="inline-block font-medium text-2xl leading-9 text-resla-ebony-10">
              {{ modelDetail.topSpeed }}
            </div>
            <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
              mph top speed
            </div>
          </div>
          <div class="w-full block md:flex gap-3 items-center">
            <div class="inline-block font-medium text-2xl leading-9 text-resla-ebony-10">
              Dual
            </div>
            <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
              AWD
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </template>
  
  <script>
  const availableColor = ['paint-red', 'paint-blue', 'paint-black', 'paint-pearl', 'paint-silver']
  export default {
    name: "ModelCard",
    props: {
      modelDetail: {
        type: Object,
        default: () => ({
          name: "Model 3",
          imageUrl: "model-3.png",
          rent: "69",
          range: "272",
          zeroToSixty: "5.1",
          topSpeed: "162",
          dualAWD: true,
        }),
      },
      routePath:{
        type:String,
        default:''
      }
    },
    computed: {
      colorGradients() {
        // color are added in tailwind theme
        return (this.modelDetail.colors && this.modelDetail.colors.length > 0)
        ? this.modelDetail.colors.map((color) => `bg-${color}`)
        : availableColor.map((color) => `bg-${color}`);
      },
    },
    methods: {
      getImageUrl(imageName) {
        return require(`@/assets/img/models/${imageName}`);
      },
    },
  };
  </script>
  