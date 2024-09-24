<template>
  <button type="button" :class="mergedButtonClass" @click="navigateToLocation">
    <div v-if="icon" class="size-6">
      <PinIcon></PinIcon>
    </div>
    <slot v-if="$slots.icon" name="icon"></slot>
    <div class="text-primary-200 ">
      <p class="text-2xl font-medium leading-[38.4px] tracking-negative-2">
        {{ location.city }}
      </p>
      <p class="text-sm font-urbanist">
        {{ location.state }}
      </p>
    </div>
  </button>
</template>

<script>
import { twMerge } from 'tailwind-merge';
import PinIcon from '@/components/icons/PinIcon.vue'
export default {
  name: "LocationCard",
  components: {
    PinIcon
  },
  props: {
    location: {
      type: Object,
      default: () => ({
        city: 'Chicago',
        state: 'IL',
        icon: '',
        url: ''
      })
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: true
    },
    buttonClass: {
      type: String
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    mergedButtonClass() {
      const baseClasses = "w-full min-w-60 min-h-40 p-10 gap-2 flex flex-col items-center justify-center cursor-pointer bg-primary-1000 hover:bg-primary-900 active:bg-primary-800";
      const borderClasses = this.border
        ? "border-r border-primary-700"
        : "";
      return twMerge(baseClasses, borderClasses, this.buttonClass);
    },
  },
  methods: {
    // can be refactored for our use case
    navigateToLocation(event) {
      if (this.location.url) {
        window.location.href = this.location.url;
        return
      }
      if (!this.isDisabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>
