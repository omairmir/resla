<template>
    <div class="sticky top-0 z-50">
        <div
            class="relative flex flex-col lg:flex-row items-center justify-between min-h-[68px] lg:px-10 lg:py-3 gap-x-4 bg-primary-1000" :class="{'border-b border-primary-700':isScrolled}">
            <div class="flex w-full lg:w-auto justify-between items-center order-1 lg:order-none lg:!p-0 py-4 px-6">
                <!--logo-->
                <router-link to="/" tag="a">
                    <img src="../assets/resla-logo-black-rgb.svg" class="w-28 h-4" alt="resla logo black" />
                </router-link>
                <!--mobile nav-->
                <div class="block lg:hidden order-2">
                    <NavModels class="!static" :dropdown-class="'w-[96%]'">
                        <template #button>
                            <button type="button" class="px-1.5 py-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 6H19.5" stroke="#44403C" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M4.5 12H19.5" stroke="#44403C" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M4.5 18H19.5" stroke="#44403C" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                        </template>
                    </NavModels>
                </div>
            </div>
            <!--nav inputs -->
            <div v-show="isScrolledPast || !isHome"
                class="block lg:order-2 lg:w-auto order-3 py-3 px-6 lg:!p-0 border-y lg:!border-0 w-full">
                <NavInputs class="lg:relative" datePickerID="nav" :is-scrolled-past="isScrolledPast">
                </NavInputs>
            </div>
            <!--desktop nav-->
            <div class="hidden lg:flex items-center gap-8 order-3">
                <NavModels class="!static" :dropdown-class="'w-[96%]'" />
                <router-link tag="p" to="/" class="text-resla-ebony-40 font-urbanist font-semibold text-base cursor-pointer">
                    Sign in
                </router-link>
            </div>
        </div>
        <!-- Background overlay -->
        <div v-if="isOverlayActive"
            class="absolute w-full h-screen bg-[#110F0C] bg-opacity-0 z-10 backdrop-blur-[6px]"></div>
    </div>
</template>

<script>
const BREAKPOINT = 1024;
import NavInputs from "@/components/NavInputs.vue";
import NavModels from "@/components/NavModels.vue";

export default {
    name: "NavBar",
    components: {
        NavInputs,
        NavModels,
    },
    data() {
        return {
            isScrolledPast: false,
            isScrolled: false,
        };
    },
    computed: {
        isHome() {
            return this.$route.path === "/";
        },
        isOverlayActive(){
            return this.$store.state.isOverlayActive
        }
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 10;
            this.isScrolledPast =
                window.innerWidth < BREAKPOINT
                    ? window.scrollY > 400
                    : window.scrollY > 250; // scroll position for mobile
        },
    },
    mounted() {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);
    },
};
</script>
