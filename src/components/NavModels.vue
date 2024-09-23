<template>
  <div class="relative">
    <div v-if="$slots.button" @click="toggleDropdown">
      <slot name="button"></slot>
    </div>
    <CtaButton v-else variant="tertiary" @click="toggleDropdown">
      Models
    </CtaButton>
    <div v-show="isOpen" :class="mergedDropDownClass">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 bg-primary-1000 gap-x-4 gap-y-5 lg:border border-resla-ebony-70 p-6 md:rounded-xl">
        <ModelLink v-for="model in navModelList" :key="model.name" :imgSrc="model.image" :name="model.name" :url="model.url" />
      </div>
      <div class="flex lg:hidden p-6 !pt-4 bg-primary-1000">
        <CtaButton to="#" variant="secondary" trailing-icon class="w-full">Sign In</CtaButton>
      </div>
    </div>
  </div>
</template>

<script>
import ModelLink from "@/components/base/ModelLink.vue";
import { twMerge } from "tailwind-merge";
import CtaButton from "./base/CtaButton.vue";

export default {
  name: "NavModels",
  components: {
    ModelLink,
    CtaButton
  },
  props: {
    dropdownClass: {
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
