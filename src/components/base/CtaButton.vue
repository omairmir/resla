<template>
  <button :class="buttonClass" :type="type" :disabled="isDisabled" @click.stop="handleClick">
    <!-- Render back icon if leadingIcon prop is passed -->
    <span v-if="leadingIcon" class="block size-6 p-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 14"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.53033 0.46967C7.82322 0.762563 7.82322 1.23744 7.53033 1.53033L2.81066 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H2.81066L7.53033 12.4697C7.82322 12.7626 7.82322 13.2374 7.53033 13.5303C7.23744 13.8232 6.76256 13.8232 6.46967 13.5303L0.46967 7.53033C0.176777 7.23744 0.176777 6.76256 0.46967 6.46967L6.46967 0.46967C6.76256 0.176777 7.23744 0.176777 7.53033 0.46967Z"
        />
      </svg>
    </span>
    <slot name="leading"></slot>
    <div v-if="$slots.default" class="mt-px">
      <slot></slot>
    </div>
    <slot name="trailing"></slot>
    <!-- Render forward icon if trailingIcon prop is passed -->
    <span v-if="trailingIcon" class="block size-6 p-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 14"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L15.5303 6.46967C15.8232 6.76256 15.8232 7.23744 15.5303 7.53033L9.53033 13.5303C9.23744 13.8232 8.76256 13.8232 8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697L13.1893 7.75H1C0.585786 7.75 0.25 7.41421 0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H13.1893L8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967Z"
        />
      </svg>
    </span>
  </button>
</template>

<script>
import { twMerge } from "tailwind-merge";
export default {
  name: "CtaButton",
  props: {
    type: {
      type: String,
      default: "button",
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
    leadingIcon: {
      type: Boolean,
      default: false, // Controls whether to show a forward icon
    },
    trailingIcon: {
      type: Boolean,
      default: false, // Controls whether to show a back icon
    },
  },
  computed: {
    buttonClass() {
      const baseClasses =
        "rounded-lg font-semibold text-base transition duration-200 ease-in-out flex items-center gap-2.5";

      const sizeClasses = {
        large:
          this.variant === "tertiary"
            ? "!gap-1 p-0"
            : this.variant === "secondary"
            ? "py-[15px] px-[23px]"
            : "py-4 px-6", // Adjusted padding for secondary
        small:
          this.variant === "tertiary"
            ? "!gap-1 p-0"
            : this.variant === "secondary"
            ? "py-[9px] px-[19px]"
            : "py-2.5 px-5",
      };
      const variantClasses = {
        primary:
          "text-white bg-primary-100 hover:bg-primary-300 active:bg-primary-400",
        secondary:
          "text-primary-200 bg-primary-900 border border-primary-700  hover:bg-primary-800 active:bg-primary-700",
        tertiary:
          "text-primary-400 hover:text-primary-200 active:text-primary-100",
      };

      const disabledClasses = {
        primary: "bg-primary-800 text-white",
        secondary: "bg-primary-900 text-primary-600",
        tertiary: "text-primary-600",
      };

      const finalVariantClasses = this.isDisabled
        ? twMerge(
            disabledClasses[this.variant],
            "cursor-not-allowed pointer-events-none" // Common disabled styles
          )
        : variantClasses[this.variant];

      return twMerge(baseClasses, sizeClasses[this.size], finalVariantClasses);
    },
  },
  methods:{
    handleClick(event) {
      if (!this.isDisabled) {
        this.$emit('click', event); 
      }
    },
  }
};
</script>
