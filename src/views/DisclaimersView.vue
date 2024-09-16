<template>
  <div class="border-x border-primary-700">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-6 text-left">
      <!--heading-->
      <div class="flex flex-col gap-3">
        <h1
          class="font-medium text-heading-1 leading-10 tracking-negative-3 text-primary-100"
        >
          Legal Disclaimers.
        </h1>
        <p class="block font-urbanist text-base text-primary-100">
          Last Updated December 15, 2023
        </p>
      </div>
      <hr color-primay-700/>
      <!--content-->
      <div class="flex flex-col gap-6">
        <p class="block font-urbanist font-medium text-base text-primary-300">
        Resla has not independently verified any of the statistics or safety
        ratings provided for the vehicles on this website. Resla is not liable
        for any personal injury or damages that may result from relying on these
        ratings. Additionally, Resla does not guarantee the quality of the
        products or services provided by the vehicle manufacturer or any
        third-party. Resla is not responsible for any defects or performance
        issues that may arise with any vehicle rented from us.
      </p>
      <p class="block font-urbanist font-medium text-base text-primary-300">
        All vehicles are subject to availability and may change on short notice.
        Resla does not guarantee the make, model, year, color, or any other
        specific feature of the vehicle you reserve. Similarly, accessories
        provided with the vehicle, including but not limited to third-party
        adapters, chargers, or any other add-ons, are also subject to
        availability and may not always be provided as expected.
      </p>
      <p class="block font-urbanist font-medium text-base text-primary-300">
        By renting a vehicle from Resla, the customer acknowledges and assumes
        all risks associated with Tesla's technologies (including current and
        future recalls), including autopilot and self-driving features. Resla is
        not liable for any issues, including performance or safety concerns,
        arising from these technologies or recalls. Customers are advised to use
        these features at their own discretion and peril, and agree to indemnify
        Resla against any claims or damages resulting from their use.
      </p>
      <p class="block font-urbanist font-medium text-base text-primary-300">
        Additionally, customers should be aware that the weather conditions and
        the utilization of third-party services may adversely impact the
        vehicle's miles per charge. Factors such as temperature extremes,
        terrain, and the use of external services and accessories can affect the
        overall efficiency and performance of the vehicle's battery. Resla is
        not responsible for any reduction in miles per charge due to these
        external factors.
      </p>
      </div>
    </div>
   <!--cta section-->
   <LegalPageCta></LegalPageCta>
  </div>
  
</template>

<script>
import LegalPageCta from '@/components/LegalPageCta.vue'

export default {
  name: "DisclaimersView",
  components:{
    LegalPageCta
  },
};
</script>
