<template>
    <div class="accordion">
        <!-- Question Section -->
        <div v-if="url || route"  @click.stop>
            <template v-if="url">
                <a :href="url" target="_blank" :class="buttonClass">
                    {{ question }}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                            fill="#323242" />
                    </svg>
                </a>
            </template>
            <template v-else-if="route">
                <router-link :to="route" :class="buttonClass">
                    {{ question }}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                            fill="#323242" />
                    </svg>
                </router-link>
            </template>
        </div>

        <div v-else @click="toggleAccordion" :class="buttonClass">
            {{ question }}
            <div :class="{ '!rotate-90': isOpen }"
                class="rotate-[270deg] size-6 transform transition-transform duration-200">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967Z"
                        fill="#1E1B18" />
                </svg>
            </div>
        </div>

        <!-- Answer Section with transition -->
        <transition name="fade">
            <div v-if="isOpen && !url" class="px-6 py-4 overflow-hidden">
                <p class="text-base font-urbanist leading-6.5 text-primary-300">
                    {{ answer }}
                </p>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'FaqCard',
    props: {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            default: null,
        },
        route: {
            type: String,
            default: null,
        },
        open:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            isOpen: this.open,
        };
    },
    computed: {
        buttonClass() {
            const baseClasses = "flex border-b border-primary-70 text-primary-200 font-medium bg-primary-1000 hover:bg-primary-900 items-center justify-between py-5 px-6 gap-6 cursor-pointer";
            return baseClasses;
        },
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>