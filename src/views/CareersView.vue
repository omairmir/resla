<template>
  <div class="border-x border-primary-700">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-10">
      <p class="text-center" v-if="!loading && totalJobsCount == 0">
        There are no available opportunities right now. <br />
        Please check back later or contact us for more information.
      </p>
      <!-- Departments and Jobs List -->
      <h1
        class="text-heading-1 md:text-heading font-medium text-resla-ebony-1000 tracking-negtive-3 md:tracking-negative-5">
        Available Positions
      </h1>
      <!-- Loader -->
      <div v-if="loading" class="flex w-full items-center justify-center h-max">
        <LoadingAnimation :full-screen="false" type="spin"></LoadingAnimation>
      </div>
      <div v-for="department in filteredDepartments" :key="'department-' + department.id" class="flex flex-col gap-6">
        <!-- Department Name -->
        <h5 class="text-primary-200 text-heading-2 leading-8 font-medium tracking-negative-3">
          {{ department.name }}
        </h5>
        <CareersCard v-for="job in department.jobs" :key="'job-' + job.id" :locationName="job.location.name"
          :id="job.id.toString()" :title="job.title" />
      </div>
    </div>
    <!--cta section-->
    <LegalPageCta></LegalPageCta>
  </div>
</template>

<script>
import axios from "axios";
import CareersCard from '@/components/careers/CareersCard.vue';
import LegalPageCta from "@/components/LegalPageCta.vue";
import LoadingAnimation from "@/components/base/LoadingAnimation.vue";

export default {
  name: "CareersView",
  components: {
    CareersCard,
    LegalPageCta,
    LoadingAnimation
  },
  data: function () {
    return {
      data: {
        company: {
          description: "",
        },
        departments: [],
      },
      loading: true,
      url: "https://boards-api.greenhouse.io/v1/",
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    // use this method in case company detail is required
    getCompanyDetail() {
      axios
        .get(this.url + "boards/resla")
        .then((response) => {
          this.data.company.description = response.data.content;
          this.jobs();
        })
        .catch((error) => {
          console.error('Error fetching company data:', error);
        });
    },
    getJobs() {
      axios
        .get(this.url + "boards/resla/departments")
        .then((response) => {
          this.data.departments = response.data.departments;
        })
        .catch((error) => {
          console.error('Error fetching jobs data:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    filteredDepartments: function () {
      return this.data.departments.filter((department) => {
        return department.jobs.length > 0;
      });
    },
    totalJobsCount: function () {
      return this.filteredDepartments.reduce((total, department) => {
        return total + department.jobs.length;
      }, 0);
    },
  },
};
</script>