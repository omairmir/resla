<template>
    <div class="flex flex-col gap-10 items-center justify-center w-full mt-20 mb-20">
        <!--Heading-->
        <div class="flex gap-6 items-center w-full justify-between">
            <div class="font-medium text-heading-1 leading-10 text-resla-ebony-1000 tracking-negative-3">
                Resources</div>
            <div class="hidden lg:block border-l border-resla-ebony-80 pl-6">
                <!--in case of reuse make separate button compoennet-->
                <button type="button"
                    class="flex items-center justify-center gap-2 focus:outline-none border-0 bg-transparent">
                    <p class="text-base leading-6 text-[#323242] font-semibold mt-0.5">More</p>
                    <div class="size-6">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                                fill="#323242" />
                        </svg>
                    </div>
                </button>
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
                    <button type="button" class="border-0 focus:outline-none">
                        <LinkIcon class="size-6"></LinkIcon>
                    </button>
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
                        <button type="button"
                            class="flex items-center gap-2 focus:outline-none border-0 bg-transparent">
                            <p class="text-base leading-6 text-[#323242] font-semibold mt-0.5">Read</p>
                            <div class="size-6">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                                        fill="#323242" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <!--Faq's - can be a seprate component -->
                <div class="border border-resla-ebony-70 rounded-xl">
                    <Accordion v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer">
                    </Accordion>
                </div>
            </div>
            <div class="block lg:hidden border-t border-resla-ebony-80 pt-6">
                <!--in case of reuse make separate button compoennet-->
                <button type="button"
                    class="flex items-center justify-center gap-2 focus:outline-none border-0 bg-transparent">
                    <p class="text-base leading-6 text-[#323242] font-semibold mt-0.5">More</p>
                    <div class="size-6">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                                fill="#323242" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>

    </div>
</template>
<script>
import LinkIcon from '@/components/icons/LinkIcon.vue'
import Accordion from '@/components/Accordion.vue'
export default {
    name: "ResourcesSection",
    components: {
        LinkIcon,
        Accordion
    },
    data() {
        return {
            faqs: [
                {
                    question: 'How old do you have to be to rent a Resla?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'What fees does Resla charge?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'Is auto insurance required to rent with Resla?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'Does the damage waiver cover damage to other vehicles?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'Do I need a physical key?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'Is there a limit on the number of miles I drive?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    question: 'Does the damage waiver cover damage to other vehicles?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ]

        }
    }
};
</script>