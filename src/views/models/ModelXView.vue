<template>
  <div class="modelX">
    <VehicleSection
      model="Model X"
      acceleration="3.8 seconds"
      top_speed="163 mph"
      range="348 mile"
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
  name: "ModelXView",
  data: function () {
    return {
      availability: "select locations",
      feature_one:
        "The Model X boasts an impressive and spacious interior, making it the perfect vehicle for families or individuals who need plenty of room. With ample headroom, legroom, and cargo space, the Model X is designed for maximum comfort and convenience.",
      feature_two:
        "With a 5-star <a class='h6' target='_blank' style='color: #0000FF !important; text-decoration: underline !important;' href='https://www.nhtsa.gov/vehicle/2021/TESLA/MODEL%252520X%2525205-SEAT/SUV/AWD'>NHTSA</a> safety rating in every category and subcategory, the Model X is one of the safest SUVs on the road. From its advanced collision avoidance technology to its reinforced structure, and advanced airbags, the Model X was carefully crafted to protect you and your passengers.",
      feature_three:
        "As the most energy efficient SUV on the planet, the Model X is perfect for those who are looking for a vehicle that is both environmentally friendly and spacious. The Model X delivers smooth, quiet performance with no emissions, making it an excellent choice for eco-conscious drivers. There is enough battery power in this vehicle to cover a range of 348 miles.",
      feature_four:
        "With a 5000 lb. towing capacity and abundant storage, the Model X is designed for maximum versatility. The automatic falcon wing doors also add to its impressive functionality, making it easier than ever to access the spacious interior.",
      feature_one_header: "Spaciousness",
      feature_two_header: "Safety",
      feature_three_header: "Efficiency",
      feature_four_header: "Utility",
      images: ["Resla-TeslaModelX.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
