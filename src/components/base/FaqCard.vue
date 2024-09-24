<template>
    <div class="accordion">
        <!-- Question Section -->
        <div v-if="url || route" @click.stop>
            <component :is="url ? 'a' : 'router-link'" :href="url ? url : undefined"
            :to="route ? route : undefined" :class="buttonClass">
                {{ question }}
                <RightArrow class="size-6 text-primary-500" />
            </component>
        </div>

        <div v-else @click="toggleAccordion" :class="buttonClass">
            {{ question }}
            <ChevronLeft class="rotate-[270deg] size-6 transform transition-transform duration-200 text-primary-500" :class="{ '!rotate-90': isOpen }"></ChevronLeft>
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
import RightArrow from '@/components/icons/RightArrow.vue'; // Importing the icon component
import ChevronLeft from '@/components/icons/ChevronLeft.vue';
export default {
    name: 'FaqCard',
    components: {
        RightArrow,
        ChevronLeft
    },
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
        open: {
            type: Boolean,
            default: false
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