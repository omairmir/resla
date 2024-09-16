<template>
  <ul class="list-group list-group-flush">
    <h3 class="mt-3 mb-3">The Rental Process</h3>
    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-1"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        How does Resla work?<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-1">
      <div class="card card-body">
        <ul>
          <li>
            Book a Tesla in your designated location via our online reservation
            system.
          </li>
          <li>
            Upon booking, you will receive a series of text messages that walk
            you through the pickup process (damage waiver [optional], payment,
            license verification, insurance, etc.)
          </li>
          <li>
            Collect your Tesla using our digital key system and 24/7 customer
            support.
          </li>
          <li>
            Enjoy your trip. Return the car to the designated pickup location.
          </li>
        </ul>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-2"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        In what cities is Resla available in?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-2">
      <div class="card card-body">
        Resla is available in the following cities, with new locations every
        month:
        <ul class="mt-3">
          <li v-for="(city, index) of cities" :key="'city-' + index">
            {{ city.city }}, {{ city.state }}
          </li>
        </ul>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-3"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What do I need to rent a Tesla?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-3">
      <div class="card card-body">
        <ul>
          <li>
            In order to reserve with Resla, you must have a valid driver’s
            license and proof of auto liability insurance. If you opt out of the
            damage waiver, you must have auto liability, comprehensive, and
            collision insurance transferable to a rental vehicle.
          </li>
          <li>
            Additionally, you will be asked to make a general security deposit
            of $150 and a $25 charging pre-authorization. A major credit card is
            required for the deposit, however, a debit card may be used at the
            end of the rental to pay for charges if that’s the preferred payment
            method.
          </li>
          <li>
            Deposits will be released after the vehicle is returned, inspected
            for damage, and all outstanding balances are paid. Please note that
            it sometimes takes up to five days for your bank to process.
          </li>
        </ul>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-4"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        How much does it cost to rent a Tesla?<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-4">
      <div class="card card-body">
        <p>
          The daily rate for a Tesla rental varies on the model you select. You
          can check our
          <a
            href="https://www.resla.com/reservations"
            target="_blank"
            class="primary-color"
            >reservations page</a
          >
          for the most up-to-date daily rates. We also offer
          <a
            href="https://www.resla.com/blog/long-term-resla-rentals"
            target="_blank"
            class="primary-color"
            >long-term rental</a
          >
          options. If that’s a need you have, please
          <a
            href="https://www.resla.com/contact"
            target="_blank"
            class="primary-color"
            >reach out</a
          >
          to our customer support team and they will be happy to assist you.
        </p>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-5"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        How old do you have to be to rent a Resla?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-5">
      <div class="card card-body">
        You must be at least 21 years of age. Anyone between the ages of 21 and
        25 may incur an additional daily fee of $30/day.
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-6"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Where do I pick up the car?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-6">
      <div class="card card-body">
        During the online reservation process, you will select from a list of
        locations where you can pick up and return your vehicles.
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-7"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What fees does Resla charge?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-7">
      <div class="card card-body">
        <p>
          Resla was founded out of frustration with the ambiguous structure of
          traditional rental car companies. In light of that, here is a complete
          list of our (potential) fees:
        </p>
        <p class="mt-3">Violations:</p>
        <ul>
          <li>Smoking Fee - $150 / one time</li>
          <li>
            Re-charge Fee - $10 (51%-75% battery), $20 (21%-50% battery), $50
            (0%-20% battery) / one time
            <ul>
              <li>
                Note: Applies to vehicles returned with less than 80% charge.
              </li>
            </ul>
          </li>
          <li>
            Cleaning Fee - $150 / one time
            <ul>
              <li>
                Note: Applies to vehicles returned with excessive garbage, dirt,
                hair, stains, spills, food waste, etc.
              </li>
            </ul>
          </li>
          <li>
            Late Fee - $50 + additional rental rate
            <ul>
              <li>
                Note: Applies to vehicles returned more than 30 minutes after
                your scheduled return time.
              </li>
            </ul>
          </li>
          <li>Missing J1772 Charging Adapter Fee - $75 / one time</li>
          <li>
            Ticket Administration Fee - $150
            <ul>
              <li>
                Note: This fee is charged for our internal processing of any
                state, federal, or municipal tickets, including traffic and
                parking fines, that are reported or linked to the rental period.
                Please note, this is strictly an administrative processing fee.
                Renters are independently responsible for addressing and
                settling all associated fees, penalties, and fines directly with
                the issuing authorities.
              </li>
            </ul>
          </li>
        </ul>
        <p class="mt-3">Add-ons:</p>
        <ul>
          <li>Damage Waiver - Starts at $30/day</li>
          <li>Unlimited Mileage - $9/day</li>
          <li>
            Underage Driver Fee - $30/day
            <ul>
              <li>
                Note: Required for drivers between the ages of 21 and 25 years
                old.
              </li>
            </ul>
          </li>
        </ul>
        <p class="mt-3">Incidentals:</p>
        <ul>
          <li>
            Roadside Assistance - $250 / one time + cost
            <ul>
              <li>
                Note: When requested, we will arrange roadside assistance
                services. Our fee is in addition to the cost of the services we
                arrange (e.g. tow truck).
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-25"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Is auto insurance required to rent with Resla?<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-25">
      <div class="card card-body">
        Yes, a state minimum liability insurance plan is required to rent a
        vehicle. Our preference is for renters to have full comprehensive and
        collision insurance. If you do not have insurance, unfortunately, we
        cannot rent to you.
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-26"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Does the damage waiver cover damage to other vehicles?<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-26">
      <div class="card card-body">
        The damage waiver does not cover damage caused to another vehicle,
        however, the minimum state liability insurance that we require would
        cover any damage to another person’s vehicle.
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-27"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Do I still need personal car insurance if I opt in for the damage
        waiver?<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-27">
      <div class="card card-body">
        Yes, the damage waiver is an additional form of protection, but is not
        an insurance policy.
      </div>
    </div>

    <h3 class="mt-5 mb-3">The Car</h3>
    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-9"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Do I need a physical key?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-9">
      <div class="card card-body">
        No, our support team will send you a digital key via text before your
        rental begins. It will remain active for the duration of your trip.
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-10"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What is the mileage range with each charge (est. EPA)?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-10">
      <div class="card card-body">
        <ul>
          <li>Model 3 Long Range: 341 miles</li>
          <li>Model Y Long Range: 310 miles</li>
          <li>Model 3: 272 miles</li>
          <li>Model Y: 260 miles</li>
          <li>Model S: 405 miles</li>
          <li>Model X: 335 miles</li>
        </ul>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-11"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        Is there a limit on the number of miles I drive?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-11">
      <div class="card card-body">
        <p>
          Each rental day has a mileage allowance of 200 miles, averaged out
          over the duration of the rental period. We charge excessive mileage at
          a rate of $0.17 per mile. We do offer an
          <a
            href="https://www.resla.com/blog/how-does-mileage-work-when-renting-a-tesla-with-resla"
            target="_blank"
            class="primary-color"
            >unlimited mileage package.</a
          >
        </p>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-12"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What are my options to charge the Tesla?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-12">
      <div class="card card-body">
        <ul>
          <li>
            <p>
              Your best option is to use a Tesla SuperCharger. A list of
              locations offering this service can be
              <a
                href="https://www.youtube.com/watch?v=fi3Z3pTdZ0M"
                target="_blank"
                class="primary-color"
                >found through the navigation system</a
              >
              on the vehicle. We will bill your payment method on file for
              accrued charging fees at Tesla Superchargers periodically
              throughout your trip.
            </p>
          </li>
          <li>
            Third party charging options can also be utilized (we include a
            J1772 adapter with every vehicle). We recommend using the
            <a
              href="https://apps.apple.com/us/app/plugshare/id421788217"
              target="_blank"
              class="primary-color"
              >PlugShare</a
            >
            or
            <a
              href="https://apps.apple.com/us/app/chargepoint/id356866743"
              target="_blank"
              class="primary-color"
              >Chargepoint</a
            >
            app to locate third party charging points.
          </li>
        </ul>
      </div>
    </div>

    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-13"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What are some tips for charging a Tesla?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-13">
      <div class="card card-body">
        <p>
          Aim to
          <a
            href="https://www.youtube.com/watch?v=SvBNgC8nN_M"
            target="_blank"
            class="primary-color"
            >charge</a
          >
          your Tesla to about 90% fully charged. It’s actually not ideal for the
          vehicle to be fully charged consistently. For this reason, your Tesla
          will be 80-90% charged upon pickup.
        </p>
      </div>
    </div>

    <h3 class="mt-5 mb-3">The Experience</h3>
    <li class="list-group-item mt-3 pb-3">
      <a
        class="border-0 stretched-link h5"
        data-bs-toggle="collapse"
        href="#q-14"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
      >
        What if I need help with my Resla rental?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="float: right !important"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#0000FF"
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          /></svg
      ></a>
    </li>
    <div class="collapse multi-collapse" id="q-14">
      <div class="card card-body">
        <p>
          We have a dedicated support team available to you 24/7. For more
          information, please visit our
          <a
            href="https://www.resla.com/contact"
            target="_blank"
            class="primary-color"
            >contact page.</a
          >
        </p>
        <ul>
          <li>
            Call:
            <a href="tel:+14804394079" class="primary-color">480-439-4079</a>
          </li>
          <li>
            Text:
            <a href="tel:+14804394079" class="primary-color">480-439-4079</a>
          </li>
          <li>
            Email:
            <a href="mailto:support@resla.com" class="primary-color"
              >support@resla.com</a
            >
          </li>
        </ul>
      </div>
    </div>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "AccordionSection",
  data: function () {
    return {
      cities: [
        {
          name: "",
        },
      ],
      url: "https://landing-api-gwr1.onrender.com", //"http://localhost:5001",
    };
  },
  mounted: function () {
    this.getCities();
  },
  methods: {
    getCities: function () {
      axios
        .get(this.url + "/available/cities")
        .then((response) => {
          console.log(response);
          this.cities = this._.orderBy(
            response.data,
            ["city", "state"],
            ["asc", "asc"]
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
