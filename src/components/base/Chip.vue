<template>
    <button :class="buttonClass" type="button" :disabled="isDisabled" @click.stop="selectChip">
        <slot></slot>
        <span v-if="isSelected" :class="['block size-6 p-1 rounded-full', isDisabled ? 'bg-transparent' : 'bg-primary-300']"
            @click.stop="deselectChip">
            <!-- Close icon when selected -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12M12 4L4 12" stroke="#ffff" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </span>
    </button>
</template>

<script>
import { twMerge } from "tailwind-merge";

export default {
    name: "ChipButton",
    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String
        },
        selected: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isSelected: this.selected, // Initialize with selected prop
        };
    },
    computed: {
        buttonClass() {
            const baseClasses =
                "rounded-full items-center text-sm leading-[22.4px] flex items-center gap-2.5 font-urbanist border py-1.5 px-4 transition-colors ease-in duration-200";
            const defaultClasses =
                "border-primary-700 bg-primary-1000 hover:bg-primary-900 text-primary-100";
            const selectedClasses =
                "text-white bg-primary-100 hover:bg-primary-100 pr-2 pl-4";
            const disabledClasses =
                "text-primary-600 bg-primary-1000 cursor-not-allowed";
            const selectedDisabledClasses =
                "text-primary-1000 bg-primary-800 cursor-not-allowed pr-2 pl-4";

            const finalClasses = twMerge(
                baseClasses,
                this.isDisabled
                    ? this.isSelected
                        ? selectedDisabledClasses
                        : disabledClasses
                    : this.isSelected
                    ? selectedClasses
                    : defaultClasses
            );

            return finalClasses;
        },

    },
    watch: {
        selected(newVal) {
            this.isSelected = newVal;
        },
    },
    methods: {
        // make it toggle if needed
        selectChip() {
            if (this.isDisabled) return;
            this.isSelected = true;

            this.$emit("onSelect", this.value);
        },
        deselectChip() {
            if (this.isDisabled) return;
            this.isSelected = false;
            this.$emit("onDeselect", this.value);
        },
    },
};
</script>