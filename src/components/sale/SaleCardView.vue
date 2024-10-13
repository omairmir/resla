<template>
  <div class="sale-card-view-container flex flex-col gap-6">
    <SaleFilter :selected="selectedFilter" @onChange="getSelectedFiltered "/>
    <div class="flex flex-col">
      <div v-for="(vehicle, index) in filteredVehicles" :key="index">
        <SaleCard :image="vehicle.model.public_image_link" :model="vehicle.model.name" :vin="vehicle.vin" :color="vehicle.color"
                  :year="vehicle.year" contact="Contact"/>
      </div>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <div class="grid grid-cols-2 md:grid-cols-3 w-full justify-between items-center gap-4">
        <div class="flex justify-start ">
          <CtaButton :leadingIcon="true" size="small" variant="primary" @click.stop="prevPage" class="w-full md:w-max"
                     :isDisabled="!hasPreviousPages">Previous
          </CtaButton>
        </div>
        <div
            class="hidden md:flex items-center justify-center mt-2.5 font-urbanist text-base leading-6.5 text-primary-400 font-normal w-full whitespace-nowrap">
          Displaying <span class="ml-1 font-semibold">{{ filteredVehicles.length }} of {{ vehicles.length }}</span>
        </div>
        <div class="flex justify-end">
          <CtaButton :trailingIcon="true" size="small" variant="primary" class="w-full md:w-max" @click.stop="nextPage" :isDisabled="!hasMorePages">
            Next
          </CtaButton>
        </div>
      </div>
      <div
          class="flex items-center justify-center md:hidden mt-2.5 font-urbanist text-base leading-6.5 text-primary-400 font-normal w-full whitespace-nowrap">
        Displaying <span class="ml-1 font-semibold">{{ filteredVehicles.length }} of {{ vehicles.length }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import SaleCard from "@/components/base/SaleCard";
import SaleFilter from "@/components/sale/SaleFilter";
import CtaButton from "@/components/base/CtaButton";

export default {
  name: "SaleCardView",
  components: {
    SaleFilter,
    SaleCard,
    CtaButton
  },
  data: function () {
    return {
      selectedFilter: [],
      currentPage: 1,
      itemsPerPage: 20,
      vehicles: [
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Blue",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Black",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Black",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Black",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Black",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model Y",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Black",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "White",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model S",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model S",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model S",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model S",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Red",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model X",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
        {
          color: "Gray",
          rack_rate: 5900,
          vin: "5YJ3E1EA9PF698982",
          location: {
            name: "Nashville, TN (1705 Hayes St)",
            timezone: "America/Chicago",
            state: "TN",
            city: "Nashville",
            latitude: 36.154635079,
            longitude: -86.7952821315
          },
          images: [
            "https://public-resla-assets.s3.amazonaws.com/Model+3.png"
          ],
          model: {
            name: "Model 3",
            public_image_link: "https://public-resla-assets.s3.amazonaws.com/Model+3.png",
            zero_to_sixty_mph_seconds: 2,
            top_speed_mph: 22,
            mile_range: 222,
            drivetrain: "AWD",
            seating_capacity: 5
          },
          odometer: 3808,
          year: 2021
        },
      ],
    };
  },
  computed: {
    hasMorePages() {
      return this.currentPage * this.itemsPerPage < this.vehicles.length;
    },
    hasPreviousPages() {
      return this.currentPage > 1;
    },
    filteredVehicles() {
      const { selectedFilter, vehicles, currentPage, itemsPerPage } = this;

      const paginate = (list) => {
        const start = (currentPage - 1) * itemsPerPage;
        return list.slice(start, start + itemsPerPage);
      };

      if (selectedFilter.length === 0) {
        return paginate(vehicles);
      }

      let filteredVehicles = vehicles.filter((vehicle) => {
        return selectedFilter.some((selected) => {
          const modelMatch = vehicle.model.name.toLowerCase().includes(selected.toLowerCase());
          const colorMatch = vehicle.color.toLowerCase().includes(selected.toLowerCase());
          return modelMatch || colorMatch;
        });
      });

      return paginate(filteredVehicles);
    },
  },
  methods: {
    getSelectedFiltered(filter) {
      this.selectedFilter = filter
    },
    nextPage() {
      if (this.hasMorePages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    }
  }
}
</script>

<style scoped>

</style>