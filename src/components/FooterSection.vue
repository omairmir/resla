<template>
  <div>
    <div  class="grid grid-flow-row md:grid-flow-col gap-6 py-5 px-10 border-y border-resla-ebony-70">
      <ModelLink v-for="model in footerModels" :key="model.name" :imgSrc="model.image" :name="model.name" :url="model.url" />
    </div>
    <div class="flex flex-col lg:flex-row justify-between px-6 lg:px-10 mx-auto py-10 gap-10 lg:gap-20">
    <div class="w-full lg:max-w-[30rem] flex flex-col justify-between gap-y-12">
      <div class="logo">
        <router-link to="/" tag="a"><img src="../assets/resla-logo-black-rgb.svg" class="w-40 h-6"
            alt="resla logo black" /></router-link>
      </div>
      <div class="flex flex-col gap-4">
        <!--Social links-->
        <div class="flex items-center gap-3">
          <!--facebook link-->
          <a href="https://www.facebook.com/rentwithresla" target="_blank" class="size-6 p-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_67_113)">
                <path
                  d="M10 1.66675C5.39752 1.66675 1.66669 5.39758 1.66669 10.0001C1.66669 14.1592 4.71419 17.6067 8.69835 18.2326V12.4084H6.58169V10.0001H8.69835V8.16425C8.69835 6.07591 9.94169 4.92258 11.8459 4.92258C12.7575 4.92258 13.7109 5.08508 13.7109 5.08508V7.13508H12.6609C11.625 7.13508 11.3025 7.77758 11.3025 8.43675V10.0001H13.6134L13.2442 12.4084H11.3025V18.2326C15.2859 17.6076 18.3334 14.1584 18.3334 10.0001C18.3334 5.39758 14.6025 1.66675 10 1.66675Z"
                  fill="#44403C" />
              </g>
              <defs>
                <clipPath id="clip0_67_113">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
          <!--instagram link-->
          <a href="https://www.instagram.com/rentwithresla/" target="_blank" class="size-6 p-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_67_118)">
                <path
                  d="M10 1.66675C12.2642 1.66675 12.5467 1.67508 13.435 1.71675C14.3225 1.75841 14.9267 1.89758 15.4584 2.10425C16.0084 2.31591 16.4717 2.60258 16.935 3.06508C17.3588 3.48166 17.6866 3.98557 17.8959 4.54175C18.1017 5.07258 18.2417 5.67758 18.2834 6.56508C18.3225 7.45341 18.3334 7.73592 18.3334 10.0001C18.3334 12.2642 18.325 12.5467 18.2834 13.4351C18.2417 14.3226 18.1017 14.9267 17.8959 15.4584C17.6873 16.0149 17.3593 16.5189 16.935 16.9351C16.5183 17.3587 16.0144 17.6865 15.4584 17.8959C14.9275 18.1017 14.3225 18.2417 13.435 18.2834C12.5467 18.3226 12.2642 18.3334 10 18.3334C7.73585 18.3334 7.45335 18.3251 6.56502 18.2834C5.67752 18.2417 5.07335 18.1017 4.54169 17.8959C3.98529 17.6871 3.48129 17.3592 3.06502 16.9351C2.64119 16.5186 2.3133 16.0146 2.10419 15.4584C1.89752 14.9276 1.75835 14.3226 1.71669 13.4351C1.67752 12.5467 1.66669 12.2642 1.66669 10.0001C1.66669 7.73592 1.67502 7.45341 1.71669 6.56508C1.75835 5.67675 1.89752 5.07341 2.10419 4.54175C2.31272 3.98523 2.64069 3.48118 3.06502 3.06508C3.48141 2.64111 3.98538 2.31319 4.54169 2.10425C5.07335 1.89758 5.67669 1.75841 6.56502 1.71675C7.45335 1.67758 7.73585 1.66675 10 1.66675ZM10 5.83342C8.89495 5.83342 7.83514 6.2724 7.05374 7.0538C6.27234 7.83521 5.83335 8.89501 5.83335 10.0001C5.83335 11.1052 6.27234 12.165 7.05374 12.9464C7.83514 13.7278 8.89495 14.1667 10 14.1667C11.1051 14.1667 12.1649 13.7278 12.9463 12.9464C13.7277 12.165 14.1667 11.1052 14.1667 10.0001C14.1667 8.89501 13.7277 7.83521 12.9463 7.0538C12.1649 6.2724 11.1051 5.83342 10 5.83342ZM15.4167 5.62508C15.4167 5.34881 15.3069 5.08386 15.1116 4.88851C14.9162 4.69316 14.6513 4.58341 14.375 4.58341C14.0988 4.58341 13.8338 4.69316 13.6385 4.88851C13.4431 5.08386 13.3334 5.34881 13.3334 5.62508C13.3334 5.90135 13.4431 6.1663 13.6385 6.36165C13.8338 6.557 14.0988 6.66675 14.375 6.66675C14.6513 6.66675 14.9162 6.557 15.1116 6.36165C15.3069 6.1663 15.4167 5.90135 15.4167 5.62508ZM10 7.50008C10.6631 7.50008 11.2989 7.76347 11.7678 8.23231C12.2366 8.70116 12.5 9.33704 12.5 10.0001C12.5 10.6631 12.2366 11.299 11.7678 11.7678C11.2989 12.2367 10.6631 12.5001 10 12.5001C9.33698 12.5001 8.70109 12.2367 8.23225 11.7678C7.76341 11.299 7.50002 10.6631 7.50002 10.0001C7.50002 9.33704 7.76341 8.70116 8.23225 8.23231C8.70109 7.76347 9.33698 7.50008 10 7.50008Z"
                  fill="#44403C" />
              </g>
              <defs>
                <clipPath id="clip0_67_118">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
          <!--youtube link-->
          <a href="https://www.youtube.com/channel/UCh6nstSu8JgJ0zg7CdnxZqg" target="_blank" class="size-6 p-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_67_123)">
                <path
                  d="M17.9525 5.41492C18.3334 6.89992 18.3334 9.99992 18.3334 9.99992C18.3334 9.99992 18.3334 13.0999 17.9525 14.5849C17.7409 15.4058 17.1217 16.0516 16.3375 16.2699C14.9134 16.6666 10 16.6666 10 16.6666C10 16.6666 5.08919 16.6666 3.66252 16.2699C2.87502 16.0483 2.25669 15.4033 2.04752 14.5849C1.66669 13.0999 1.66669 9.99992 1.66669 9.99992C1.66669 9.99992 1.66669 6.89992 2.04752 5.41492C2.25919 4.59409 2.87835 3.94825 3.66252 3.72992C5.08919 3.33325 10 3.33325 10 3.33325C10 3.33325 14.9134 3.33325 16.3375 3.72992C17.125 3.95159 17.7434 4.59659 17.9525 5.41492ZM8.33335 12.9166L13.3334 9.99992L8.33335 7.08325V12.9166Z"
                  fill="#44403C" />
              </g>
              <defs>
                <clipPath id="clip0_67_123">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
          <!--linkedin link-->
          <a href="https://www.linkedin.com/company/rentwithresla/" target="_blank" class="size-6 p-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_67_128)">
                <path
                  d="M5.78335 4.16677C5.78312 4.6088 5.60732 5.03263 5.2946 5.34504C4.98188 5.65744 4.55787 5.83282 4.11585 5.8326C3.67382 5.83238 3.24998 5.65657 2.93758 5.34386C2.62517 5.03114 2.44979 4.60713 2.45001 4.1651C2.45023 3.72307 2.62604 3.29924 2.93876 2.98683C3.25147 2.67443 3.67548 2.49905 4.11751 2.49927C4.55954 2.49949 4.98338 2.6753 5.29578 2.98801C5.60818 3.30073 5.78357 3.72474 5.78335 4.16677ZM5.83335 7.06677H2.50001V17.5001H5.83335V7.06677ZM11.1 7.06677H7.78335V17.5001H11.0667V12.0251C11.0667 8.9751 15.0417 8.69177 15.0417 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0667 8.46677L11.1 7.06677Z"
                  fill="#44403C" />
              </g>
              <defs>
                <clipPath id="clip0_67_128">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
        </div>
        <!--Privacy-->
        <div class="flex items-center gap-3 text-sm text-resla-ebony-40 font-urbanist">
          <a href="mailto:support@resla.com"
            >support@resla.com</a
          >
          
