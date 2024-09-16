<template>
  <div class="model3">
    <VehicleSection
      model="Model 3"
      acceleration="5.8 seconds"
      top_speed="162 mph"
      range="272 mile"
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
  name: "Model3View",
  data: function () {
    return {
      availability: "all locations",
      feature_one:
        "The Model 3 received 5-star safety ratings in every category and subcategory, making it one of the safest vehicles on the road. With its advanced crash avoidance technology and high-strength reinforcement structure, you can feel confident and secure behind the wheel.",
      feature_two:
        "Model 3’s electric power and torque comes from the rear wheels.  <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.caranddriver.com/research/a31861525/rear-wheel-drive-cars/'>Rear-wheel drive</a> (RWD) offers a fluid and smooth ride making it the perfect vacation car to cruise around town.",
      feature_three:
        "Complete with Tesla’s <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.resla.com/blog/tesla-autopilot-navigating-the-road-to-self-driving'>Autopilot</a> feature, the Model 3 offers the convenience to assist with monotonous driving. Autopilot allows the vehicle to steer, accelerate, and break automatically within its lane without the driver having to control a thing.",
      feature_four: "",
      feature_one_header: "Safety",
      feature_two_header: "Rear-Wheel Drive",
      feature_three_header: "Advanced Driving",
      feature_four_header: "",
      images: ["Resla-TeslaModel3.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
