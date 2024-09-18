<template>
    <button :class="buttonClass" type="button" :disabled="isDisabled" @click.stop="selectChip">
        <div :class="['size-5', gradientClass, 'rounded-full']"></div>
        <!-- Render close icon if selected -->
        <span v-if="isSelected" :class="['block size-6 p-1 rounded-full', isDisabled ? 'bg-transparent' : 'bg-primary-300']"
        @click.stop="deselectChip">
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
    name: "ColorChip",
    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: "red",
            validator(value) {
                return ["red", "blue", "black", "pearl", "silver"].includes(value);
            },
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
            isSelected: this.selected,
        };
    },
    computed: {
        buttonClass() {
            const baseClasses =
                "p-2 rounded-full items-center text-sm leading-[22.4px] flex items-center justify-center font-urbanist border border-primary-700 bg-primary-1000 hover:bg-primary-900 text-primary-100 transition-colors ease-in duration-200";
            const selectedClasses =
                "bg-primary-100 hover:bg-primary-100 gap-x-1";
            const disabledClasses =
                "opacity-50 cursor-not-allowed";
            const selectedDisabledClasses =
                "bg-primary-700 hover:bg-primary-700 opacity-50 cursor-not-allowed";

                const finalClasses = twMerge(
                baseClasses,
                this.isDisabled
                    ? this.isSelected
                        ? selectedDisabledClasses
                        : disabledClasses
                    : this.isSelected
                    ? selectedClasses
                    : ''
            );

            return finalClasses;
        },
        gradientClass() {
            return {
                red: 'bg-paint-red',
                blue: 'bg-paint-blue',
                black: 'bg-paint-black',
                pearl: 'bg-paint-pearl',
                silver: 'bg-paint-silver',
            }[this.color] || 'bg-paint-red'; // Default to red if color is not provided
        }
    },
    watch: {
        selected(newVal) {
            this.isSelected = newVal;
        },
    },
    methods: {
        // make it toggle if required
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
