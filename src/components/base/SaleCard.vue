<template>
  <div class="sale-card-wrapper border-y border-primary-700 flex gap-6 py-4 justify-between">
    <div class="flex gap-6 justify-center items-center">
      <div class="img-container flex">
        <img :src="image" class="h-[80px] w-[80px] rounded-xl object-cover"/>
      </div>
      <div class="content-container flex flex-col">
        <div>Model {{model}}</div>
        <div>Vin {{vin}}</div>
      </div>
    </div>
    <div class="color-year-contact flex gap-6 flex-row flex-wrap">
      <div class="flex justify-center items-center gap-2">
        <div class="">{{color}}</div>
        <div class="w-5 h-5 rounded-full" :class="getColor"></div>
      </div>
      <div class="flex justify-center items-center">
        <Badge type="default" size="small">{{year}}</Badge>
      </div>
      <div class="flex justify-center items-center">
        <CtaButton :trailingIcon="true" size="small" variant="tertiary">{{contact}}</CtaButton>
      </div>

    </div>
  </div>
</template>

<script>
import Badge from "@/components/base/Badge";
import CtaButton from "@/components/base/CtaButton";
export default {
  name: "SaleCard",
  components:{
    Badge,
    CtaButton
  },
  props:{
    image: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
    vin: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    year: {
      type: Number,
      default: null,
    },
    contact: {
      type: String,
      default: '',
    }
  },
  computed: {
    getColor() {
      const specialColors = {
        red: 'bg-paint-red',
        blue: 'bg-paint-blue',
        black: 'bg-paint-black',
        white: 'bg-paint-pearl',
        grey: 'bg-paint-silver',
      };

      const color = this.color.trim().toLowerCase();
      return specialColors[color] || `bg-paint-red`;
    },
  }
}
</script>

<style scoped>

</style>