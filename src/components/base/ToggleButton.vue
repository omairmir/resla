<template>
    <div :class="[
        'flex',
        { 'border overflow-hidden rounded-md': this.options.length > 1 },
    ]">
        <button v-for="option in options" :key="option.value" type="button" :class="buttonClass(option)"
            @click="toggleOption(option)">
            <div class="flex items-center gap-0.5">
                <!-- Render icon if showIcon is true -->
                <template v-if="showIcon && option.icon">
                    <span v-html="option.icon"></span>
                </template>
                <!-- Render label if showLabel is true -->
                <template v-if="showLabel && option.label">
                    {{ option.label }}
                </template>
                <!-- Slot for custom content -->
                <template v-if="$scopedSlots['option-content']">
                    <slot name="option-content" :option="option" />
                </template>
            </div>
        </button>
    </div>
</template>

<script>
import { twMerge } from "tailwind-merge";
export default {
    name: "ToggleButton",
    props: {
        options: {
            type: Array,
            required: true,
            default: () => [
                { label: "A", value: "option1", icon: '' },
                { label: "B", value: "option2", icon: '' },
            ],
        },
        multiple: {
            type: Boolean,
            default: false, // single toggle by default
        },
        value: {
            type: [String, Array],
            default: () => [],
        },
        showIcon: {
            type: Boolean,
            default: true,
        },
        showLabel: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            selectedOptions: this.multiple ? this.value : this.value || null,
        };
    },
    computed: {
        // Computed property returns function so we can pass options
        buttonClass() {
            return (option) => {
                const baseClasses = " p-2.5 gap-1 transition-colors duration-200";
                const selectedClasses =
                    "bg-primary-100 hover:bg-primary-100 text-white";
                const unselectedClasses = "bg-primary-1000 hover:bg-primary-900";

                const isSelected = this.multiple
                    ? this.selectedOptions.includes(option.value)
                    : this.selectedOptions === option.value;

                return twMerge(
                    baseClasses,
                    isSelected ? selectedClasses : unselectedClasses
                );
            };
        },
    },
    methods: {
        toggleOption(option) {
            if (this.multiple) {
                if (this.selectedOptions.includes(option.value)) {
                    this.selectedOptions = this.selectedOptions.filter(
                        (val) => val !== option.value
                    );
                } else {
                    this.selectedOptions = [...this.selectedOptions, option.value];
                }
            } else {
                this.selectedOptions =
                    this.selectedOptions === option.value ? null : option.value;
            }
            // Emit the selected values
            this.$emit("input", this.selectedOptions);
        },
    },
    watch: {
        value(newVal) {
            this.selectedOptions = newVal;
        },
    },
};
</script>
