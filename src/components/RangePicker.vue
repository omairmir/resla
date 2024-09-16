<template>
  <div class="relative w-full">
    <div :class="mergedInputClass">
      <div class="flex flex-col w-full">
        <label v-if="label" :for="`datepicker-input-${this.id}`"
          class="hidden lg:block text-resla-ebony-50 text-xs leading-5 font-normal font-urbanist">{{ label }}</label>
        <input :id="`datepicker-input-${this.id}`" type="text" v-model="formattedDate"
          class="w-full bg-transparent text-ebony-10 text-base border-0 p-0 focus:ring-0 font-urbanist"
          :placeholder="placeHolder" @focus="handleFocus" />
      </div>
      <CalendarIcon class="size-5" />
    </div>
    <div v-show="isOpen" :class="mergedPickerClass">
      <DatePicker :id="`start-${this.id}`" ref="startDate" :hide-input="true" class="!static w-full" :value="startDate"
        title="Pickup Date" :picker-class="'!relative border-r border-primary-700'" @input="handleStartDate">
      </DatePicker>
       
      <DatePicker :id="`end-${this.id}`" ref="endDate" :hide-input="true" class="!static w-full" :value="endDate"
        :min-date="minReturnDate" title="Return Date" :picker-class="'!relative'" @input="handleEndDate">
      </DatePicker>
    </div>
  </div>
</template>

<script>
const BREAKPOINT = 1024;
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import DatePicker from "@/components/DatePicker.vue";
import { twMerge } from "tailwind-merge";
const formatOptions = {
  month: "short",
  day: "numeric",
};
export default {
  name: "RangePicker",
  components: {
    CalendarIcon,
    DatePicker,
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
    isScrolledPast: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => ({
        startDate: new Date(),
        endDate: null,
      }),
    },
    minDate: {
      type: Date,
      default: null,
    },
    isNav: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      blurTimeout: null,
      formattedDate: this.formatSelection(
        this.value.startDate,
        this.value.endDate
      ),
      startDate: this.value.startDate,
      endDate: this.value.endDate,
    };
  },
  computed: {
    mergedInputClass() {
      return twMerge(
        "flex items-center justify-center py-3 px-4 border-resla-ebony-70 gap-1 bg-resla-ebony-90 w-full",
        this.isOpen ? "!bg-resla-ebony-80" : "",
        this.inputClass
      );
    },
    mergedPickerClass() {
      return twMerge(
        "absolute left-1/2 transform -translate-x-1/2 items-center flex flex-row justify-center lg:justify-between lg:min-w-[39rem] z-50",
        this.pickerClass
      );
    },
    minReturnDate() {
      if (!this.startDate) return new Date();
      const minDate = new Date(this.startDate);
      minDate.setDate(minDate.getDate() + 1);
      return minDate;
    },
  },
  watch: {
    isScrolledPast(newVal) {
      if (!newVal && this.isOpen) {
        this.hideDatePicker(); // Close the date picker if the parent is hidden
      }
    },
  },
  methods: {
    showDatePicker() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.$refs.startDate.showDatePicker();
        if (window.innerWidth > BREAKPOINT) {
          // Focus on the end date picker after the start date is selected on mobile
          this.$refs.endDate.showDatePicker();
        }
        clearTimeout(this.blurTimeout);
        this.blurTimeout = setTimeout(() => {
          if (this.isNav && !this.$store.state.isOverlayActive) {
            this.$store.commit("activateOverlay");
          }
        }, 100);

        document.addEventListener("click", this.onClickOutside);
      }
    },
    hideDatePicker() {
      if (this.isOpen) {
        this.isOpen = false;
        this.$refs.startDate.hideDatePicker();
        this.$refs.endDate.hideDatePicker();

        if (this.isNav && this.$store.state.isOverlayActive) {
          this.$store.commit("deactivateOverlay");
        }
        document.removeEventListener("click", this.onClickOutside);
      }
    },
    handleFocus() {
      if (!this.isOpen) this.showDatePicker();
    },
    formatDate(date) {
      return date
        ? new Intl.DateTimeFormat("en-US", formatOptions).format(date)
        : ""; // Format date
    },
    handleStartDate(value) {
      this.startDate = value;
      this.formattedDate = this.formatSelection(this.startDate, this.endDate);
      if (window.innerWidth < BREAKPOINT) {
        this.$refs.startDate.hideDatePicker();
        this.$refs.endDate.showDatePicker();
        this.endDate = null;
      }
      this.checkIfBothDatesSelected();
    },
    handleEndDate(value) {
      this.endDate = value;
      this.formattedDate = this.formatSelection(this.startDate, this.endDate);
      this.checkIfBothDatesSelected();
    },
    checkIfBothDatesSelected() {
      if (this.isOpen && this.startDate && this.endDate) {
        this.hideDatePicker(); // Close date picker when both dates are selected
        this.$emit("input", { start: this.startDate, end: this.endDate });
      }
    },
    formatSelection(start, end) {
      return this.formatDate(start) + "-" + this.formatDate(end);
    },
    onClickOutside(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.hideDatePicker();
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
    clearTimeout(this.blurTimeout);
  },
};
</script>
