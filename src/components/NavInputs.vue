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
        <button type="button" class="hidden lg:flex p-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.303 4.46967C10.5959 4.17678 11.0708 4.17678 11.3637 4.46967L16.3637 9.46967C16.6566 9.76256 16.6566 10.2374 16.3637 10.5303L11.3637 15.5303C11.0708 15.8232 10.5959 15.8232 10.303 15.5303C10.0101 15.2374 10.0101 14.7626 10.303 14.4697L14.0227 10.75H4.16667C3.75246 10.75 3.41667 10.4142 3.41667 10C3.41667 9.58579 3.75246 9.25 4.16667 9.25H14.0227L10.303 5.53033C10.0101 5.23744 10.0101 4.76256 10.303 4.46967Z"
                    fill="#44403C" />
            </svg>
        </button>
    </div>
</template>

<script>
import RangePicker from "@/components/RangePicker.vue";
import AutoComplete from "@/components/AutoComplete.vue";
export default {
    name: "NavInputs",
    components: {
        RangePicker,
        AutoComplete,
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
