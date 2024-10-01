<template>
  <div class="relative">
    <TextInput :id="`datepicker-input-${this.id}`" :class="inputClass" :size="size" :placeholder="placeHolder" :label="label ? label : ''" v-model="formattedDate" icon @focus="handleFocus"></TextInput>
    <div v-show="isOpen" :class="mergedPickerClass">
      <DatePicker :id="`${this.id}-start-date`" ref="startDate" hide-input class="!static w-full" :value="startDate"
        title="Pickup Date" :picker-class="'!relative border-r border-primary-700'" @input="handleStartDate">
      </DatePicker>
       
      <DatePicker :id="`${this.id}-end-date`" ref="endDate" hide-input class="!static w-full" :value="endDate"
        :min-date="minReturnDate" title="Return Date" :picker-class="'!relative'" @input="handleEndDate">
      </DatePicker>
    </div>
  </div>
</template>

<script>
const BREAKPOINT = 1024;
import { twMerge } from "tailwind-merge";
import DatePicker from "@/components/DatePicker.vue";
import TextInput from "@/components/base/TextInput.vue";
const formatOptions = {
  month: "short",
  day: "numeric",
};
export default {
  name: "RangePicker",
  components: {
    DatePicker,
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
    size:{
            type:String,
            default:'large',
            validator(value) {
                return ["large", "small"].includes(value);
            },
    },
    required: {
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
