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
      faqs: [
        {
          question: 'How does Resla work?',
          answer: '<ul class="pl-8 list-circle"> <li>Book a Tesla in your designated location via our online reservation system.</li> <li>Upon booking, you will receive a series of text messages that walk you through the pickup process (damage waiver [optional], payment, license verification, insurance, etc.) </li> <li>Collect your Tesla using our digital key system and 24/7 customer support. </li> <li>Enjoy your trip. Return the car to the designated pickup location. </li> </ul>',
          tags: [{ name: "Rental Process", value: "rental_process" }]
        },
        // TODO: need to fetch locations from api after api refactoring
        {
          question: 'In what cities is Resla available in?',
          answer: 'Resla is available in the following cities, with new locations every month: <ul class="mt-3 pl-8 list-circle"><li> Arlington, TX </li><li> Austin, TX </li><li> Bee Cave, TX </li><li> Brentwood, MO </li><li> Brentwood, TN </li><li> Chandler, AZ </li><li> Chesterfield, MO </li><li> Columbia, MO </li><li> Dallas, TX </li><li> Euless, TX </li><li> Fenton, MO </li><li> Fort Worth, TX </li><li> Gilbert, AZ </li><li> Glendale, AZ </li><li> Grand Prairie, TX </li><li> Houston, TX </li><li> Independence, MO </li><li> Kansas City, MO </li><li> Las Vegas, NV </li><li> Lebanon, MO </li><li> Liberty, MO </li><li> Mesa, AZ </li><li> Nashville, TN </li><li> Olathe, KS </li><li> Olivette, MO </li><li> Overland Park, KS </li><li> Phoenix, AZ </li><li> San Antonio, TX </li><li> Scottsdale, AZ </li><li> St. Charles, MO </li><li> St. Louis, MO </li><li> Tempe, AZ </li><li> Valley Park, MO </li></ul>',
          tags: [{ name: "Rental Process", value: "rental_process" }]
        },
        {
          question: 'What do I need to rent a Tesla?',
          answer: '<ul class="pl-8 list-circle"><li> In order to reserve with Resla, you must have a valid driver’s license and proof of auto liability insurance. If you opt out of the damage waiver, you must have auto liability, comprehensive, and collision insurance transferable to a rental vehicle. </li><li> Additionally, you will be asked to make a general security deposit of $150 and a $25 charging pre-authorization. A major credit card is required for the deposit, however, a debit card may be used at the end of the rental to pay for charges if that’s the preferred payment method. </li><li> Deposits will be released after the vehicle is returned, inspected for damage, and all outstanding balances are paid. Please note that it sometimes takes up to five days for your bank to process. </li></ul>',
          tags: [{ name: "Rental Process", value: "rental_process" }]
        },
        {
          question: 'How much does it cost to rent a Tesla?',
          answer: 'The daily rate for a Tesla rental varies on the model you select. You can check our <a class="no-underline text-[#00f]" href="https://www.resla.com/reservations" target="_blank" class="primary-color">reservations page</a> for the most up-to-date daily rates. We also offer <a class="no-underline text-[#00f]" href="https://www.resla.com/blog/long-term-resla-rentals" target="_blank" class="primary-color">long-term rental</a> options. If that’s a need you have, please <a class="no-underline text-[#00f]" href="https://www.resla.com/contact" target="_blank" class="primary-color">reach out</a> to our customer support team and they will be happy to assist you.',
          tags: [{ name: "Rental Process", value: "rental_process" }]
        },
        {
          question: 'Where do I pick up the car?',
          answer: 'During the online reservation process, you will select from a list of locations where you can pick up and return your vehicles.',
          tags: [{ name: "Rental Process", value: "rental_process" }]
        },
        {
          question: 'How old do you have to be to rent a Resla?',
          answer: 'You must be at least 21 years of age. Anyone between the ages of 21 and 25 may incur an additional daily fee of $30/day.',
          tags: [{ name: "Driving", value: "driving" }]
        },
        {
          question: 'What fees does Resla charge?',
          answer: 'Resla was founded out of frustration with the ambiguous fee structure of traditional rental car companies. In light of that, please see <a class="no-underline text-[#00f]" href="https://www.resla.com/policies" target="_blank" class="primary-color"> here</a> for a complete list of our (potential) fees.',
          tags: [{ name: "Booking", value: "booking" }, { name: "Fees", value: "fees" }]
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
          answer: 'Each rental day has a mileage allowance of 200 miles, averaged out over the duration of the rental period. We charge excessive mileage at a rate of $0.17 per mile. We do offer an <a class="no-underline text-[#00f]" href="https://www.resla.com/blog/how-does-mileage-work-when-renting-a-tesla-with-resla" target="_blank" class="primary-color">unlimited mileage package.</a>',
          tags: [{ name: 'Mile Range' }]
        },
        {
          question: 'Do I still need personal car insurance if I opt in for the damage waiver?',
          answer: 'Yes, the damage waiver is an additional form of protection, but is not an insurance policy.',
          tags: [{ name: "Driving", value: "driving" }, { name: 'Insurance' }]
        },
        {
          question: 'What is the mileage range with each charge?',
          answer: '<ul class="pl-8 list-circle"><li>Model 3 Long Range: 341 miles</li><li>Model Y Long Range: 310 miles</li><li>Model 3: 272 miles</li><li>Model Y: 260 miles</li><li>Model S: 405 miles</li><li>Model X: 335 miles</li></ul>',
          tags: [{ name: 'Mile Range' }]
        },
        {
          question: 'What are my options to charge the Tesla?',
          answer: 'Each rental day has a mileage allowance of 200 miles, averaged out over the duration of the rental period. We charge excessive mileage at a rate of $0.17 per mile. We do offer an <a class="no-underline text-[#00f]" href="https://www.resla.com/blog/how-does-mileage-work-when-renting-a-tesla-with-resla" target="_blank" class="primary-color">unlimited mileage package.</a>',
          tags: [{ name: "Charging", value: "charging" }]
        },
        {
          question: 'What are some tips for charging a Tesla?',
          answer: 'Aim to <a class="no-underline text-[#00f]" href="https://www.youtube.com/watch?v=SvBNgC8nN_M" target="_blank" class="primary-color">charge</a> your Tesla to about 90% fully charged. It’s actually not ideal for the vehicle to be fully charged consistently. For this reason, your Tesla will be 80-90% charged upon pickup.',
          tags: [{ name: "Charging", value: "charging" }]
        },
        {
          question: 'What if I need help with my Resla rental?',
          answer: 'We have a dedicated support team available to you 24/7. For more information, please visit our <a class="no-underline text-[#00f]" href="https://www.resla.com/contact" target="_blank" class="primary-color">contact page.</a><ul class="pl-8 list-circle"><li> Call: <a class="no-underline text-[#00f]" href="tel:+14804394079" class="primary-color">480-439-4079</a></li><li> Text: <a class="no-underline text-[#00f]" href="tel:+14804394079" class="primary-color">480-439-4079</a></li><li> Email: <a class="no-underline text-[#00f]" href="mailto:support@resla.com" class="primary-color">support@resla.com</a></li></ul>',
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
        return filteredFaqs.slice(0, 10);
      }
      return filteredFaqs;
    }
  }
}
</script>