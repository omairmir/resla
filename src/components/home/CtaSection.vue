<template>
    <div class="flex justify-center bg-cover bg-no-repeat rounded-xl overflow-hidden pt-28 md:pt-32 pb-80 px-10 my-10" :style="{
        backgroundImage: `url(${require('@/assets/img/cta-background.jpg')})`,
        backgroundPosition: 'center 32%',
    }">
        <div class="flex flex-col items-center text-center gap-10 md:max-w-[22.25rem]">
            <div class="font-medium text-heading tracking-negative-3 text-black">
                Ready to get on the road?
            </div>
            <button type="button" class="rounded-lg py-3 px-6 bg-primary-100">
                <span class="font-semibold font-urbanist text-base text-primary-1000">Book Now</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CtaSection',
}
</script>
