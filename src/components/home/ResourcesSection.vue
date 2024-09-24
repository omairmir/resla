<template>
    <div class="flex flex-col gap-10 items-center justify-center w-full mt-20 mb-20">
        <!--Heading-->
        <div class="flex gap-6 items-center w-full justify-between">
            <div class="font-medium text-heading-1 leading-10 text-resla-ebony-1000 tracking-negative-3">
                Resources</div>
            <div class="hidden lg:block border-l border-resla-ebony-80 pl-6">
                <CtaButton variant="tertiary" trailing-icon>
                    More
                </CtaButton>
            </div>

        </div>
        <!--content-->
        <div class="flex w-full flex-col lg:flex-row  gap-6">
            <div class="flex flex-col gap-4 w-full">
                <!--resource Video - may be a image to external video link-->
                <!-- <VideoPlayer url="#" posterUrl="@/assets/img/resources-video-poster.png"></VideoPlayer> -->
                <img src="@/assets/img/resources-thumbnail.png" class="w-full cursor-pointer aspect-square" />

                <div class="flex gap-1 items-center">
                    <div class="w-full font-medium text-2xl leading-9 text-resla-ebony-1000 tracking-negative-2">
                        How do I find superchargers?</div>
                    <CtaButton variant="tertiary">
                        <LinkIcon class="size-6"></LinkIcon>
                    </CtaButton>
                </div>
            </div>
            <div class="flex flex-col gap-6 w-full">
                <!--Blog card - can be a seprate component -->
                <div class="order-last lg:!order-first flex flex-col lg:flex-row w-full">
                    <img src="@/assets/img/blog-thumbnail.png" alt="blog thumbnail" class="max-h-52 rounded-xl">
                    <div class="flex flex-col justify-between py-4 px-0 lg:!px-10 h-full">
                        <div class="flex flex-col gap-1">
                            <p class="font-urbanist font-normal text-base leading-6 text-relsa-ebony-1000">Wed May 22
                                2024</p>
                            <p class="font-medium text-2xl leading-9 text-relsa-ebony-1000">Experience the Tesla
                                Reengineered Model 3</p>
                        </div>
                        <CtaButton variant="tertiary" trailing-icon class="w-max">
                            Read
                        </CtaButton>
                    </div>
                    
                </div>
                <div class="border border-resla-ebony-70 rounded-xl overflow-hidden">
                    <FaqCard v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" :route="faq.route">
                    </FaqCard>
                </div>
            </div>
            <div class="block lg:hidden border-t border-resla-ebony-80 pt-6">
                <CtaButton variant="tertiary" trailing-icon>
                    More
                </CtaButton>
            </div>
        </div>

    </div>
</template>
<script>
import LinkIcon from '@/components/icons/LinkIcon.vue'
import CtaButton from '@/components/base/CtaButton.vue'
import FaqCard from '@/components/base/FaqCard.vue'
export default {
    name: "ResourcesSection",
    components: {
        LinkIcon,
        CtaButton,
        FaqCard
    },
    data() {
        return {
            faqs: [
                {
                    question: 'How old do you have to be to rent a Resla?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'What fees does Resla charge?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'Is auto insurance required to rent with Resla?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'Does the damage waiver cover damage to other vehicles?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'Do I need a physical key?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'Is there a limit on the number of miles I drive?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                },
                {
                    question: 'Does the damage waiver cover damage to other vehicles?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    route:'/faqs'
                }
            ]

        }
    }
};
</script>