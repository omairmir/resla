<template>
  <div class="modelS">
    <VehicleSection
      model="Model S"
      acceleration="3.1 seconds"
      top_speed="200 mph"
      range="405 miles"
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
  name: "ModelSView",
  data: function () {
    return {
      availability: "select locations",
      feature_one:
        "The Model S is a true powerhouse on the road, capable of accelerating from 0 to 60 miles per hour in just 3.1 seconds. This electric vehicle boasts unparalleled speed and agility, delivering an electrifying driving experience. ",
      feature_two:
        "We offer models built for endurance, with batteries that can travel 405 miles on a single charge.The Model S has the ability to take you on adventures without the need to stop frequently and refuel.",
      feature_three:
        "The Model S prioritizes safety in every aspect of its design, the floor-mounted battery pack and reinforced structure allows for maximum protection from all sides of the vehicle. Every Tesla includes top-of-the-line safety features like automatic emergency braking and blind spot monitoring to keep you on the road. ",
      feature_four: "",
      feature_one_header: "Speed",
      feature_two_header: "Endurance",
      feature_three_header: "Safety",
      feature_four_header: "",
      images: ["Resla-TeslaModelS.png"],
    };
  },
  components: {
    VehicleSection,
  },
};
</script>
