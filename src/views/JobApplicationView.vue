<template>
  <div>
    <!--nav-->
    <div
      class="relative flex justify-between min-h-[69px] px-10 py-3 gap-x-4 bg-primary-1000 border-b border-primary-700">
      <div class="flex items-center w-full gap-5">
        <router-link to="/" tag="a" class="w-28 h-4">
          <img src="@/assets/resla-logo-black-rgb.svg" alt="resla logo black" />
        </router-link>
        <div class="hidden md:block w-px h-full bg-primary-800"></div>
        <p class="hidden md:block font-medium text-2xl leading-[38.4px] text-primary-100">
          Apply
        </p>
      </div>
      <div class="flex w-full justify-end">
        <div class="flex flex-col gap-2 w-max md:max-w-full max-w-56">
          <p class="font-medium text-base leading-6.5 text-primary-300 truncate">
            {{ data.title ? data.title : "" }}
          </p>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
              <LocationIcon class="size-4"></LocationIcon>
              <p class="font-urbanist text-xs text-primary-100">
                {{ data.location ? data.location.name : "" }}
              </p>
            </div>
            <div class="flex items-center gap-1">
              <TimeIcon class="size-4"></TimeIcon>
              <p class="font-urbanist text-xs text-primary-100">Full Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-x border-primary-700">
      <form @submit.prevent="submitApplication"
        class="py-24 lg:px-0 px-6 max-w-[30rem] w-full mx-auto flex flex-col gap-10">
        <!--Title-->
        <div class="flex flex-col gap-2 text-left md:text-center">
          <h1 class="text-heading-1 font-medium leading-10 tracking-negative-3 text-resla-ebony-10">
            Apply
          </h1>

          <p class="text-xl leading-8 font-normal text-resla-ebony-50 font-urbanist">
            {{ data.title ? data.title : "" }}
          </p>
        </div>

        <!--Your Info-->
        <div class="flex flex-col gap-y-5">
          <p class="leading-8 text-heading-2 font-medium tracking-negative-3 text-resla-ebony-10">
            Your Info
          </p>
          <div class="flex flex-col gap-y-3">
            <input type="text" id="firstName" placeholder="First Name" required v-model="application.firstName"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
            <input type="text" id="lastName" placeholder="Last Name" required v-model="application.lastName"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
            <input type="email" id="email" placeholder="Email" required v-model="application.email"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
            <input type="tel" id="phone" placeholder="Phone" required v-model="application.phone"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
          </div>
        </div>
        <!--Qualifications-->
        <div class="flex flex-col gap-y-5">
          <p class="leading-8 text-heading-2 font-medium tracking-negative-3 text-resla-ebony-10">
            Qualifications
          </p>
          <div class="flex flex-col gap-y-3">
            <div class="relative flex w-full items-center">
              <input type="file" id="resume" class="absolute w-0 h-0 opacity-0" required
                @change="handleFileUpload($event, 'resume')" />
              <label for="resume"
                class="w-full flex items-center h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800">
                <span class="flex-1">{{
                  resumeFileName ? resumeFileName : "Your Resume"
                }}</span>
                <UploadFileIcon class="size-5" />
              </label>
            </div>
            <div class="relative flex items-center">
              <input type="file" id="coverLetter" class="absolute w-0 h-0 opacity-0" required
                @change="handleFileUpload($event, 'coverLetter')" />
              <label for="coverLetter"
                class="w-full flex items-center h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800">
                <span class="flex-1">{{
                  coverLetterFileName ? coverLetterFileName : "Cover Letter"
                }}</span>
                <UploadFileIcon class="size-5" />
              </label>
            </div>
            <input type="url" id="linkedinProfile" placeholder="LinkedIn Profile (optional)"
              v-model="application.linkedinProfile"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
            <input type="url" id="website" placeholder="Website (optional)" v-model="application.website"
              class="h-16 py-3 px-4 rounded-lg bg-primary-900 border border-primary-700 font-urbanist font-medium text-base leading-6.5 text-primary-500 focus:!ring-0 focus:bg-primary-800" />
          </div>
          <div class="flex flex-col gap-y-6">
            <!--Visa sponsoship-->
            <div class="flex flex-col gap-3">
              <p class="leading-6.5 text-base font-medium text-primary-500">
                Do you currently or will you in the future require sponsorship
                of a Visa to work in the United States?
              </p>
              <!-- Yes/No Button Group -->
              <div class="flex gap-3">
                <button type="button" @click="() => (application.visaSponsorship = 'yes')" :class="{
                  '!bg-primary-100 !hover:bg-primary-300 border-primary-300 !text-white':
                    application.visaSponsorship === 'yes',
                }"
                  class="flex items-center justify-between w-full px-4 py-3 gap-1 transition duration-300 border rounded-lg bg-primary-1000 border-primary-700 hover:bg-primary-900 hover:text-primary-100">
                  Yes
                  <CheckIcon v-show="application.visaSponsorship === 'yes'" class="size-5" />
                </button>

                <button type="button" @click="() => (application.visaSponsorship = 'no')" :class="{
                  '!bg-primary-100 !hover:bg-primary-300 border-primary-300 !text-white':
                    application.visaSponsorship === 'no',
                }"
                  class="flex items-center justify-between w-full px-4 py-3 gap-1 transition duration-300 border rounded-lg bg-primary-1000 border-primary-700 hover:bg-primary-900 hover:text-primary-100">
                  No
                  <CheckIcon v-show="application.visaSponsorship === 'no'" class="size-5" />
                </button>
              </div>
            </div>
            <!--relocate-->
            <div class="flex flex-col gap-3">
              <p class="leading-6.5 text-base font-medium text-primary-500">
                Are you able to relocate?
              </p>
              <!-- Yes/No Button Group -->
              <div class="flex gap-3">
                <button type="button" @click="() => (application.relocation = 'yes')" :class="{
                  '!bg-primary-100 !hover:bg-primary-300 border-primary-300 !text-white':
                    application.relocation === 'yes',
                }"
                  class="flex items-center justify-between w-full px-4 py-3 gap-1 transition duration-300 border rounded-lg bg-primary-1000 border-primary-700 hover:bg-primary-900 hover:text-primary-100">
                  Yes
                  <CheckIcon v-show="application.relocation === 'yes'" class="size-5" />
                </button>

                <button type="button" @click="() => (application.relocation = 'no')" :class="{
                  '!bg-primary-100 !hover:bg-primary-300 border-primary-300 !text-white':
                    application.relocation === 'no',
                }"
                  class="flex items-center justify-between w-full px-4 py-3 gap-1 transition duration-300 border rounded-lg bg-primary-1000 border-primary-700 hover:bg-primary-900 hover:text-primary-100">
                  No
                  <CheckIcon v-show="application.relocation === 'no'" class="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--action-->
        <div class="flex justify-between gap-4">
          <CtaButton variant="secondary" @click="() => this.$router.go(-1)">
              Cancel
          </CtaButton>
          <CtaButton  type="submit">
              Apply
          </CtaButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import LocationIcon from "@/components/icons/PinIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import UploadFileIcon from "@/components/icons/UploadFileIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import CtaButton from "@/components/base/CtaButton.vue";
