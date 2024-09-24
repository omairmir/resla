<template>
  <div class="border-x border-primary-700 min-h-screen">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-6 text-left">
      <template v-if="getContract">
        <!--heading-->
        <div class="flex flex-col gap-3">
          <div class="flex justify-between">
            <h1 class="font-medium text-heading-1 leading-10 tracking-negative-3 text-primary-100">
              Collision Protection
            </h1>
            <CtaButton variant="tertiary" @click="triggerPrint">
              <PrinterIcon class="size-6"></PrinterIcon>
            </CtaButton>
          </div>

          <p class="block font-urbanist text-base text-primary-100">
            Last Updated
            {{
            new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            }).format(new Date(getContract.updated_at))
            }}.
          </p>
        </div>
        <div class="bg-primary-700 w-full h-px"></div>
        <!--agreement-->
        <div v-html="outputHtml" id="collision-protection-html"></div>
      </template>

    </div>
    <!--cta section-->
    <LegalPageCta></LegalPageCta>
  </div>
</template>

<script>
import axios from "axios";
import PrinterIcon from "@/components/icons/PrinterIcon.vue";
import LegalPageCta from '@/components/LegalPageCta.vue'
import CtaButton from "@/components/base/CtaButton.vue";
export default {
  name: "CollisionProtection",
  components: {
    PrinterIcon,
    CtaButton,
    LegalPageCta
  },
  data: function () {
    return {
      contracts: [],
      state: this.$route.query.state ? this.$route.query.state : "",
      type: this.$route.query.type ? this.$route.query.type : "DAMAGE_WAIVER",
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 50,
    };
  },
  beforeMount: function () {
    this.getContracts();
  },
  methods: {
    getContracts: function () {
      if (!this.state) {
        this.$router.push("/error");
      }
      const url = `https://resla-app-api-staging.onrender.com/api/v1/contracts?type=${this.type}&page=${this.page}&size=${this.size}`;
      this.$store.commit("startLoading");
      axios
        .get(url)
        .then((response) => {
          this.contracts = response.data;
          if (
            !this.contracts.items.find((contract) => {
              return contract.state == this.state.toUpperCase();
            })
          ) {
            this.$router.push("/error");
          }
          this.$store.commit("stopLoading");
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/error");
          this.$store.commit("stopLoading");
        });
    },
    triggerPrint() {
      // print method can be refactor if needed
      const content = document.getElementById(
        "collision-protection-html"
      ).innerHTML;
      const printWindow = window.open("");

      printWindow.document.write(`
    <html>
      <head>
        <title>Collision Protection | Resla</title>
        <style>
        body {
            font-family: Arial, sans-serif;
          }
          #collision-protection-html {
            margin: 20px;
            
          }
           h6 {
            font-size: 2rem;
            margin-top:24px;
            margin-bottom:12px; 
          }
          p{
           font-size:1rem;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);

      printWindow.print();
    },
  },
  computed: {
    getContract: function () {
      if (!this.contracts.items) return null;
      return this.contracts.items.find((contract) => {
        return contract.state == this.state.toUpperCase();
      });
    },
    outputHtml: function () {
      const price = this.$route.query.price ? this.$route.query.price : "";
      // Replace the ${price} placeholders with the actual price value
      let htmlString = this.getContract.html.replace(/\$\{price\}/g, price);
      // Remove numbers and dots from the start of headings
      // htmlString = htmlString.replace(
      //   /<(h[1-6])[^>]*>(\d+\.\s*)+(.*?)<\/\1>/g,
      //   (match, p1, p2, p3) => {
      //     return `<${p1}>${p3}</${p1}>`;
      //   }
      // );
      return htmlString;
    },
  },
};
</script>

<style lang="scss">
#collision-protection-html {
  p {
    @apply font-urbanist font-normal text-base leading-[25.6px] text-primary-300 mb-3;
  }

  h6 {
    @apply text-heading-2 leading-8 font-medium text-primary-100 mb-3 mt-6;
  }

  ol {
    @apply list-decimal list-inside pl-2 font-urbanist font-normal text-base leading-[25.6px] text-primary-300;
  }

  li {
    @apply mb-2;
  }
}
</style>
