<template>
  <div class="relative">
    <div v-if="$slots.button" @click="toggleDropdown">
      <slot name="button"></slot>
    </div>
    <p v-else :class="mergedButtonClass" @click="toggleDropdown">
      Models
    </p>
    <div v-show="isOpen" :class="mergedDropDownClass">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 bg-primary-1000 gap-x-4 gap-y-5 lg:border border-resla-ebony-70 p-6 md:rounded-xl">
        <ModelLink v-for="model in navModelList" :key="model.name" :imgSrc="model.image" :name="model.name" :url="model.url" />
      </div>
      <div class="flex lg:hidden p-6 !pt-4 bg-primary-1000">
        <button type="button"
          class="w-full flex justify-center rounded-lg bg-resla-ebony-90 border border-resla-ebony-70 py-3 px-6 gap-2.5">
          <span class="font-urbanist font-semibold text-base text-resla-ebony-20">
            Sign In
          </span>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.9697 5.46967C13.2626 5.17678 13.7374 5.17678 14.0303 5.46967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303L14.0303 18.5303C13.7374 18.8232 13.2626 18.8232 12.9697 18.5303C12.6768 18.2374 12.6768 17.7626 12.9697 17.4697L17.6893 12.75H5.5C5.08579 12.75 4.75 12.4142 4.75 12C4.75 11.5858 5.08579 11.25 5.5 11.25H17.6893L12.9697 6.53033C12.6768 6.23744 12.6768 5.76256 12.9697 5.46967Z"
              fill="#1E1B18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ModelLink from "@/components/base/ModelLink.vue";
import { twMerge } from "tailwind-merge";

export default {
  name: "NavModels",
  components: {
    ModelLink,
  },
  props: {
    dropdownClass: {
      type: String,
    },
    buttonClass: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
      blurTimeout: false,
      navModelList:[{
                image:'model-3-front.png',
                name:'Model 3',
                url:'' // TODO: add link to new model detail page
            },
            {
                image:'model-y.png',
                name:'Model Y',
                url:''
            },
            {
                image:'model-s.png',
                name:'Model S',
                url:'#'
            },
            {
                image:'model-x.png',
                name:'Model X',
                url:''
            }
        ]
    };
  },
  computed: {
    mergedButtonClass() {
      return twMerge(
        "text-resla-ebony-40 font-urbanist font-semibold text-base cursor-pointer",
        this.buttonClass
      );
    },
    mergedDropDownClass() {
      return twMerge(
        "absolute z-50 left-1/2 transform -translate-x-1/2 top-[82px]",
        this.dropdownClass
      );
    },
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.addEventListener("click", this.onClickOutside);
      } else {
        document.removeEventListener("click", this.onClickOutside);
      }
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      setTimeout(() => {
          this.$store.commit(
            this.isOpen ? "activateOverlay" : "deactivateOverlay"
          );
      }, 100);
    },
    closeDropdown() {
      this.isOpen = false;
      if (this.$store.state.isOverlayActive) {
        this.$store.commit("deactivateOverlay");
      }
    },
    onClickOutside(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        event.stopPropagation();
        this.closeDropdown();
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
    clearTimeout(this.blurTimeout);
  },
};
</script>
