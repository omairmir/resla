<template>
    <div class="accordion">
      <div 
        @click="toggleAccordion" 
        class="flex border-b border-relsa-ebony-70 items-center justify-between py-5 px-6 gap-6 h-16 cursor-pointer"
      >
        <p class="font-medium text-base leading-6 text-resla-ebony-20">
          {{ question }}
        </p>
        <div :class="{'rotate-90': isOpen}" class="size-6 transform transition-transform duration-200">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                fill="#323242" />
          </svg>
        </div>
      </div>
      <!-- Transition for the accordion body -->
    <transition
      name="fade"
    >
      <div v-if="isOpen" class="px-6 py-4 overflow-hidden">
        <p class="text-base text-resla-ebony-50">
          {{ answer }}
        </p>
      </div>
    </transition>
    </div>
  </template>
  
  <script>
  export default {
    name:'TextAccordian',
    props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleAccordion() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  