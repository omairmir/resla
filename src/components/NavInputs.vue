<template>
    <div
        class="relative flex items-center max-w-full lg:max-w-[25rem] bg-resla-ebony-90 border border-resla-ebony-70 rounded-lg">
        <!--location dropdown-->
        <AutoComplete class="!static w-full" :input-class="'!min-h-max py-2 border-r border-resla-ebony-70'"
            :dropdown-class="'top-14 lg:top-[70px]'" id="location" :value="defaultLocation" :options="options" is-nav
            valueKey="city" />
        <!--date picker-->
        <RangePicker :id="datePickerID" class="!static w-full" isNav :is-scrolled-past="isScrolledPast" :inputClass="'py-2 lg:border-r border-resla-ebony-70'"
            :picker-class="'rounded-lg overflow-hidden top-14 lg:top-[70px]'" placeHolder="Dates" />
        
        <CtaButton variant="tertiary" trailing-icon class="p-2"/>
    </div>
</template>

<script>
import RangePicker from "@/components/RangePicker.vue";
import AutoComplete from "@/components/AutoComplete.vue";
import CtaButton from "./base/CtaButton.vue";
export default {
    name: "NavInputs",
    components: {
        RangePicker,
        AutoComplete,
        CtaButton
    },
    props: {
        datePickerID: {
            type: String,
            required: true,
        },
        isScrolledPast: {
            type: Boolean,
            default: false,
        },
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
            defaultLocation: "Tempe",
        };
    },
    methods: {},
};
</script>