export default {
  name: "JobApplicationForm",
  components: {
    LocationIcon,
    TimeIcon,
    UploadFileIcon,
    CheckIcon,
    CtaButton
  },
  data() {
    return {
      url: "https://boards-api.greenhouse.io/v1/",
      data: {
        content: "",
      },
      resumeFileName: "",
      coverLetterFileName: "",
      application: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: null,
        linkedinProfile: "",
        website: "",
        visaSponsorship: "no",
        relocation: "yes",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function () {
      axios
        .get(this.url + "boards/resla/jobs/" + this.$route.params.id)
        .then((response) => {
          this.data = response.data;
          document.title = response.data.title + " | Careers | Resla";
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status === 404) {
            this.$router.push({ name: "404" });
          }
        });
    },
    handleFileUpload(event, fieldName) {
      const file = event.target.files[0];
      if (file) {
        if (fieldName === "resume") {
          this.resumeFileName = file.name;
        }
        if (fieldName === "coverLetter") {
          this.coverLetterFileName = file.name;
        }
      }
      this.application[fieldName] = file;
    },
    submitApplication() {
      const root_url = "https://landing-api-gwr1.onrender.com";

      let formData = new FormData();
      formData.append("resume", this.application.resume);
      formData.append("coverLetter", this.application.coverLetter);
      formData.append("firstName", this.application.firstName);
      formData.append("lastName", this.application.lastName);
      formData.append("email", this.application.email);
      formData.append("phone", this.application.phone);
      formData.append("linkedinProfile", this.application.linkedinProfile);
      formData.append("website", this.application.website);
      formData.append("visaSponsorship", this.application.visaSponsorship);
      formData.append("relocation", this.application.relocation);
      formData.append("jobId", this.$route.params.id);

      axios
        .post(`${root_url}/jobs/apply`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          localStorage.setItem('accessJobConfirmed', 'true');
          const jobTitle = this.data.title;
          const location = this.data.location;
          this.$router.replace({
            name: 'jobApplyConfirmed',
            query: { jobTitle, location }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>