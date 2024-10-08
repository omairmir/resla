<template>
  <div class="sale-card-view-container flex flex-col gap-6">
    <SaleFilter :selected="selectedFilter" @onChange="(filter) => selectedFilter = filter"/>
    <div class="flex flex-col">
      <div v-for="(vehicle, index) in filteredVehicles" :key="index">
        <SaleCard :image="vehicle.image" :model="vehicle.Model" :vin="vehicle.Vin" :color="vehicle.Color" :year="vehicle.Year" contact="Contact"/>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <CtaButton :leadingIcon="true" size="small" variant="primary" @click.stop="prevPage" :isDisabled="!hasPreviousPages">Previous</CtaButton>
      <div class="flex flex-row justify-center items-center gap-2">
        <div class="leading-6 text-sm text-resla-ebony-40 font-normal font-urbanist">Displaying</div>
        <div class="text-sm text-resla-ebony-40 font-semibold">{{getPageData}}</div>
      </div>
      <CtaButton :trailingIcon="true" size="small" variant="primary" @click.stop="nextPage" :isDisabled="!hasMorePages">Next</CtaButton>
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
        {Vin: "5YJ3E1EAXPF608027", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF655293", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF653355", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF695995", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF695615", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF699395", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF638421", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF655824", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF704385", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF695174", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF607642", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF704569", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF696798", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF601986", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF703052", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF706983", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF653741", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF694208", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF604401", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF607271", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF703028", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF648446",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF657196", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF614306", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF608807", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF609001", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF643678", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF656402", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEE0PA040875",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF700925", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF641695", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF697873", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF624889", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF657480", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {
          Vin: "7SAYGDEE9PA038140",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF656914", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF604551", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF605835", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF702825", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF619382", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF643365", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF657148", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF642348", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF657842", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF698911", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF641245", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF612876", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF656847", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF655551", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF647697", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF608154", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED1PF958497", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF606482", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF644362", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJSA1E62PF499372", Model: " S", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE9PF642059",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF655531", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF644660", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF700747", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF691367", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF701314", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EBXNF337816",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA4PF700458", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF611234", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF696446", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF692836", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE8PF646166",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE8PF643915",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF696877", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE3PF648004",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA0PF546203", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED2PF959402", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE7PF641153",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EAXPF657907", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF702592", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF696466", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF624174", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEEXPF641325",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB8PF392204",
          Model: " 3 Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA6PF645365", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF685317", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF545476", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF656856", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEE9PA036551",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF696295", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEE5PA041343",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF697463", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF626048", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF656299", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB5NF337514",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF613571", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF692693", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED5PF965310", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF697264", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF698630", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF700161", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF640721", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF697290", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB9NF337807",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF678735", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF657418", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF654631", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF657474", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF637963", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF695828", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEEXPF641485",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGDEE1PA040481",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDEDXPF955856", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE0PF642757",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF699217", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED3PF963488", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB8NF338947",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB2NF346588",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB0NF342104",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED0PF962587", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF698213", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB6NF319040",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE8PF640982",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB1NF331452",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF699228", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF656631", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF701123", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE1PF642153",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF699160", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB3NF336541",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF699694", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE9PF641297",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB6NF321791",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE9PF641154",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF708258", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF613059", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB6NF321841",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB2NF338989",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB5NF330952",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA1PF698376", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF699438", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF642291",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE8PF641498",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF611744", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EBXNF344667",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE9PF642613",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF701813", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE7PF648359",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF695894", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE1PF641312",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF700569", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EBXNF338996",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE1PF641388",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA6PF696977", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE5PF642138",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF701009", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF661360",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB9NF345650",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF705624", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB4NF325337",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA6PF702700", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF639420", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF698624", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF698652", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF641335",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB9NF327522",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF702073", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF701845", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF706346", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF657825", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF699962", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF702555", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF654618", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF658471", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEE9PF620788",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA0PF704619", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF662321", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF697394", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF701161", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF654340", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF709365", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF659003", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF660416", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF657454", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF654656", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF642548",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED2PF965278", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF701859", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF655565", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF652961", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB3PF386696",
          Model: " 3 Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF627555", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF661387", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED7PF946760", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF706290", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF709052", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF654567", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF700782", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF659023", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF710090", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF655542", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EBXNF337198",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA4PF701092", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED8PF964863", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF656410", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF655296", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF658991", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF656081", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF656426", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF662311", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF706329", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF657175", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF660127", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF702558", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB9NF277382",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF654798", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EB3NF338502", Model: " 3", Year: 2022, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF705847", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED0PF961472", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3EIEA0PF707570", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF659873", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF654603", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF657215", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF691302", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED1PF943174", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF652296", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF698363", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF700621", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF657654", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED9PF944329", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF657656", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF658630", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF679540", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF660410", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF684813", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF697809", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF691788", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF657210", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEE5PA044551",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF697497", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF696842", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF706074", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF654409", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE7PF644330",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF656583", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF656042", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF701082", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF657969", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF702250", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF661682", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF696684", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF658547", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF700988", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF683935", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF686060", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF655791", Model: " 3", Year: 2023, Color: "Blue", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF655044", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF700930", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF661114", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF696988", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB0NF344709",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED1PF964400", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF699154", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF698635", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF696040", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF678025", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED2PF944365", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF695593", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF613424", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF697488", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF696391", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF702078", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF692498", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF696490", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF694811", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF697057", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF695830", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF657864", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF694430", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF695171", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEE0PF624311",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF699539", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB4NF328674",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGDEEXPA041743",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF705352", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF696614", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF701160", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED6PF946068", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF692024", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE0PF643987",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED2PF962607", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF699194", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF545180", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF705152", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF693767", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF626073", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGAEE3PF642820",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF707886", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF698278", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED6PF947320", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF608414", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE5PF641166",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF704139", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF655322", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF700941", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF698886", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF692941", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF697850", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF693403", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED3PF961076", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF697292", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED2PF957293", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF650769", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED2PF962526", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDEDXPF944971", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF702789", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF702063", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF702005", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF695276", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF656817", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED8PF959498", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF701080", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF699446", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF699164", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF695880", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEFXPA049494",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "7SAYGDED4PF956422", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF703431", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF692023", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED6PF945373", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED7PF959167", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED1PF945717", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED7PF948122", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF625319", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF700526", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF698704", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF701190", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEF1PA049514",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF660147", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED3PF956069", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB8NF278636",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA0PF702076", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEEXPA038809",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EAXPF654781", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED0PF966333", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED1PF965319", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF698982", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF702316", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB0NF349165",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF606877", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEF0PA049522",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA6PF698387", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED5PF960706", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED3PF956847", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF705817", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF656646", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF698097", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED2PF967029", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED4PF962608", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF657976", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF691297", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJXCAE49JF122561", Model: " X", Year: 2018, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF695154", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEF9PA049096",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE2PF643912",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED8PF956018", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF674660", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF693743", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF677554", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EB0NF345178", Model: " 3", Year: 2022, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDEDXPF960491", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEF5PA049323",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "5YJ3E1EA7PF680965", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDEDXPF947126", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE5PF641152",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDEDXPF964802", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB6NF327252",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED4PF964858", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF694102", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF655576", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED1PF960461", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED4PF966366", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF693318", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED9PF947585", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDEDXPF944680", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF677200", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED3PF963877", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF702251", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF694432", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EB6NF274634", Model: " 3", Year: 2022, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB8NF319234",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF657473", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF655767", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB3NF336894",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF657436", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF708485", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF608418", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF654610", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF706047", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF700604", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF705610", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED5PF956705", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED8PF963986", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF696645", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB1NF343780",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA0PF692021", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF602161", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF661363", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF651005", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF698259", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF705153", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF693379", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF699515", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEF1PA048850",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF657652", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF695289", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE8PF642280",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA5PF620053", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF699107", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED7PF963932", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE4PF642423",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF657173", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB6NF322911",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE8PF661007",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB1NF316143",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF639305", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF661995", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF658973", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB8NF326314",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EAXPF705776", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED1PF966356", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED1PF962176", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED6PF966367", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEF6PA049332",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF699990", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF656083", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF691288", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB9NF319226",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EAXPF654599", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "5YJ3E1EB6NF336856",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF698276", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF658637", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF657835", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF657740", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF700148", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF696056", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF658720", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF697629", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF696451", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "5YJ3E1EB0NF328364",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED2PF949551", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EAXPF702828", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF696399", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "7SAYGDED6PF964876", Model: " Y", Year: 2023, Color: "Black", image: 'model-s'},
        {
          Vin: "7SAYGDEE6PA035941",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGDEEXPA034985",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED3PF965273", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF612274", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF695162", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED9PF962605", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF701870", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF698898", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA3PF702072", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF699273", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF695868", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "7SAYGDED0PF964856", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA2PF627347", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEE6PF626497",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {
          Vin: "5YJ3E1EB9NF329805",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EB8PF391716", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF655501", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJSA1E51NF492515", Model: " S", Year: 2022, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB3NF336295",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF705551", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGDEE4PA037056",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF691375", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF651223", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAXCDE55PF371753", Model: " X", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF691986", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF696261", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEF2PA049604",
          Model: " Y Long Range",
          Year: 2023,
          Color: "Grey", image: 'model-s'
        },
        {Vin: "5YJ3E1EA9PF656344", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA1PF694800", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE9PF644121",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA2PF700703", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "7SAYGDED9PF942564", Model: " Y", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGDEE7PA041649",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA0PF705351", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF659846", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE0PF641155",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE2PF641156",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA7PF691755", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "5YJ3E1EB1NF344668",
          Model: " 3 Long Range",
          Year: 2022,
          Color: "White", image: 'model-s'
        },
        {
          Vin: "7SAYGAEE1PF642007",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA4PF656851", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
        {Vin: "5YJ3E1EA9PF697637", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF705670", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA6PF655068", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA0PF696067", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE3PF648357",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "7SAYGDED6PF961783", Model: " Y", Year: 2023, Color: "White", image: 'model-s'},
        {
          Vin: "7SAYGAEE2PF642162",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA3PF642021", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA7PF655032", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {
          Vin: "7SAYGAEE4PF642406",
          Model: " Y Long Range",
          Year: 2023,
          Color: "White", image: 'model-s'
        },
        {Vin: "5YJ3E1EA8PF697404", Model: " 3", Year: 2023, Color: "White", image: 'model-s'},
        {Vin: "5YJ3E1EA8PF643939", Model: " 3", Year: 2023, Color: "Red", image: 'model-s'},
        {Vin: "5YJ3E1EA5PF657426", Model: " 3", Year: 2023, Color: "Grey", image: 'model-s'},
        {Vin: "5YJ3E1EA4PF662844", Model: " 3", Year: 2023, Color: "Black", image: 'model-s'},
      ],
    };
  },
  computed: {
    hasMorePages() {
      return this.currentPage * this.itemsPerPage < this.vehicles.length;
    },
    getPageData() {
      return `${((this.currentPage - 1) * this.itemsPerPage) + 1} of ${this.vehicles.length}`
    },
    hasPreviousPages() {
      return this.currentPage > 1;
    },
    filteredVehicles() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.vehicles.slice(start, end);
    },
  },
  methods:{
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