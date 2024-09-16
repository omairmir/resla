<template>
  <div class="modelY">
    <VehicleSection
      model="Model Y"
      acceleration="6.6 seconds"
      top_speed="135 mph"
      range="260 mile"
      drivetrain="Rear Wheel Drive"
      :feature_one="feature_one"
      :feature_one_header="feature_one_header"
      :feature_two="feature_two"
      :feature_two_header="feature_two_header"
      :feature_three="feature_three"
      :feature_three_header="feature_three_header"
      :feature_four="feature_four"
      :feature_four_header="feature_four_header"
      :images="images"
      :availability="availability"
    ></VehicleSection>
  </div>
</template>

<script>
// @ is an alias to /src
import VehicleSection from "@/components/vehicles/VehicleSection.vue";

export default {
  name: "ModelYView",
  data: function () {
    return {
      availability: "all locations",
      feature_one:
        "<a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.resla.com/blog/what-you-dont-know-about-the-tesla-model-y'>The Model Y</a> provides maximum usage, allowing for up to 7 passengers and their cargo. Its elevated seating position and low dash creates an even more spacious feel for the driver and provides a wider view of the road ahead.",
      feature_two:
        "In addition to its impressive size, the Model Y’s flexible modular design, allows you to configure the car for whatever needs your adventures hold. The seats independently lay flat to cater to various shaped cargo and accommodate a diverse size of passengers.",
      feature_three:
        "Like all Teslas, safety is a top priority. It received the <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.iihs.org/ratings/vehicle/tesla/model-y-4-door-suv/2022'>IIHS</a> Top Safety Pick+ award with top ratings in all crashworthiness and front-crash prevention categories.",
      feature_four: "",
      feature_one_header: "Space",
      feature_two_header: "Versatility",
      feature_three_header: "Safety",
      feature_four_header: "",
      images: ["Resla-TeslaModelY.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
