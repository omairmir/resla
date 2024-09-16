<template>

    <div class="flex justify-center bg-cover bg-top bg-no-repeat rounded-xl overflow-hidden pt-28 md:pt-32 pb-80 my-10"
        :class="{ 'md:bg-[center_-500px]': true }"
        :style="{ backgroundImage: `url(${require('@/assets/img/cta-background.jpg')})` }">
        <div class="flex flex-col items-center text-center gap-10 max-w-[22.25rem]">
            <div class="font-medium text-[3.5rem] leading-[3.5rem] tracking-negative-3 text-black">
                Ready to get on the road?
            </div>
            <button type="button" class="rounded-lg py-3 px-6 bg-primary-100">
                <span class="font-semibold font-urbanist text-base  text-primary-1000">Book Now</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CtaSection',
}
</script>