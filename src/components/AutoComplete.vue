<template>
    <div class="relative">
        <div :class="mergedInputClass">
            <div class="flex flex-col w-full">
                <label v-if="label" :for="id"
                    class="hidden lg:block text-resla-ebony-50 text-xs font-normal font-urbanist">{{ label
                    }}</label>
                <input :id="id" type="text" v-model="searchQuery" @input.stop="handleInput" @focus.stop="handleInput"
                    @blur.stop="handleBlur" @keydown.enter.prevent="selectFirstOption" autocomplete="off"
                    class="w-full bg-transparent text-ebony-10 text-base border-0 p-0 focus:ring-0 font-urbanist"
                    :placeholder="placeHolder" />
            </div>
            <div v-if="$slots.icon">
                <slot name="icon"></slot>
            </div>
            <PinIcon v-else class="size-5" />
        </div>

        <ul v-if="filteredOptions.length > 0 && isOpen" :class="mergeddropdownClass" class="autocomplete-blur-dropdown">
            <li v-for="option in filteredOptions" :key="option.id"
                class="flex items-center hover:bg-primary-900 gap-4 py-3 px-3 font-urbanist text-base text-primary-300 cursor-pointer"
                @mousedown.prevent="selectOption(option)">
                <div v-if="$slots.listIcon">
                    <slot name="listIcon"></slot>
                </div>
                <PinIcon v-else class="size-5" /> {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<script>
import PinIcon from "@/components/icons/PinIcon.vue";
import { twMerge } from "tailwind-merge";
export default {
    name: "AutoComplete",
    components: {
        PinIcon,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
        },
        placeHolder: {
            type: String,
            default: "Location",
        },
        inputClass: {
            type: String,
        },
        dropdownClass: {
            type: String,
        },
        options: {
            type: Array,
            required: true,
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
        isNav: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            searchQuery: "",
            isOpen: false,
            filteredOptions: this.options,
            blurTimeout: null, // Timeout to handle blur event
        };
    },
    computed: {
        mergedInputClass() {
            return twMerge(
                "flex items-center justify-center py-3 lg:min-h-auto min-h-16  px-4 border-resla-ebony-70 gap-1 bg-resla-ebony-90 w-full",
                this.isOpen ? "!bg-resla-ebony-80" : "",
                this.inputClass
            );
        },
        mergeddropdownClass() {
            return twMerge(
                "flex flex-col gap-1 p-1 rounded-xl absolute  w-full border border-primary-700 bg-primary-1000 max-h-60 z-50 overflow-y-auto",
                this.dropdownClass
            );
        },
    },
    watch: {
        value(newValue) {
            const selectedOption = this.findOption(newValue);
            this.searchQuery = selectedOption ? selectedOption.label : "";
        },
        options(newOptions) {
            this.filteredOptions = newOptions;
        },
    },
    methods: {
        openDropdown() {
            if (!this.isOpen) {
                this.isOpen = true;
                setTimeout(() => {
                    if (this.isNav && !this.$store.state.isOverlayActive) {
                        this.$store.commit("activateOverlay");
                    }
                }, 100);
            }
        },
        closeDropdown() {
            if (this.isOpen) {
                this.isOpen = false;

                if (this.isNav && this.$store.state.isOverlayActive) {
                    this.$store.commit("deactivateOverlay");
                }
            }
        },
        handleInput() {
            this.filterOptions();
            if (!this.isOpen) this.openDropdown();
        },
        filterOptions() {
            const query = this.searchQuery.toLowerCase();
            this.filteredOptions = this.options.filter((option) =>
                option.label.toLowerCase().includes(query)
            );
        },
        selectOption(option) {
            this.searchQuery = option.label;
            this.$emit("input", option.value);
            this.closeDropdown();
            clearTimeout(this.blurTimeout); // Clear the timeout to prevent blur handling
        },
        selectFirstOption() {
            if (this.filteredOptions.length > 0) {
                this.selectOption(this.filteredOptions[0]);
            }
        },
        handleBlur() {
            this.blurTimeout = setTimeout(() => {
                const exactMatch = this.filteredOptions.find(
                    (option) =>
                        option.label.toLowerCase() === this.searchQuery.toLowerCase()
                );
                if (exactMatch) {
                    this.selectOption(exactMatch);
                } else if (this.filteredOptions.length > 0) {
                    this.selectOption(this.filteredOptions[0]);
                } else {
                    // If no matching options, reset to the initial value
                    const selectedOption = this.findOption(this.value);
                    this.searchQuery = selectedOption ? selectedOption.label : "";
                }
            }, 100); // Delay the blur handling to allow click event processing
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
        const selectedOption = this.findOption(this.value);
        this.searchQuery = selectedOption ? selectedOption.label : "";
    },
    beforeDestroy() {
        clearTimeout(this.blurTimeout);
    },
};
</script>
