<template>
  <div
    class="relative"
    ref="pickerContainer"
  >
    <TextInput v-if="!hideInput"  :id="`datepicker-input-${this.id}`" :placeholder="placeHolder" :label="label ? label : ''" v-model="formattedDate" icon @focus="handleFocus"></TextInput>
    <div v-show="isOpen" :class="mergedPickerClass">
      <div
      :id="`datepicker-${this.id}`"
      ref="datepicker"
    ></div>
      <div class="realtive">
        <div
          v-show="showTimePicker"
          class=" pb-6 w-full flex items-center justify-center bg-white"
        >
          <!-- time picker -->
          <div class="relative w-full mx-6">
            <div
              class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="7.5" fill="#D6D2CD" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.697 1.1363C4.98989 1.42919 4.98989 1.90406 4.697 2.19696L2.197 4.69696C1.9041 4.98985 1.42923 4.98985 1.13634 4.69696C0.843445 4.40406 0.843445 3.92919 1.13634 3.6363L3.63634 1.1363C3.92923 0.843403 4.4041 0.843403 4.697 1.1363ZM3.25 9.99996C3.25 6.27204 6.27208 3.24996 10 3.24996C13.7279 3.24996 16.75 6.27204 16.75 9.99996C16.75 13.7279 13.7279 16.75 10 16.75C6.27208 16.75 3.25 13.7279 3.25 9.99996ZM10 1.74996C5.44365 1.74996 1.75 5.44361 1.75 9.99996C1.75 14.5563 5.44365 18.25 10 18.25C14.5563 18.25 18.25 14.5563 18.25 9.99996C18.25 5.44361 14.5563 1.74996 10 1.74996ZM10.75 6.66663C10.75 6.25241 10.4142 5.91663 10 5.91663C9.58579 5.91663 9.25 6.25241 9.25 6.66663V9.99996C9.25 10.2507 9.37533 10.4849 9.58398 10.624L12.084 12.2907C12.4286 12.5204 12.8943 12.4273 13.124 12.0827C13.3538 11.738 13.2607 11.2724 12.916 11.0426L10.75 9.59857V6.66663ZM15.303 2.19696C15.0101 1.90406 15.0101 1.42919 15.303 1.1363C15.5959 0.843403 16.0708 0.843403 16.3637 1.1363L18.8637 3.6363C19.1566 3.92919 19.1566 4.40406 18.8637 4.69696C18.5708 4.98985 18.0959 4.98985 17.803 4.69696L15.303 2.19696Z"
                  fill="#44403C"
                />
              </svg>
            </div>
            <input
              type="time"
              :id="`time-${this.id}`"
              class="bg-primary-900 border border-primary-700 focus:ring-primary-700 leading-none text-primary-100 text-base rounded-lg w-full pt-2 px-4"
              v-model="timeValue"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Datepicker } from "flowbite";
import { twMerge } from "tailwind-merge";
import TextInput from "@/components/base/TextInput.vue";

export default {
  name: "DatePicker",
  components: {
    TextInput
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    label: {
      type: String,
    },
    placeHolder: {
      type: String,
      default: "Date",
    },
    inputClass: {
      type: String,
    },
    pickerClass: {
      type: String,
    },
    value: {
      type: Date,
      default: (()=> new Date()),
    },
    minDate: {
      type: Date,
      default: null,
    },
    hideInput: {
      type: Boolean,
      default: false,
    },
    isNav: {
      type: Boolean,
      default: false,
    },
    showTimePicker:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      datepickerInstance: null,
      isOpen: false,
      blurTimeout: null,
      formattedDate: this.formatDate(this.value),
      timeValue:'00:00'
    };
  },
  computed: {
    mergedInputClass() {
      return twMerge(
        "flex items-center justify-center py-3 px-4 lg:min-h-auto min-h-16 border-resla-ebony-70 gap-1 bg-resla-ebony-90 w-full",
        this.isOpen ? "!bg-resla-ebony-80" : "",
        this.inputClass
      );
    },
    mergedPickerClass() {
      return twMerge("absolute bg-white rounded-lg z-40", this.pickerClass);
    },
  },
  watch: {
    value(newValue) {
      this.formattedDate = this.formatDate(newValue);
      if (this.datepickerInstance) {
        this.datepickerInstance.setDate(newValue);
      }
    },
    minDate(newValue) {
      if (this.datepickerInstance) {
        this.datepickerInstance
          .getDatepickerInstance()
          .setOptions({ minDate: newValue });
        const currentDate = this.datepickerInstance.getDate();
        if (currentDate < newValue) {
          this.datepickerInstance.setDate(newValue);
          this.formattedDate = this.formatDate(newValue);
        }
      }
    },
  },
  methods: {
    initDatepicker() {
      const ele = this.$refs.datepicker;
      this.datepickerInstance = new Datepicker(
        ele,
        {
          autohide: true,
          title: this.title,
          minDate: this.minDate,
        },
        {
          id: `datepicker-${this.id}`,
          override: true,
        }
      );
      if (this.value) {
        this.datepickerInstance.setDate(this.value);
      }
      ele.addEventListener("changeDate", this.handleDateChange);
    },
    showDatePicker() {
      if (this.datepickerInstance) {
        this.datepickerInstance.show();
        this.isOpen = true;
        setTimeout(() => {
          if (this.isNav && !this.$store.state.isOverlayActive) {
            this.$store.commit("activateOverlay");
          }
        }, 100);
        document.addEventListener("click", this.onClickOutside);
      }
    },
    hideDatePicker() {
      if (this.datepickerInstance) {
        this.datepickerInstance.hide();
        this.isOpen = false;
        if (this.isNav && this.$store.state.isOverlayActive) {
          this.$store.commit("deactivateOverlay");
        }
        document.removeEventListener("click", this.onClickOutside);
      }
    },
    handleDateChange() {
      const selectedDate = this.datepickerInstance.getDate();
      const selectedDateTime = new Date(selectedDate).getTime();
      const formattedDateTime = new Date(this.formattedDate).getTime();
      if (selectedDateTime === formattedDateTime) {
        return;
      }
      this.formattedDate = this.formatDate(selectedDate);
      const [hours, minutes] = this.timeValue.split(":");
      const finalDateTime = new Date(selectedDate);
      finalDateTime.setHours(hours, minutes);
      this.$emit("input", finalDateTime);
      if (!this.hideInput) this.hideDatePicker();
    },
    handleFocus() {
      if (!this.isOpen) {
        this.showDatePicker();
      }
    },
    onClickOutside(event) {
      // delay the closure to determine if the focus is actually outside
      this.blurTimeout = setTimeout(() => {
        if (
          this.$el && !this.$el.contains(event.target) &&
          this.isOpen && !this.hideInput
        ) {
          this.hideDatePicker();
        }
      }, 100);
    },
    formatDate(date) {
      return date ? new Intl.DateTimeFormat("en-US").format(date) : "";
    },
  },
  mounted() {
    this.initDatepicker();
  },
  beforeDestroy() {
    clearTimeout(this.blurTimeout);
    document.removeEventListener("click", this.onClickOutside);
  },
};
</script>

<style lang="scss">
.datepicker-picker {
  width: 100% !important;
  box-shadow: none !important;
  border-radius: 0px !important;
}

.datepicker-title {
  padding: 0 !important;
  font-size: 12px !important;
  @apply font-urbanist text-sm text-center text-primary-100;
}

.datepicker {
  width: 100%;

  .datepicker-main {
    display: flex !important;
    justify-content: center;
  }

  .selected {
    background-color: black !important;
  }
}
</style>
