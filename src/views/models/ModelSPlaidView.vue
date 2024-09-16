<template>
  <div class="modelSPlaid">
    <VehicleSection
      model="Model S Plaid"
      acceleration="1.99 seconds"
      top_speed="145 mph"
      range="396 mile"
      drivetrain="Tri-Motor AWD"
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
  name: "ModelSPlaidView",
  data: function () {
    return {
      availability: "select locations",
      feature_one:
        "With a peak horsepower of 1,020, this car was made for power thanks to its specialized tri-motor all wheel drive. It boasts the quickest acceleration out of any vehicle on the planet.",
      feature_two:
        "The build of this model was focused on power, but there is no lack of style inside or out. Its iconic silhouette classically balances the refreshed exterior for a sleek yet sporty look.",
      feature_three:
        "Improved aerodynamics allows this car to efficiently take corners and provide the speed car lovers are looking for. It proudly features the lowest drag coefficient on the planet at just .208 Cd. Coupled with performance tires, this vehicle transfers maximum power to the road giving the driver maximum control and confidence.",
      feature_four: "",
      feature_one_header: "Power",
      feature_two_header: "Style",
      feature_three_header: "Efficiency",
      feature_four_header: "",
      images: ["Resla-TeslaModelS.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
