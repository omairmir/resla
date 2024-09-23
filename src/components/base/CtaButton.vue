<template>
  <component :is="to ? 'router-link' : 'button'" :to="to" :class="buttonClass" :type="type" :disabled="isDisabled"
    @click="handleClick">
    <!-- Render back icon if leadingIcon prop is passed -->
    <span v-if="leadingIcon" class="block size-6">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L6.81066 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H6.81066L11.5303 17.4697C11.8232 17.7626 11.8232 18.2374 11.5303 18.5303C11.2374 18.8232 10.7626 18.8232 10.4697 18.5303L4.46967 12.5303C4.17678 12.2374 4.17678 11.7626 4.46967 11.4697L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z" />
      </svg>

    </span>
    <slot name="leading"></slot>
    <div v-if="$slots.default" class="mt-0.5">
      <slot></slot>
    </div>
    <slot name="trailing"></slot>
    <!-- Render forward icon if trailingIcon prop is passed -->
    <span v-if="trailingIcon" class="block size-6">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12.9697 5.46967C13.2626 5.17678 13.7374 5.17678 14.0303 5.46967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303L14.0303 18.5303C13.7374 18.8232 13.2626 18.8232 12.9697 18.5303C12.6768 18.2374 12.6768 17.7626 12.9697 17.4697L17.6893 12.75H5.5C5.08579 12.75 4.75 12.4142 4.75 12C4.75 11.5858 5.08579 11.25 5.5 11.25H17.6893L12.9697 6.53033C12.6768 6.23744 12.6768 5.76256 12.9697 5.46967Z" />
      </svg>
    </span>
  </component>
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
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    buttonClass() {
      const baseClasses =
        "rounded-lg font-semibold text-base transition duration-200 ease-in-out flex items-center justify-center gap-2.5";

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
          "cursor-not-allowed" // Common disabled styles
        )
        : variantClasses[this.variant];

      return twMerge(baseClasses, sizeClasses[this.size], finalVariantClasses);
    },
  },
  methods: {
    handleClick(event) {
      if (!this.isDisabled) {
        this.$emit('click', event);
      }
    },
  }
};
</script>
