<template>
    <button :class="buttonClass" :type="type" :disabled="isDisabled" @click="selectChip">
        <slot></slot>
        <!-- Render close icon if selected, otherwise trailing icon -->
        <span v-if="isSelected" class="block size-6 p-1 bg-primary-300 rounded-full" @click.stop="deselectChip">
            <!-- Close icon when selected -->
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#2B2825" />
                <path d="M8 8L16 16M16 8L8 16" stroke="#E5E3E0" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </span>
    </button>
</template>

<script>
import { twMerge } from "tailwind-merge";

export default {
    name: "ChipsButton",
    props: {
        type: {
            type: String,
            default: "button",
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isSelected: false, // Track if chip is selected
        };
    },
    computed: {
        buttonClass() {
            const baseClasses = "rounded-full items-center text-sm leading-[22.4px] flex items-center gap-2.5 font-urbanist border border-primary-700 bg-primary-1000 hover:bg-primary-900 py-1.5 px-4 text-primary-100 transition-colors ease-in duration-200";
            const selectedClasses = "text-white bg-primary-100 hover:bg-primary-100 py-2 pr-2 pl-4";
            const disabledClasses = "text-primary-600 cursor-not-allowed pointer-events-none"; // Combine disabled styles

            const finalClasses = twMerge(
                baseClasses,
                this.isSelected ? selectedClasses : '',
                this.isDisabled ? disabledClasses : ''
            );

            return finalClasses;
        },

    },
    methods: {
        selectChip() {
            this.isSelected = true;
            // emit event here
        },
        deselectChip() {
            this.isSelected = false;
        },
    },
};
</script>