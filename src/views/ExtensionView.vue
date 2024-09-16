<template>
  <div class="reservations">
    <div class="fluid-container">
      <div class="row g-0" style="min-height: 65vh !important">
        <div class="col-10 offset-1 my-auto">
          <h1 class="display-5 mt-5 mb-3 text-center">
            <span class="highlighted">Request extension.</span>
          </h1>
          <div class="col-md-6 offset-md-3 mb-5 mt-4">
            <form
              class="needs-validation"
              action="https://formcarry.com/s/vnW370a0EED"
              method="POST"
              enctype="multipart/form-data"
            >
              <label for="extensionDateTimeLocal" class="form-label"
                >Name</label
              >
              <input
                class="form-control"
                type="text"
                name="name"
                disabled
                :value="$route.query.first_name + ' ' + $route.query.last_name"
              />
              <label for="extensionDateTimeLocal" class="form-label mt-3"
                >Original Return</label
              >
              <input
                type="datetime-local"
                class="form-control"
                name="return_at"
                :value="
                  formatDateTimeToLocalISO(
                    decodeURIComponent($route.query.return_at).replace(
                      / /g,
                      '+'
                    )
                  )
                "
                disabled
              />
              <label for="extensionDateTimeLocal" class="form-label mt-3"
                >Extend Until</label
              >
              <input
                type="datetime-local"
                class="form-control"
                name="extend_until"
                :min="minDateTime"
                v-model="extend_until"
                required
              />
              <label
                for="extensionDateTimeLocal"
                class="form-label mt-3"
                v-if="$route.query.damage_waiver == 'True'"
                >Opt In</label
              >
              <div
                class="form-check"
                v-if="$route.query.damage_waiver == 'True'"
              >
                <input
                  type="checkbox"
                  name="damage_waiver_opt_in"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="exampleCheck1"
                  >I agree to extend the damage waiver coverage
                  {{ calculateDayDifference }} day<span
                    v-if="calculateDayDifference > 1"
                    >s</span
                  >
                  at a rate of $30.00 {{ $route.query.ppd }} per day plus taxes,
                  as applicable. If you wish to extend your reservation and
                  discontinue your damage waiver coverage, please contact
                  support
                  <a
                    href="https://www.resla.com/contact"
                    target="_blank"
                    style="color: blue !important"
                    >here.</a
                  >
                </label>
              </div>

              <input
                class="form-control"
                type="hidden"
                name="reservation_id"
                :value="$route.query.id"
                required
              />
              <input
                class="form-control"
                type="hidden"
                name="uuid"
                :value="$route.query.uuid"
                required
              />
              <button
                type="submit"
                class="btn btn-primary mx-auto d-block mt-3"
              >
                Submit
              </button>
              <p class="mt-5" v-if="$route.query.damage_waiver == 'True'">
                COLLISION DAMAGE WAIVER NOTICE: OUR CONTRACT OFFERS FOR AN
                ADDITIONAL CHARGE COLLISION DAMAGE WAIVER PRODUCT. BEFORE
                DECIDING WHETHER TO PURCHASE ANY OF THESE OPTIONAL PRODUCTS, YOU
                MAY WISH TO DETERMINE WHETHER YOUR PERSONAL INSURANCE OR CREDIT
                CARD PROVIDES YOU COVERAGE DURING THE RENTAL PERIOD. THE
                PURCHASE OF ANY OF THESE OPTIONAL PRODUCTS IS NOT REQUIRED TO
                RENT A VEHICLE. SEE RESLA.COM TERMS AND DISCLOSURES FOR MORE
                DETAILS. <br /><br />THIS OPTIONAL PRODUCT IS NOT AN INSURANCE
                POLICY AND DOES NOT PROVIDE PROTECTION IN THE EVENT OF LOSS OR
                DAMAGE ARISING FROM PROHIBITED USE. <br /><br />VIEW THE DAMAGE
                WAIVER CONTRACT
                <a
                  :href="
                    'https://www.resla.com/waiver?state=' + $route.query.state
                  "
                  target="_blank"
                  style="color: #3200ff !important"
                  >HERE.</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ExtensionView",
  data: function () {
    return {
      reservation_id: "",
      uuid: "",
      type: "",
      minDateTime: "",
      extend_until: null,
      originalReturnAt: "",
    };
  },
  mounted: function () {
    const returnAt = this.$route.query.return_at;
    const timeZone = this.$route.query.timezone;
    const damageWaiver = this.$route.query.damage_waiver;
    const uuid = this.$route.query.uuid;
    const id = this.$route.query.id;

    if (returnAt && timeZone && damageWaiver && uuid && id) {
      const decodedReturnAt = decodeURIComponent(returnAt).replace(/ /g, "+"); // Convert spaces to '+'
      this.minDateTime = this.formatDateTimeToLocalISO(
        decodedReturnAt,
        timeZone
      );
      this.extend_until = this.formatDateTimeToLocalISO(
        this.addOneDayToDate(
          decodeURIComponent(this.$route.query.return_at).replace(/ /g, "+")
        )
      );
    } else {
      this.$router.push("/error");
    }
  },
  computed: {
    calculateDayDifference: function () {
      if (!this.extend_until || !this.minDateTime) return 0;

      const extendUntilDate = new Date(this.extend_until.split("T")[0]);
      const originalReturnAtDate = new Date(this.minDateTime.split("T")[0]);

      const timeDiff = extendUntilDate - originalReturnAtDate;
      let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      // Ensure dayDiff is never less than 1
      dayDiff = Math.max(dayDiff, 1);

      return dayDiff;
    },
  },
  methods: {
    formatDateTimeToLocalISO(dateTimeString, timeZone) {
      const date = new Date(dateTimeString);
      const options = {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const parts = formatter.formatToParts(date);
      const year = parts.find((part) => part.type === "year").value;
      const month = parts.find((part) => part.type === "month").value;
      const day = parts.find((part) => part.type === "day").value;
      const hour = parts.find((part) => part.type === "hour").value;
      const minute = parts.find((part) => part.type === "minute").value;
      return `${year}-${month}-${day}T${hour}:${minute}`;
    },
    addOneDayToDate(dateString) {
      const date = new Date(dateString);
      date.setDate(date.getDate() + 1); // Add one day
      return date.toISOString();
    },
  },
};
</script>
