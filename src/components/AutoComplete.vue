<template>
    <div class="relative">
        <TextInput :id="id" :class="inputClass" :size="size" :required="required" :placeholder="placeHolder" :label="label ? label : ''" v-model="searchQuery"
            @input="handleInput" @focus="handleInput" @blur="handleBlur" icon @keydown="selectFirstOption"
            >
            <template #icon>
            <div v-if="$slots.icon">
                <slot name="icon"></slot>
            </div>
            <PinIcon v-else />
            </template>
        </TextInput>
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
import { twMerge } from "tailwind-merge";
import PinIcon from "@/components/icons/PinIcon.vue";
import TextInput from "@/components/base/TextInput.vue";

export default {
    name: "AutoComplete",
    components: {
        PinIcon,
        TextInput
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
        size: {
            type: String,
            default: 'large',
            validator(value) {
                return ["large", "small"].includes(value);
            },
        },
        required: {
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
