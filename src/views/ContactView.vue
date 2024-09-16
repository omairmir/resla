<template>
  <div class="flex flex-col w-full px-10 border-x border-primary-700 pt-20 gap-10">
    <div class="flex flex-col gap-2 text-primary-100  text-left lg:text-center ">
      <h1 class="font-medium text-[56px] leading-[56px] tracking-negative-3">
        Get in Touch. Anytime.
      </h1>
      <p class="font-urbanist font-normal text-xl leading-8">
        We’re always here to help. Don’t hesitate to contact us about any<br />
        questions your may have about your booking or your trip.
      </p>
    </div>
    <div class="flex flex-col lg:flex-row bg-primary-900 border border-primary-700 rounded-lg">

      <!-- Phone Button -->
      <a href="tel:+14804394079"
        class="hover:text-primary-200 flex flex-col w-full items-center text-center gap-2 px-10 py-6 border-b lg:border-b-0 lg:border-r border-primary-700 text-primary-200 hover:bg-primary-800">
        <PhoneIcon class="size-6" />
        <span class="block font-medium text-base leading-[25.6px]">+1 (480) 439 4079</span>
        <span class="block text-xs text-normal font-urbanist leading-[19.2px]">Call or Text us anytime</span>
      </a>

      <!-- Email Button -->
      <a href="mailto:support@resla.com"
        class="hover:text-primary-200 flex flex-col w-full items-center text-center gap-2 px-10 py-6 border-b lg:border-b-0 lg:border-r border-primary-700 text-primary-200 hover:bg-primary-800">
        <EmailIcon class="size-6" />
        <span class="block font-medium text-base leading-[25.6px]">support@resla.com</span>
        <span class="block text-xs text-normal font-urbanist leading-[19.2px]">Email us for quick inquiries</span>
      </a>

      <!-- Address Button -->
      <button type="button"
        class="hover:text-primary-200 flex flex-col w-full items-center text-center gap-2 px-10 py-6 border-primary-700 text-primary-200 hover:bg-primary-800">
        <PinIcon class="size-6" />
        <span class="block font-medium text-base leading-[25.6px]">1400 S Hwy Dr, Fenton, MO, 63026</span>
        <span class="block text-xs text-normal font-urbanist leading-[19.2px]">Come visit us at our office in
          Arizona</span>
      </button>

    </div>

    <div class="flex flex-col lg:flex-row item-center justify-center gap-6">
      <!-- Heading -->
      <h3 class="text-2xl font-medium leading[38.4px] tracking-negative-2 text-primary-100">
        Need quick answers?
      </h3>

      <!-- TODO:common button here - Internal Links -->
      <div class="flex gap-x-4">
        <router-link tag="button" to="/faqs"
          class="p-0 m-0 text-base font-semibold flex items-center justify-center text-center gap-1 text-primary-400">
          Tutorials & FAQs
          <span class="block">→</span>
        </router-link>
        <router-link tag="button" to="/policies"
          class="p-0 m-0 text-base font-semibold flex items-center justify-center text-center gap-1 text-primary-400">
          Policies
          <span class="block">→</span>
        </router-link>

      </div>

    </div>
    <!--CTA -->
    <CtaSection></CtaSection>
  </div>
</template>

<script>
import CtaSection from '@/components/home/CtaSection.vue';
import EmailIcon from '@/components/icons/EmailIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import PinIcon from "@/components/icons/PinIcon.vue"
export default {
  name: "ContactView",
  components: {
    CtaSection,
    PinIcon,
    PhoneIcon,
    EmailIcon
  }
};
</script>