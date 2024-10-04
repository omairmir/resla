<template>
  <div>
    <div v-if="filteredFaqs.length > 0" class="border border-resla-ebony-70 rounded-xl overflow-hidden">
      <FaqCard v-for="(faq, index) in filteredFaqs" :key="index" :question="faq.question" :answer="faq.answer"
        :tags="faq.tags">
      </FaqCard>
    </div>
    <div v-else class="flex items-center justify-center h-[400px]">
      No FAQ's Found
    </div>
  </div>

</template>

<script>
import FaqCard from "@/components/base/FaqCard";
export default {
  name: "FaqsComponent",
  props: {
    limited: {
      type: Boolean,
      default: false
    },
    selectedFilter: {
      type: Array,
      default: () => []
    }
  },
  components: {
    FaqCard
  },
  data() {
    return {
      //TODO: need to update faqs
      faqs: [
        {
          question: 'How old do you have to be to rent a Resla?',
          answer: 'You must be at least 21 years of age. Anyone between the ages of 21 and 25 may incur an additional daily fee of $30/day.',
          tags: [{ name: "Driving", value: "driving" }]
        },
        {
          question: 'What fees does Resla charge?',
          answer: 'Resla was founded out of frustration with the ambiguous structure of traditional rental car companies. In light of that, here is a complete list of our (potential) fees:',
          tags: [{ name: 'Booking' }, { name: 'Fees' }]
        },
        {
          question: 'Is auto insurance required to rent with Resla?',
          answer: 'Yes, a state minimum liability insurance plan is required to rent a vehicle. Our preference is for renters to have full comprehensive and collision insurance. If you do not have insurance, unfortunately, we cannot rent to you.',
          tags: [{ name: "Insurance", value: "insurance" }]
        },
        {
          question: 'Does the damage waiver cover damage to other vehicles?',
          answer: 'The damage waiver does not cover damage caused to another vehicle, however, the minimum state liability insurance that we require would cover any damage to another person’s vehicle.',
          tags: [{ name: "Insurance", value: "insurance" }]
        },
        {
          question: 'Do I need a physical key?',
          answer: 'No, our support team will send you a digital key via text before your rental begins. It will remain active for the duration of your trip.',
          tags: [{ name: "Digital Key", value: "digital_key" }]
        },
        {
          question: 'Is there a limit on the number of miles I drive?',
          answer: 'Each rental day has a mileage allowance of 200 miles, averaged out over the duration of the rental period. We charge excessive mileage at a rate of $0.17 per mile.',
          tags: [{ name: 'Mile Range' }]
        },
        {
          question: 'Do I still need personal car insurance if I opt in for the damage waiver?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: [{ name: "Driving", value: "driving" }, { name: 'Insurance' }]
        },
        {
          question: 'What is the mileage range with each charge?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: [{ name: 'Mile Range' }]
        },
        {
          question: 'What are my options to charge the Tesla?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: [{ name: "Charging", value: "charging" }]
        },
        {
          question: 'What are some tips for charging a Tesla?',
          answer: 'Aim to Charge your Tesla to about 90% fully charged. It’s actually not ideal for the vehicle to be fully charged consistently. For this reason, your Tesla will be 80-90% charged upon pickup.',
          tags: [{ name: "Charging", value: "charging" }]
        },
        {
          question: 'What if I need help with my Resla rental?',
          answer: 'We have a dedicated support team available to you 24/7. For more information, please visit our contact us page',
          tags: [{ name: 'Support' }]
        }
      ]

    }
  },
  computed: {
    filteredFaqs() {
      let filteredFaqs = this.selectedFilter.length === 0
        ? this.faqs
        : this.faqs.filter(faq =>
          this.selectedFilter.some(selected =>
            faq.tags.some(tag => tag.value === selected)
          )
        );

      if (this.limited) {
        return filteredFaqs.slice(0, 14);
      }
      return filteredFaqs;
    }
  }
}
</script>