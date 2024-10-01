<template>
    <div class="flex flex-col items-center justify-center w-full gap-4">
        <h1
            class="font-medium text-resla-ebony-10 text-[56px] mt-9 mb-14 tracking-negative-3 leading-[56px] block text-center">
            Rent a Tesla Guaranteed.
        </h1>
        <div class="flex w-full flex-col lg:flex-row items-center justify-center border border-resla-ebony-70 rounded-lg bg-resla-ebony-90">
            <AutoComplete class="w-full" :input-class="'border-b lg:border-b-0 lg:border-r border-resla-ebony-70 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none'" id="location-se" label="location"
                :value="value" :options="options" valueKey="city" />
            <DatePicker :id="'pickup'" label="Pickup Date" class="w-full" :value="pickupDate" :inputClass="'border-b lg:border-b-0 lg:border-r border-resla-ebony-70'"
                placeHolder="Dates" :picker-class="'rounded-lg overflow-hidden'" @input="handlePickupDate"/>
            <DatePicker :id="'return'" label="Return Date" class="w-full" :value="returnDate" :min-date="minReturnDate" :inputClass="'border-b lg:border-b-0 lg:border-r border-resla-ebony-70'"
                placeHolder="Dates" :picker-class="'rounded-lg overflow-hidden'"  @input="handleReturnDate"/>
            <div class=" py-2.5 lg:py-0 px-2.5 bg-resla-ebony-90 w-full lg:w-max rounded-b-lg lg:rounded-none">
                <CtaButton trailing-icon size="small" class="hidden lg:block"></CtaButton>
                <CtaButton trailing-icon size="small" class="block lg:hidden w-full">View
                    Vehicles</CtaButton>
            </div>
        </div>
    </div>
</template>

<script>
import AutoComplete from "@/components/AutoComplete.vue";
import DatePicker from "@/components/DatePicker.vue";
import CtaButton from "@/components/base/CtaButton.vue";

export default {
    name: "HeroSection",
    components: {
        AutoComplete,
        DatePicker,
        CtaButton
    },
    data() {
        return {
            // TODO:fetch locations from api
            options: [
                { city: "Chandler", state: "AZ", label: "Chandler, AZ" },
                { city: "Phoenix", state: "AZ", label: "Phoenix, AZ" },
                { city: "Tempe", state: "AZ", label: "Tempe, AZ" },
                { city: "Mesa", state: "AZ", label: "Mesa, AZ" },
                { city: "Glendale", state: "AZ", label: "Glendale, AZ" },
                { city: "Gilbert", state: "AZ", label: "Gilbert, AZ" },
                { city: "Scottsdale", state: "AZ", label: "Scottsdale, AZ" },
                { city: "Overland Park", state: "KS", label: "Overland Park, KS" },
                { city: "Olathe", state: "KS", label: "Olathe, KS" },
                { city: "Liberty", state: "MO", label: "Liberty, MO" },
                { city: "Chesterfield", state: "MO", label: "Chesterfield, MO" },
                { city: "St. Charles", state: "MO", label: "St. Charles, MO" },
                { city: "Lebanon", state: "MO", label: "Lebanon, MO" },
                { city: "Independence", state: "MO", label: "Independence, MO" },
                { city: "Brentwood", state: "MO", label: "Brentwood, MO" },
                { city: "Olivette", state: "MO", label: "Olivette, MO" },
                { city: "Kansas City", state: "MO", label: "Kansas City, MO" },
                { city: "St. Louis", state: "MO", label: "St. Louis, MO" },
                { city: "Fenton", state: "MO", label: "Fenton, MO" },
                { city: "Valley Park", state: "MO", label: "Valley Park, MO" },
                { city: "Columbia", state: "MO", label: "Columbia, MO" },
                { city: "Las Vegas", state: "NV", label: "Las Vegas, NV" },
                { city: "Brentwood", state: "TN", label: "Brentwood, TN" },
                { city: "Nashville", state: "TN", label: "Nashville, TN" },
                { city: "Houston", state: "TX", label: "Houston, TX" },
                { city: "Bee Cave", state: "TX", label: "Bee Cave, TX" },
                { city: "Euless", state: "TX", label: "Euless, TX" },
                { city: "Fort Worth", state: "TX", label: "Fort Worth, TX" },
                { city: "San Antonio", state: "TX", label: "San Antonio, TX" },
                { city: "Arlington", state: "TX", label: "Arlington, TX" },
                { city: "Grand Prairie", state: "TX", label: "Grand Prairie, TX" },
                { city: "Austin", state: "TX", label: "Austin, TX" },
                { city: "Dallas", state: "TX", label: "Dallas, TX" },
            ],
            value: "Tempe",
            pickupDate:new Date(),
            returnDate:null
        };
    },
    computed:{
        minReturnDate() {
      if (!this.pickupDate) return new Date();
      const minDate = new Date(this.pickupDate);
      minDate.setDate(minDate.getDate() + 1);
      return minDate;
    },
    },
    methods:{
        handlePickupDate(value){
           this.pickupDate = value
        },
        handleReturnDate(value){
          this.returnDate = value
        }
    }
};
</script>
