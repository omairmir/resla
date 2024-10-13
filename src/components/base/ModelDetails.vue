<template>
  <div class="model-detail-container flex border-x border-primary-700 flex-col gap-10">
    <div :class="isSticky ? 'lg:px-6 pb-2.5' : 'lg:px-10'"  class="flex flex-col pt-10 px-10 w-full justify-center items-center gap-6 sticky top-[40px] bg-primary-1000 z-10 flex-wrap">
      <div class="flex flex-row justify-between items-center w-full flex-wrap">
        <div class="font-medium tracking-negative-5 text-resla-ebony-1000 flex" :class="isSticky ? 'text-2xl leading-6 py-3' : 'text-heading'">
          {{ modelDetail.name }}
        </div>
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex items-center gap-3">
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
          <CtaButton :size="isSticky ? 'small' : 'large'" class="w-full md:w-max">
            {{ isSticky ? 'Book' : 'Book Now' }}
          </CtaButton>
        </div>
      </div>
    </div>
    <div class="flex gap-10 flex-col px-6 lg:px-10 w-full justify-center items-center">
      <div class="flex flex-col">
        <div class="flex flex-col bg-no-repeat max-h-[632px] justify-center overflow-hidden rounded lg:rounded-xl">
          <img :src="getImageUrl"/>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 border-y border-primary-700 px-8">

      <div class="flex gap-3 items-center flex-col md:flex-row">
        <div class="flex text-heading-1 text-resla-ebony-10 font-medium">{{ modelDetail.range }}</div>
        <div class="flex text-xl leading-8 font-Urbanist text-resla-ebony-10 font-medium">MI Range</div>
      </div>

      <div class="flex gap-3 items-center flex-col md:flex-row">
        <div class="text-heading-1 text-resla-ebony-10 font-medium">
          {{ modelDetail.dualAWD === true ? 'Dual' : '' }}
        </div>
        <div class="text-xl leading-8 font-Urbanist text-resla-ebony-10 font-medium">AWD</div>
      </div>

      <div class="flex gap-3 items-center flex-col md:flex-row">
        <div class="text-heading-1 text-resla-ebony-10 font-medium">0-60</div>
        <div class="text-xl leading-8 font-Urbanist text-resla-ebony-10 font-medium">
          mph in {{ modelDetail.zeroToSixty }} sec
        </div>
      </div>

      <div class="flex gap-3 items-center flex-col md:flex-row">
        <div class="text-heading-1 text-resla-ebony-10 font-medium">{{ modelDetail.topSpeed }}</div>
        <div class="text-xl leading-8 font-Urbanist text-resla-ebony-10 font-medium">mph top speed</div>
      </div>
    </div>

    <div class="flex gap-10 flex-col px-6 lg:px-10 w-full justify-center items-center">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div class="flex flex-col bg-no-repeat justify-center items-center overflow-hidden rounded-xl h-full lg:max-h-[523px] lg:max-w-[639px]">
            <img src="../../assets/img/model3/model-3-half.png">
          </div>
          <div class="flex flex-col gap-8 px-5 lg:px-20 justify-center items-center">
            <div class="flex flex-col">
              <h4 class="font-medium text-2xl leading-[38.4px] negative-2">Safety</h4>
              <span class="font-urbanist text-xl leading-8 font-normal">With its advanced crash avoidance technology and high-strength reinforcement structure, you can feel confident and secure behind the wheel.</span>
            </div>
            <ReviewCard starWidth="20" starHeight="20" :rating="5" reviewText="5-star safety ratings in every category and subcategory" customerName=""/>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div class="flex flex-col bg-no-repeat justify-center overflow-hidden rounded-xl h-full lg:max-h-[523px] lg:max-w-[639px]">
            <img src="../../assets/img/interior/Model3_01.png">
          </div>
          <div class="flex flex-col gap-8 px-5 lg:px-20 justify-center items-center">
            <div class="flex flex-col">
              <h4 class="font-medium text-2xl leading-[38.4px] negative-2">Rear-Wheel Drive</h4>
              <span class="font-urbanist text-xl leading-8 font-normal text-left">Model 3’s electric power and torque comes from the rear wheels.
                <a class="underline" href="https://www.caranddriver.com/research/a31861525/rear-wheel-drive-cars/" target="_blank">Rear-wheel drive</a>
                (RWD) offers a fluid and smooth ride making it the perfect vacation car to cruise around town.</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div class="flex flex-col bg-no-repeat justify-center overflow-hidden rounded-xl h-full lg:max-h-[523px] lg:max-w-[639px]">
            <img src="../../assets/img/interior/Model3_01.png">
          </div>
          <div class="flex flex-col gap-8 px-5 lg:px-20 justify-center items-center">
            <div class="flex flex-col">
              <h4 class="font-medium text-2xl leading-[38.4px] negative-2">Advanced Driving</h4>
              <span class="font-urbanist text-xl leading-8 font-normal">Complete with Tesla’s <a class="underline" href="https://www.resla.com/blog/tesla-autopilot-navigating-the-road-to-self-driving" target="_blank">Autopilote</a> feature, the Model 3 offers the convenience to assist with monotonous driving. Autopilot allows the vehicle to steer, accelerate, and break automatically within its lane without the driver having to control a thing.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LegalPageCta heading="Ready to get" sub-heading="on the road?"></LegalPageCta>
  </div>
</template>

<script>
import CtaButton from "@/components/base/CtaButton";
import ReviewCard from "@/components/base/ReviewCard";
import LegalPageCta from "@/components/LegalPageCta";

const availableColor = ['paint-red', 'paint-blue', 'paint-black', 'paint-pearl', 'paint-silver']
export default {
  name: "ModelDetails",
  components: {
    CtaButton,
    ReviewCard,
    LegalPageCta
  },
  data() {
    return {
      isSticky: false,
      modelDetail: {
        name: 'Model 3',
        imageUrl: '0x0-Model3_07.jpg', // can be replaced with url
        rent: '69',
        range: '272',
        zeroToSixty: '5.1', // 0-60 mph time, adjust as needed
        topSpeed: '162', // Top speed, adjust as needed
        dualAWD: true, // Dual all-wheel drive status
        colors: ['paint-red', 'paint-pearl', 'paint-black', 'paint-blue',]
      }
    }
  },
  computed: {
    colorGradients() {
      // color are added in tailwind theme
      return (this.modelDetail.colors && this.modelDetail.colors.length > 0)
          ? this.modelDetail.colors.map((color) => `bg-${color}`)
          : availableColor.map((color) => `bg-${color}`);
    },
    getImageUrl() {
      return require(`@/assets/img/model3/${this.modelDetail.imageUrl}`);
    },


  },
  methods:{
    handleScroll() {
      this.isSticky = window.scrollY > 60;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<style scoped>

</style>