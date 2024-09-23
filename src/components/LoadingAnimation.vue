<template>
  <div :class="loadingClass">
    <!-- Spinner -->
    <svg v-if="type === 'spin'" aria-hidden="true"
      class="w-8 h-8 text-primary-900 animate-spin dark:text-gray-600 fill-primary-500" viewBox="0 0 100 101"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor" />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill" />
    </svg>
    <!--spinner with logo-->
    <svg v-if="type === 'logo'" width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle cx="27.5" cy="27" r="24" stroke="#E5E3E0" stroke-width="6"></circle>
      <path d="M51.5 27C51.5 13.7452 40.7548 3 27.5 3" stroke="#110F0C" stroke-width="6" class="animate-spin-logo" />
      <rect x="18" y="20" width="21" height="14" fill="url(#pattern0_2210_6813)" />
      <defs>
        <pattern id="pattern0_2210_6813" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2210_6813" transform="matrix(0.0011396 0 0 0.0017094 -0.000569801 0)" />
        </pattern>
      </defs>
      <image href="@/assets/resla-logo-r.svg" x="18" y="20" />
    </svg>
    <!--tire spinner-->
    <svg v-if="type === 'tire'" width="92" height="94" style="animation: spin 2s linear infinite;" class="box-shadow" viewBox="0 0 92 94" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M37.5 42C36.1943 38.7109 33.9702 35.8668 31.0929 33.8067L29.6876 32.8005L26.3268 30.6889C22.6611 28.3859 18.3416 27.3478 14.0297 27.7337L26.565 15.4454L44.1229 10.3594C41.5401 13.9487 40.2648 18.3144 40.5092 22.7297L41.297 36.9622L37.5 42Z" fill="url(#paint0_linear_2210_6651)"/>
<path d="M47.8237 38.8184C50.0193 36.0431 51.3703 32.6949 51.7158 29.173L51.8846 27.453L52.0328 23.4866C52.1945 19.1605 50.9337 14.9007 48.4435 11.3594L65.3532 16.0712L78.5367 28.7337C74.1369 28.2917 69.7184 29.37 66.0169 31.7893L54.0851 39.5878L47.8237 38.8184Z" fill="#AADEC8"/>
<path d="M47.8237 38.8184C50.0193 36.0431 51.3703 32.6949 51.7158 29.173L51.8846 27.453L52.0328 23.4866C52.1945 19.1605 50.9337 14.9007 48.4435 11.3594L65.3532 16.0712L78.5367 28.7337C74.1369 28.2917 69.7184 29.37 66.0169 31.7893L54.0851 39.5878L47.8237 38.8184Z" fill="url(#paint1_linear_2210_6651)"/>
<path d="M52.047 43.1815C55.2961 44.5839 58.8799 45.0223 62.3711 44.4445L64.0763 44.1623L67.9458 43.2789C72.1664 42.3154 75.9548 39.9951 78.7308 36.6732L78.5562 54.2262L69.7372 70.2378C69.0255 65.8735 66.8403 61.8847 63.5454 58.9355L52.9244 49.4286L52.047 43.1815Z" fill="#AADEC8"/>
<path d="M52.047 43.1815C55.2961 44.5839 58.8799 45.0223 62.3711 44.4445L64.0763 44.1623L67.9458 43.2789C72.1664 42.3154 75.9548 39.9951 78.7308 36.6732L78.5562 54.2262L69.7372 70.2378C69.0255 65.8735 66.8403 61.8847 63.5454 58.9355L52.9244 49.4286L52.047 43.1815Z" fill="url(#paint2_linear_2210_6651)"/>
<path d="M49.4947 51.6714C48.9809 55.1727 49.485 58.7478 50.9467 61.9706L51.6606 63.5446L53.5154 67.0537C55.5384 70.881 58.7602 73.9398 62.6874 75.7615L45.6874 80.1358L27.9388 75.7615C31.9702 73.9444 35.2575 70.8013 37.2535 66.8554L43.6874 54.1358L49.4947 51.6714Z" fill="#AADEC8"/>
<path d="M49.4947 51.6714C48.9809 55.1727 49.485 58.7478 50.9467 61.9706L51.6606 63.5446L53.5154 67.0537C55.5384 70.881 58.7602 73.9398 62.6874 75.7615L45.6874 80.1358L27.9388 75.7615C31.9702 73.9444 35.2575 70.8013 37.2535 66.8554L43.6874 54.1358L49.4947 51.6714Z" fill="url(#paint3_linear_2210_6651)"/>
<path d="M40.5624 50.315C37.0848 50.9706 33.8692 52.6125 31.299 55.0449L30.0436 56.2328L27.3308 59.1301C24.3719 62.2902 22.5303 66.3331 22.0882 70.6396L12.4115 55.9938L10.7617 37.7887C13.7935 41.0077 17.8365 43.0909 22.2175 43.6917L36.3396 45.6282L40.5624 50.315Z" fill="#AADEC8"/>
<path d="M40.5624 50.315C37.0848 50.9706 33.8692 52.6125 31.299 55.0449L30.0436 56.2328L27.3308 59.1301C24.3719 62.2902 22.5303 66.3331 22.0882 70.6396L12.4115 55.9938L10.7617 37.7887C13.7935 41.0077 17.8365 43.0909 22.2175 43.6917L36.3396 45.6282L40.5624 50.315Z" fill="url(#paint4_linear_2210_6651)"/>
<circle cx="45" cy="45" r="39" stroke="url(#paint5_linear_2210_6651)" stroke-width="12"/>
<circle cx="44.8125" cy="45" r="34" stroke="url(#paint6_linear_2210_6651)" stroke-width="2"/>
<circle cx="45" cy="45" r="11.5" fill="url(#paint7_linear_2210_6651)"/>
<circle cx="45" cy="45" r="11.5" stroke="black"/>
<circle cx="45" cy="45" r="11.5" stroke="url(#paint8_linear_2210_6651)"/>
<rect x="40.2002" y="41.4" width="10.8" height="7.2" fill="url(#pattern0_2210_6651)"/>
<defs>
<pattern id="pattern0_2210_6651" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2210_6651" transform="matrix(0.00756757 0 0 0.0116667 0 -0.00166667)"/>
</pattern>
<linearGradient id="paint0_linear_2210_6651" x1="41" y1="16.5" x2="29" y2="33.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#54504C"/>
<stop offset="0.84" stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint1_linear_2210_6651" x1="71.6574" y1="29.0995" x2="50.935" y2="27.2072" gradientUnits="userSpaceOnUse">
<stop stop-color="#54504C"/>
<stop offset="0.84" stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint2_linear_2210_6651" x1="67.6034" y1="63.6875" x2="64.0679" y2="43.1814" gradientUnits="userSpaceOnUse">
<stop stop-color="#54504C"/>
<stop offset="0.84" stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint3_linear_2210_6651" x1="33.7136" y1="72.005" x2="52.6059" y2="63.2826" gradientUnits="userSpaceOnUse">
<stop stop-color="#54504C"/>
<stop offset="0.84" stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint4_linear_2210_6651" x1="16.1953" y1="42.0237" x2="30.5994" y2="57.0411" gradientUnits="userSpaceOnUse">
<stop stop-color="#54504C"/>
<stop offset="0.84" stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint5_linear_2210_6651" x1="45" y1="0" x2="45" y2="90" gradientUnits="userSpaceOnUse">
<stop stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<linearGradient id="paint6_linear_2210_6651" x1="44.8125" y1="10" x2="44.8125" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#110F0C"/>
<stop offset="1" stop-color="#44403C"/>
</linearGradient>
<linearGradient id="paint7_linear_2210_6651" x1="45" y1="33" x2="45" y2="57" gradientUnits="userSpaceOnUse">
<stop stop-color="#110F0C"/>
<stop offset="1" stop-color="#44403C"/>
</linearGradient>
<linearGradient id="paint8_linear_2210_6651" x1="45" y1="33" x2="45" y2="57" gradientUnits="userSpaceOnUse">
<stop stop-color="#44403C"/>
<stop offset="1" stop-color="#110F0C"/>
</linearGradient>
<image id="image0_2210_6651" width="600" height="86" xlink:href="data:image/png;base64,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"/>
</defs>
    </svg>


  </div>
</template>

<script>
export default {
  name: "LoadingAnimation",
  // more loading animation & option can be added
  props: {
    type: {
      type: String,
      default: 'logo',
      validator(value) {
        return ["spin", "logo", "tire"].includes(value);
      },
    },
    fullScreen: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    loadingClass() {
      return this.fullScreen
        ? "fixed top-0 left-0 bg-primary-900 min-w-full min-h-screen z-[1000] flex flex-col justify-center items-center"
        : "relative ";
    },
  },
};
</script>

<style>
.animate-spin-logo {
  animation: spin 2s linear infinite;
  transform-origin: 27.5px 27px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
