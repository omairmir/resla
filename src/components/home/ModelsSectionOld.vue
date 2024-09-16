<template>
  <div id="models">
    <div class="fluid-container mt-5 mb-0">
      <!-- Mobile -->
      <div class="row g-0 mb-0 d-flex p-3 d-lg-none">
        <div class="col-9 my-auto">
          <h3>Don’t waste time booking a traditional car rental...</h3>
        </div>
        <div class="col-3 my-auto border secondary-border"></div>
        <div class="fluid-container">
          <div class="container">
            <div class="row g-0">
              <div class="col-12">
                <h1 class="display-5 mt-5">
                  <span class="highlighted"
                    >With Resla, you’re guaranteed a Tesla.</span
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-0 mt-5 d-none d-lg-block">
          <div class="col-2 my-auto border secondary-border"></div>
          <div class="col-auto my-auto">
            <h3 class="badge">Available Models</h3>
          </div>
          <div class="col my-auto border secondary-border"></div>
        </div>
        <div class="fluid-container">
          <div class="container">
            <div class="row g-0 mt-3">
              <div class="col-md-6">
                <div class="card border mt-3" style="width: 95% !important">
                  <div class="card-body">
                    <img
                      src="../../assets/img/interior/Resla-TeslaModel3.png"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <h1 class="card-title primary-color mt-3">Model 3</h1>
                    <h5 class="text-muted mt-1">0-60 in 4.2 seconds</h5>
                    <h5 class="text-muted mt-1">145 mph top speed</h5>
                    <h5 class="text-muted mt-1">358 mile range</h5>
                    <h5 class="text-muted mt-1">Dual Motor AWD</h5>
                    <a
                      href="https://www.resla.com/vehicle/model/3"
                      class="primary-color text-end w-100 d-block mt-3 h5"
                      target="_blank"
                      >learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"
                          fill="#0000FF"
                        /></svg
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border mt-3" style="width: 95% !important">
                  <div class="card-body">
                    <img
                      src="../../assets/img/interior/Resla-TeslaModelY.png"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <h1 class="card-title primary-color mt-3">Model Y</h1>
                    <h5 class="text-muted mt-1">0-60 in 3.5 seconds</h5>
                    <h5 class="text-muted mt-1">155 mph top speed</h5>
                    <h5 class="text-muted mt-1">330 mile range</h5>
                    <h5 class="text-muted mt-1">Dual Motor AWD</h5>
                    <a
                      href="https://www.resla.com/vehicle/model/y"
                      class="primary-color text-end w-100 d-block mt-3 h5"
                      target="_blank"
                      >learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"
                          fill="#0000FF"
                        /></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop -->
      <div class="row g-0 mt-5 d-none d-lg-flex">
        <div class="col-6 offset-6 mt-5">
          <div class="row g-0">
            <div class="col-auto my-auto">
              <h5 class="badge fw-400" style="font-size: unset !important">
                Available models
              </h5>
            </div>
            <div class="col my-auto border secondary-border"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row g-0 mb-0 d-none d-lg-flex">
          <div class="col-6 my-auto pl-5 pr-5">
            <h1 class="display-5 mt-5 ps-2 pe-2">
              <span class="highlighted"
                >With Resla, you’re guaranteed a Tesla.</span
              >
            </h1>
            <h3 class="mt-4 ps-2 pe-2">
              Don’t waste time booking<br />
              a traditional car rental...
            </h3>
            <router-link
              class="btn btn-primary btn-lg mt-3 mb-5 rounded-pill"
              tag="button"
              to="/reservations"
            >
              Book now
            </router-link>
          </div>
          <div class="col-6">
            <div class="row g-0 mt-3">
              <div class="col-6">
                <div
                  class="card shadow rounded-3"
                  style="width: 95% !important"
                >
                  <div class="card-body">
                    <img
                      src="../../assets/img/interior/Resla-TeslaModel3.png"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <h3
                      class="card-title primary-color mt-3 font-weight-bold fw-600"
                    >
                      Model 3
                    </h3>
                    <h6 class="text-muted card-text mt-4 mb-0">
                      0-60 in 5.8 seconds
                    </h6>
                    <h6 class="text-muted card-text mt-3">145 mph top speed</h6>
                    <h6 class="text-muted card-text mt-3">272 mile range</h6>
                    <h6 class="text-muted card-text mt-3">Dual Motor AWD</h6>
                    <a
                      href="https://www.resla.com/vehicle/model/3"
                      target="_blank"
                      class="primary-color text-end w-100 d-block mt-3 h6"
                      >learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"
                          fill="#0000FF"
                        /></svg
                    ></a>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div
                  class="card shadow rounded-3"
                  style="width: 95% !important"
                >
                  <div class="card-body">
                    <img
                      src="../../assets/img/interior/Resla-TeslaModelY.png"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <h3
                      class="card-title primary-color mt-3 font-weight-bold fw-600"
                    >
                      Model Y
                    </h3>
                    <h6 class="text-muted card-text mt-4 mb-0">
                      0-60 in 6.6 seconds
                    </h6>
                    <h6 class="text-muted card-text mt-3">135 mph top speed</h6>
                    <h6 class="text-muted card-text mt-3">260 mile range</h6>
                    <h6 class="text-muted card-text mt-3">Dual Motor AWD</h6>
                    <a
                      href="https://www.resla.com/vehicle/model/y"
                      target="_blank"
                      class="primary-color text-end w-100 d-block mt-3 h6"
                      >learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"
                          fill="blue"
                        /></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelsSection",
};
</script>
