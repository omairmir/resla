<template>
    <div class="relative">
        <CtaButton :variant="variant" :size="size" :id="id" @click="toggleDropdown">
            <div class="flex items-center gap-1">
                {{ title || label }}
                <div v-if="$slots.icon">
                    <slot name="icon"></slot>
                </div>
                <div v-if="icon" :class="{ '!rotate-90': isOpen }"
                    class="rotate-[270deg] size-6 transform transition-transform duration-200">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </CtaButton>
        <!--Dropdown Contetnt-->
        <div v-if="isOpen" :class="mergeddropdownClass">
            <slot v-if="$slots.content" name="content"></slot>

            <ul v-else-if="options.length > 0">
                <li v-for="option in options" :key="option[valueKey]"
                    class="flex items-center hover:bg-primary-900 gap-4 py-3 px-3 font-urbanist text-base text-primary-300 cursor-pointer rounded-lg"
                    @mousedown.prevent="selectOption(option)">
                    {{ option.label }}
                </li>
            </ul>

            <!--  when no options are available -->
            <p v-else class="text-center text-primary-400">No options available</p>
        </div>
    </div>
</template>

<script>
import { twMerge } from "tailwind-merge";
import CtaButton from "@/components/base/CtaButton.vue";
export default {
    name: "DropdownMenu",
    components: {
        CtaButton,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
        },
        variant: {
            type: String,
            default: "primary", // primary, secondary, or tertiary
            validator(value) {
                return ["primary", "secondary", "tertiary"].includes(value);
            },
        },
        size: {
            type: String,
            default: "large", // large, small
            validator(value) {
                return ["large", "small"].includes(value);
            },
        },
        dropdownClass: {
            type: String,
        },
        icon: {
            type: Boolean,
            default: true,
        },
        options: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [String, Number, Object],
            default: null,
        },
        valueKey: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
            title: this.label,
        };
    },
    computed: {
        mergeddropdownClass() {
            return twMerge(
                "flex flex-col gap-1 p-2 rounded-xl absolute w-full min-w-20 border border-primary-700 bg-primary-1000 max-h-60 z-50 overflow-y-auto",
                this.dropdownClass
            );
        },
    },
    methods: {
        toggleDropdown() {
          console.log("toggle ", this.isOpen)
            this.isOpen = !this.isOpen;
          setTimeout(() => {
            this.$store.commit(
                this.isOpen ? "activateOverlay" : "deactivateOverlay"
            );
          }, 100);
        },
        selectOption(option) {
            console.log('called on mount')
            this.title = option ? option.label : "";
            this.$emit("input", option[this.valueKey]);
            this.isOpen = false;
        },
        findOption(value) {
            if (typeof value === "object" && value !== null) {
                return this.options.find(
                    (option) => option[this.valueKey] === value[this.valueKey]
                );
            }
            return this.options.find((option) => option[this.valueKey] === value);
        },
    },
    mounted() {
        if (this.value) {
            const selectedOption = this.findOption(this.value);
            if (selectedOption) {
                this.selectOption(selectedOption);
            }
        }
    },
};
</script>
