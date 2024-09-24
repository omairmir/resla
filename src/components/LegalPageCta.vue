<template>
 <div class="flex flex-col gap-8 text-center items-center py-28 lg:px-0 px-10 border-t border-primary-700 bg-[linear-gradient(180deg,_#F5F5F7_37.39%,_#F2F1F0_100%)]">
    <h2 class="text-[56px] text-black font-medium tracking-negative-3">
      Still have questions?<br />
      Contact us.
    </h2>
    <CtaButton>
      Book Now
    </CtaButton>
   </div>
</template>

<script>
import CtaButton from '@/components/base/CtaButton.vue';

export default {
  name: "LegalPageCta",
  components:{
    CtaButton
  }
};
</script>