<template>
    <div class="flex flex-col items-center pb-20">
        <div
            class="flex flex-col justify-self-center items-center justify-center gap-6 max-w-md mt-16 lg:mt-32 mb-10 lg:mb-40">
            <p class="text-resla-ebony-50 text-base font-semibold leading-6 uppercase tracking-wider">
                why resla?
            </p>
            <p class="text-resla-ebony-1000 text-heading-1 leading-10 font-medium text-center tracking-negative-3">
                Offering a great rental experience doesn’t have to be rocket science.</p>
        </div>
        <!--features -->
        <div class="flex flex-col lg:flex-row w-full max-w-screen-xl">
            <div v-for="(feature, index) in features" :key="index"
                class="flex flex-col w-full gap-4 px-0 lg:!px-10 py-6 lg:py-0"
                :class="{ 'border-b lg:border-b-0 lg:border-r border-resla-ebony-70': index < features.length - 1 }">
                <component :is="feature.icon" class="size-6"></component>
                <div class="flex flex-col gap-2">
                    <p class="text-2xl leading-9 text-resla-ebony-1000 font-medium">
                        {{ feature.title }}
                    </p>
                    <p class="text-xl leading-8 text-resla-ebony-40 font-normal font-urbanist">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ClockIcon from '@/components/icons/ClockIcon.vue'
import DollarIcon from '@/components/icons/DollarIcon.vue'
import MobileIcon from '@/components/icons/MobileIcon.vue'
export default {
    name: "WhyResla",
    components: {
        ClockIcon,
        MobileIcon,
        DollarIcon,
    },
    data() {
        return {
            features: [
                {
                    icon: ClockIcon,
                    title: "24 Hour Pick Up Access",
                    description: "Collect your Tesla at any time using our digital key system and 24/7 customer support.",
                },
                {
                    icon: DollarIcon,
                    title: "Transparent Pricing",
                    description: "Resla was founded out of frustration with the ambiguous structure of traditional rental car companies.",
                },
                {
                    icon: MobileIcon,
                    title: "Contactless Collection",
                    description: "Enjoy the convenience of contactless collection for a hassle-free experience.",
                },
            ],
        }
    }
}
</script>