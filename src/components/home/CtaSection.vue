<template>
    <div class="flex justify-center bg-cover bg-no-repeat rounded-xl overflow-hidden pt-28 md:pt-32 pb-80 px-10 my-10" :style="{
        backgroundImage: `url(${require('@/assets/img/cta-background.jpg')})`,
        backgroundPosition: 'center 32%',
    }">
        <div class="flex flex-col items-center text-center gap-10 md:max-w-[22.25rem]">
            <div class="font-medium text-heading tracking-negative-3 text-black">
                Ready to get on the road?
            </div>
            <CtaButton size="large">
                Book Now
            </CtaButton>
        </div>
    </div>
</template>

<script>
import CtaButton from '@/components/base/CtaButton.vue'
export default {
    name: 'CtaSection',
    components:{
        CtaButton
    }
}
</script>