|
         
          <a href="tel:+14804394079">(480) 439-4079</a>
          
|
          
        <div>

          Resla © 2022
        </div>
        </div>
      </div>
    </div>
    <!--Nav-->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      <div v-for="nav in navigationLinks" :key="nav.title" class="flex flex-col gap-4 w-full">
        <div class="font-urbanist font-normal text-sm leading-[22px] text-resla-ebony-50">
          {{ nav.title }}
        </div>
        <router-link v-for="(link,index) in nav.links" :key="index" :to="link.path" tag="button" class="w-max font-urbanist font-semibold text-base leading-[22px] text-resla-ebony-40">
          {{link.name}}
        </router-link>
        
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import ModelLink from "@/components/base/ModelLink.vue";

export default {
  name: "FooterSection",
  components:{
    ModelLink
  },
  data(){
    return{
      navigationLinks: [
        {
          title: 'Account',
          links: [
            { name: 'Profile', path: '/' },
            { name: 'My Trips', path: '/' },
            { name: 'Settings', path: '/' },
          ],
        },
        {
          title: 'Company',
          links: [
            { name: 'Careers', path: '/careers' },
            { name: 'Contact', path: '/contact' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { name: 'Tutorials', path: '/tutorials' },
            { name: 'Blog', path: '/blog' },
            { name: 'FAQ', path: '/faqs' },
          ],
        },
        {
          title: 'Policies',
          links: [
            { name: 'Terms of Use', path: '/terms' },
            { name: 'Privacy', path: '/privacy' },
            { name: 'Disclaimer', path: '/disclaimers' },
          ],
        },
      ],
      footerModels:[{
                image:'model-3-front.png',
                name:'Model 3',
                url:'' // TODO: add link to new model detail page
            },
            {
                image:'model-y.png',
                name:'Model Y',
                url:''
            },
            {
                image:'model-s.png',
                name:'Model S',
                url:''
            },
            {
                image:'model-x.png',
                name:'Model X',
                url:''
            }
        ]
    }
  }
};
</script>
