<template>
    <div :class="badgeClass">
      <slot></slot> <!-- Content inside the badge -->
    </div>
  </template>
  
  <script>
  import { twMerge } from "tailwind-merge";
  export default {
    name: "BadgeButton",
    props: {
      type: {
        type: String,
        default: "default",
        validator: (value) => ["default", "success", "error", "warning"].includes(value),
      },
      size:{
        type: String,
        default: 'large',
        validator: (value) => ["small", "large"].includes(value)
      }
    },
    computed: {
      badgeClass() {
        const baseClass = "inline-block px-2 rounded font-urbanist text-sm leading-[22.4px]";
        const typeClasses = {
          default: "bg-primary-800",
          success: "bg-[#38BA9B26]",
          error: "bg-[#EDC05526]",
          warning: "bg-[#DD4C5326]",
        };
        return twMerge(baseClass, typeClasses[this.type], this.size === 'large' ? 'py-0.5' : 'py-0');
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can also add any additional styles here if necessary */
  </style>
  