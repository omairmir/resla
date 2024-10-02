<template>
    <div class="border border-resla-ebony-70 rounded-xl overflow-hidden">
      <FaqCard v-for="(faq, index) in filteredFaqs" :key="index" :question="faq.question" :answer="faq.answer" :tags="faq.tags">
      </FaqCard>
    </div>
  </template>
  
  <script>
  import FaqCard from "@/components/base/FaqCard";
  export default {
    name: "FaqsComponent",
    props:{
      limited: {
        type: Boolean,
        default: false
      },
      selectedFilter: {
      type: Array,
      default: () => []
      }
    },
    components:{
      FaqCard
    },
    data() {
      return {
        faqs: [
          {
            question: 'How old do you have to be to rent a Resla?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Driving'}]
          },
          {
            question: 'What fees does Resla charge?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Booking'}, {name: 'Fees'}]
          },
          {
            question: 'Is auto insurance required to rent with Resla?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Insurance'}]
          },
          {
            question: 'Does the damage waiver cover damage to other vehicles?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Insurance'}]
          },
          {
            question: 'Do I need a physical key?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Digital Key'}]
          },
          {
            question: 'Is there a limit on the number of miles I drive?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Mile Range'}]
          },
          {
            question: 'Does the damage waiver cover damage to other vehicles?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Driving'}, {name: 'Digital Key'}]
          },
          {
            question: 'Do I still need personal car insurance if I opt in for the damage waiver?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Driving'}, {name: 'Insurance'}]
          },
          {
            question: 'Do I need a physical key?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Driving'}, {name: 'Digital Key'}]
          },
          {
            question: 'What is the mileage range with each charge?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Mile Range'}]
          },
          {
            question: 'Is there a limit on the number of miles I drive?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Mile Range'}]
          },
          {
            question: 'What are my options to charge the Tesla?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Charging'}]
          },
          {
            question: 'What are some tips for charging a Tesla?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Charging'}]
          },
          {
            question: 'What if I need help with my Resla rental?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags:[{name: 'Support'}]
          }
        ]
  
      }
    },
    computed:{
      filteredFaqs() {
        let filteredBlogs = this.selectedFilter.length === 0
          ? this.faqs
          : this.faqs.filter(blog =>
              this.selectedFilter.some(selected =>
                  blog.tags.some(tag => tag.name === selected)
              )
          );

      if (this.limited) {
        return filteredBlogs.slice(0, 14);
      }
      return filteredBlogs;
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>