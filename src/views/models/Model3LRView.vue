<template>
  <div class="model3lr">
    <VehicleSection
      model="Model 3 Long Range"
      acceleration="4.2 seconds"
      top_speed="145 mph"
      range="333 mile"
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
  name: "Model3LRView",
  data: function () {
    return {
      availability: "all locations",
      feature_one:
        "A long-range battery and high-efficiency design enables the Model 3 Long Range to go the distance. Whether you're commuting or taking a road trip, this vehicle offers the comfort and security to be able to go the extra mile. The Model 3 Long Range can travel up to 333 miles on one charge.",
      feature_two:
        "The Model 3 Long Range received 5-star <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.nhtsa.gov/vehicle/2023/TESLA/MODEL%2525203/4%252520DR/AWD'>NHTSA</a> safety ratings in every category and subcategory, making it one of the safest vehicles on the road. With its advanced crash avoidance technology and high-strength reinforcement structure, you can feel confident and secure behind the wheel.",
      feature_three:
        "Model 3 Long Range’s dual motor all wheel drive offers the ultimate performance, stability, and control. With two independent motors, it can dynamically distribute power between the front and rear wheels for exceptional handling and grip.",
      feature_four: "",
      feature_one_header: "Endurance",
      feature_two_header: "Safety",
      feature_three_header: "Dual Motor All Wheel Drive",
      feature_four_header: "",
      images: ["Resla-TeslaModel3.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
