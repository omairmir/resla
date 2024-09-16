<template>
  <div class="modelYlr">
    <VehicleSection
      model="Model Y Long Range"
      acceleration="4.8 seconds"
      top_speed="135 mph"
      range="330 mile"
      drivetrain="Dual Motor AWD"
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
  name: "ModelYLRView",
  data: function () {
    return {
      availability: "all locations",
      feature_one:
        "With just one charge, the Model Y Long Range can travel up to 330 miles, allowing you to explore at your leisure. A long-range battery and high-efficiency design enable the Model Y Long Range to go the distance.",
      feature_two:
        "Like all Teslas, safety is a top priority. It received the IIHS Top Safety Pick+ award with top ratings in all crashworthiness and front-crash prevention categories. This model is ideal for <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.resla.com/blog/your-first-time-driving-a-tesla'>first-time Tesla drivers</a>.",
      feature_three:
        "Model Y Long Range’s dual motor all wheel drive offers the ultimate performance, stability, and control. With two independent motors, it can dynamically distribute power between the front and rear wheels for exceptional handling and grip.",
      feature_four: "",
      feature_one_header: "Endurance",
      feature_two_header: "Safety",
      feature_three_header: "Dual Motor All Wheel Drive",
      feature_four_header: "",
      images: ["Resla-TeslaModelY.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
