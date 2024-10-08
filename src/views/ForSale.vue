<template>
  <div class="border-x border-primary-700 relative">
    <div class="flex flex-col gap-8 p-6 lg:p-10 w-full">
      <div class="text-heading font-medium tracking-negative-3 text-left">For Sale</div>
      <div class="sale-filters flex flex-col">
        <SaleCardView/>
      </div>
    </div>
    <LegalPageCta heading="Still have" sub-heading="questions?" btn-label="Contact Us" to="/contact"></LegalPageCta>
  </div>
</template>

<script>
import SaleCardView from "@/components/sale/SaleCardView";
import LegalPageCta from "@/components/LegalPageCta";
export default {
  name: "ForSale",
  components:{
    SaleCardView,
    LegalPageCta
  },

}
</script>

<style scoped>

</style>