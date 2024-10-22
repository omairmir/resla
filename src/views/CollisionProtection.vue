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
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];

    return {
      contracts: [],
      state: this.$route.query.state ? this.$route.query.state : "",
      type: this.$route.query.type ? this.$route.query.type : "DAMAGE_WAIVER",
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 50,
      pickup_at: this.$route.query.pickup_at ? this.$route.query.pickup_at : today,
      return_at: this.$route.query.return_at ? this.$route.query.return_at : tomorrowString,
    };
  },
  beforeMount: function () {
    this.getContracts();
    this.$store.commit("startLoading");
  },
  methods: {
    getContracts: function () {
      if (!this.state) {
        this.$router.push("*");
      }
      const url = `https://resla-app-api-staging.onrender.com/api/v1/contracts?type=${this.type}&state=${this.state.toUpperCase()}&pickup_at=${this.pickup_at}&return_at=${this.return_at}&page=${this.page}&size=${this.size}`;

      axios
        .get(url)
        .then((response) => {
          this.contracts = response.data;
          if (
            !this.contracts.items.find((contract) => {
              return contract.state == this.state.toUpperCase();
            })
          ) {
            this.$router.push("*");
          }
          this.$store.commit("stopLoading");
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit("stopLoading");
          this.$router.push("*");
        });
    },
    triggerPrint() {
      const content = document.getElementById("collision-protection-html").innerHTML;
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
              p {
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
      //dont need to swap price now on new endpoint
      // const price = this.$route.query.price ? this.$route.query.price : "";
      // let htmlString = this.getContract.html.replace(/\$\{price\}/g, price);
      let htmlString = this.getContract.html;
      htmlString = htmlString
        .replace(/<h2\b[^>]*>(.*?)<\/h2>/, '')   // Remove the first <h2>...</h2>
        .replace(/<hr\b[^>]*>/, '');
      htmlString = htmlString.replace(/<h2\b[^>]*>(.*?)<\/h2>/, '');

      return htmlString;
    },
  },
};
</script>

<style lang="scss">
#collision-protection-html {

  h2 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: #110f0c;
    margin-top: 32px !important;
    margin-bottom: 32px !important;
    letter-spacing: -0.03em;
    /* font-family: "VisbyCF"  if your website used Visby font */
  }

  h5 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
    color: #110f0c;
    margin-top: 24px;
    margin-bottom: 16px;
    text-decoration: none;
    letter-spacing: -0.03em;
    /* font-family: "VisbyCF"  if your website used Visby font */
  }

  h6 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #110f0c;
    margin-top: 24px;
    margin-bottom: 16px;
    text-decoration: none;
    letter-spacing: -0.03em;
    /* font-family: "VisbyCF"  if your website used Visby font */
  }

  u {
    display: block;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #110f0c;
    text-decoration: none;
    margin-top: 12px;
    margin-bottom: 12px;
    /* font-family: "VisbyCF"  if your website used Visby font */
  }

  p {
    font-family: "Urbanist";
    font-size: 1rem;
    line-height: 1.5rem;
    color: #2b2825;
    /*fallback */
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ol {
    font-family: "Urbanist";
    padding-left: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    list-style-type: decimal;
    list-style-position: inside;
    color: #2b2825;
  }

  a {
    text-decoration: underline;
    color: #2b2825 !important;
  }

  hr {
    width: 100%;
    border-color: #d6d2cd;
  }
}
</style>
