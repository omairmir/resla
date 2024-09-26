<template>
  <div :class="containerClass">
    <label
      v-if="label"
      :for="id"
      class="absolute transition-all duration-200"
      :class="labelClass"
      >{{ label }}</label
    >
    <input
      :id="id"
      :class="inputClass"
      :type="type"
      :placeholder="!label ? placeholder : ''"
      :disabled="isDisabled"
      :autocomplete="autocomplete ? 'on' : 'off'"
      v-model="formattedValue"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />
    <!-- Render forward icon if trailingIcon prop is passed -->
    <div v-if="icon" class="block size-5">
        <slot name="icon">
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
      <rect x="3.16666" y="2.5" width="15" height="15" rx="3.33333" fill="#E5E3E0"/>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.95832 0.833253C7.95832 0.488075 7.6785 0.208252 7.33332 0.208252C6.98815 0.208252 6.70832 0.488075 6.70832 0.833253V1.89421C6.55242 1.90049 6.4054 1.90882 6.26654 1.91985C5.6883 1.9658 5.1984 2.06164 4.74926 2.28313C3.96776 2.66853 3.33526 3.30102 2.94987 4.08253C2.72838 4.53166 2.63254 5.02156 2.58659 5.5998C2.54165 6.16537 2.54165 6.86639 2.54166 7.75098V7.7777V10.8333V10.8803C2.54164 12.4117 2.54163 13.6248 2.66927 14.5741C2.80063 15.5511 3.07739 16.3419 3.70103 16.9655C4.32466 17.5892 5.11545 17.866 6.09247 17.9973C7.04182 18.1249 8.25486 18.1249 9.78634 18.1249H9.83332H11.5H11.547C13.0785 18.1249 14.2915 18.1249 15.2408 17.9973C16.2179 17.866 17.0087 17.5892 17.6323 16.9655C18.2559 16.3419 18.5327 15.5511 18.664 14.5741C18.7917 13.6248 18.7917 12.4117 18.7917 10.8802V10.8333V9.16659V9.1196C18.7917 7.58812 18.7917 6.37508 18.664 5.42573C18.5327 4.44872 18.2559 3.65792 17.6323 3.03429C17.0087 2.41065 16.2179 2.13389 15.2408 2.00253C15.0467 1.97644 14.8416 1.95567 14.625 1.93916V0.833253C14.625 0.488075 14.3452 0.208252 14 0.208252C13.6548 0.208252 13.375 0.488075 13.375 0.833253V1.88552C12.8233 1.87491 12.2155 1.87491 11.547 1.87492L11.5 1.87492H8.44443L8.41772 1.87492H8.41766H8.4176C8.25868 1.87492 8.10568 1.87492 7.95832 1.87518V0.833253ZM13.375 3.33325V3.13582C12.831 3.12519 12.2117 3.12492 11.5 3.12492H8.44443C8.27343 3.12492 8.11166 3.12494 7.95832 3.12522V3.33325C7.95832 3.67843 7.6785 3.95825 7.33332 3.95825C6.98815 3.95825 6.70832 3.67843 6.70832 3.33325V3.14525C6.58701 3.15061 6.47315 3.15738 6.36556 3.16593C5.86231 3.20592 5.55006 3.28196 5.30213 3.40422C4.76741 3.66791 4.33465 4.10068 4.07096 4.63539C3.94869 4.88332 3.87265 5.19557 3.83266 5.69882C3.79212 6.20907 3.79166 6.86046 3.79166 7.7777V10.8333C3.79166 12.4223 3.79298 13.5512 3.90812 14.4075C4.02084 15.246 4.23223 15.729 4.58491 16.0817C4.93758 16.4343 5.42062 16.6457 6.25903 16.7585C7.11542 16.8736 8.24431 16.8749 9.83332 16.8749H11.5C13.089 16.8749 14.2179 16.8736 15.0743 16.7585C15.9127 16.6457 16.3957 16.4343 16.7484 16.0817C17.1011 15.729 17.3125 15.246 17.4252 14.4075C17.5403 13.5512 17.5417 12.4223 17.5417 10.8333V9.16659C17.5417 7.57757 17.5403 6.44868 17.4252 5.59229C17.3125 4.75389 17.1011 4.27085 16.7484 3.91817C16.3957 3.5655 15.9127 3.35411 15.0743 3.24139C14.9323 3.2223 14.7828 3.20633 14.625 3.19299V3.33325C14.625 3.67843 14.3452 3.95825 14 3.95825C13.6548 3.95825 13.375 3.67843 13.375 3.33325ZM6.49999 6.04159C6.15481 6.04159 5.87499 6.32141 5.87499 6.66659C5.87499 7.01176 6.15481 7.29159 6.49999 7.29159H14.8333C15.1785 7.29159 15.4583 7.01176 15.4583 6.66659C15.4583 6.32141 15.1785 6.04159 14.8333 6.04159H6.49999Z"
          fill="#54504C"
        />
      </svg>
     </slot>
    </div>
  </div>
</template>

<script>
import { twMerge } from "tailwind-merge";
export default {
  name: "TextInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "large", // large, small
      validator(value) {
        return ["large", "small"].includes(value);
      },
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isBorder: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false, // Controls whether to show a back icon
    },
  },
  data() {
    return {
      isFocused: false,
      formattedValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.formattedValue = newValue;
    }
  },
  computed: {
    containerClass() {
      const baseClasses =
        "relative min-w-[200px] font-normal font-urbanist text-base leading-[25.6px] flex items-center gap-1 border-primary-700 bg-primary-900 hover:bg-primary-800 focus-within:bg-primary-800 text-primary-500 hover:text-primary-300 focus-within:text-primary-100";
      
     const sizeClasses = {
        large: "py-3 px-4 min-h-16",
        small: "py-2 px-4 min-h-[42px]",
      };

      const disabledClasses =
        "!bg-primary-900 cursor-not-allowed hover:!bg-primary-900 !text-primary-600";

      return twMerge(
        baseClasses,  
        this.isDisabled ? disabledClasses : "",
        this.isRounded ? "rounded-lg" : "",
        this.isBorder ? "border" : "",
        sizeClasses[this.size],
      );
    },
    inputClass() {
      const baseClasses =
        "border-0 focus:ring-0 p-0 m-0 w-full bg-inherit text-primary-100 ";

      return twMerge(baseClasses, this.isDisabled ? "cursor-not-allowed" : "",this.size === 'large' ? 'mt-2.5' : '');
    },
    labelClass() {
      const baseClasses =
        "transform pointer-events-none";
      const floatingClasses =
        "text-xs leading-[10.2px] -translate-y-4 !text-primary-200";

      return twMerge(
        baseClasses,
        this.isFocused || this.formattedValue
          ? this.size === "small"
            ? "hidden"
            : floatingClasses
          : ""
      );
    },
  },
  methods: {
    handleFocus(event) {
      this.isFocused = true;
      this.$emit('focus',event);
    },
    handleBlur(event) {
      this.isFocused = false;
      this.$emit('blur',event);
    },
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input',event, value);
      this.formattedValue = value;
    },
  },
};
</script>
