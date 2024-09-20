import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import ReservationsView from "../views/ReservationsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/terms",
    name: "terms",
    meta: {
      title: "Terms Of Use",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/TermsView.vue"),
  },
  {
    path: "/policies",
    name: "policies",
    meta: {
      title: "General Policies",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/PoliciesView.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    meta: {
      title: "Privacy Policy",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/PrivacyView.vue"),
  },
  {
    path: "/rental-agreement",
    name: "rentalAgreement",
    meta: {
      title: "Rental Agreement",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/RentalAgreement.vue"),
  },
  {
    path: "/faqs",
    name: "faq",
    meta: {
      title: "Frequently Asked Questions",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/FaqsView.vue"),
  },
  {
    path: "/waiver",
    name: "waiver",
    meta: {
      title: "Collision Protection",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "waiver" */ "../views/CollisionProtection.vue"
      ),
  },
  {
    path: "/disclaimers",
    name: "disclaimers",
    meta: {
      title: "Legal Disclaimers",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "disclaimers" */ "../views/DisclaimersView.vue"
      ),
  },
  {
    path: "/reservations",
    name: "reservations",
    meta: {
      title: "Book Now",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ReservationsView,
  },
  {
    path: "/confirmed",
    name: "confirmed",
    meta: {
      title: "Reservation Confirmed",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "confirmed" */ "../views/ReservationConfirmedView.vue"
      ),
  },
  {
    path: "/insurance/upload",
    name: "insurance",
    meta: {
      title: "Upload Insurance",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "insurance" */ "../views/InsuranceView.vue"),
  },
  {
    path: "/insurance/submitted",
    name: "submittedInsurance",
    meta: {
      title: "Submitted Insurance",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "submittedInsurance" */ "../views/InsuranceSubmittedView.vue"
      ),
  },
  {
    path: "/extension",
    name: "extend",
    meta: {
      title: "Request Extension",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "extension" */ "../views/ExtensionView.vue"),
  },
  {
    path: "/extension/submitted",
    name: "submittedExtension",
    meta: {
      title: "Submitted Extension",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "submittedExtension" */ "../views/ExtensionSubmittedView.vue"
      ),
  },
  {
    path: "/verification/submitted",
    name: "submitted",
    meta: {
      title: "Verification Submitted",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "submitted" */ "../views/VerificationSubmittedView.vue"
      ),
  },
  {
    path: "/payment/received",
    name: "paymentReceived",
    meta: {
      title: "Payment Received",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "paymentReceived" */ "../views/PaymentReceivedView.vue"
      ),
  },
  {
    path: "/signature/received",
    name: "signatureReceieved",
    meta: {
      title: "Signature Received",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "signatureReceieved" */ "../views/SignatureReceivedView.vue"
      ),
  },
  {
    path: "/sales",
    name: "sales",
    meta: {
      title: "Vehicles For Sale",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sales" */ "../views/UsedCarsView.vue"),
  },
  {
    path: "/careers/:id/apply",
    name: "jobApply",
    meta: {
      title: "Job Application",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "job" */ "../views/JobApplicationView.vue"),
  },
  {
    path: "/careers/:id/confirmed",
    name: "jobApplyConfirmed",
    meta: {
      title: "Job Application Confirmed",
    },
    beforeEnter: (to, from, next) => {
      const hasAccess = localStorage.getItem('accessJobConfirmed');
      if (hasAccess === 'true') {
        next();
      } else {
        next('/careers');
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "job" */ "../views/JobApplicationConfirmedView.vue"
      ),
  },
  {
    path: "/careers/:id",
    name: "job",
    meta: {
      title: "Job",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "job" */ "../views/JobView.vue"),
  },
  {
    path: "/careers",
    name: "careers",
    meta: {
      title: "Careers",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "careers" */ "../views/CareersView.vue"),
  },
  {
    path: "/vehicle/model/3/long-range",
    name: "Model3LRView",
    meta: {
      title: "Model 3 Long Range",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "model3Lr" */ "../views/models/Model3LRView.vue"
      ),
  },
  {
    path: "/vehicle/model/y/long-range",
    name: "ModelYLRView",
    meta: {
      title: "Model Y Long Range",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "modelYLr" */ "../views/models/ModelYLRView.vue"
      ),
  },
  {
    path: "/vehicle/model/3",
    name: "model3",
    meta: {
      title: "Model 3",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "model3" */ "../views/models/Model3View.vue"),
  },
  {
    path: "/vehicle/model/y",
    name: "modelY",
    meta: {
      title: "Model Y",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "modelY" */ "../views/models/ModelYView.vue"),
  },
  {
    path: "/vehicle/model/x",
    name: "modelX",
    meta: {
      title: "Model X",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "modelX" */ "../views/models/ModelXView.vue"),
  },
  {
    path: "/vehicle/model/s/plaid",
    name: "modelSPlaid",
    meta: {
      title: "Model S Plaid",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "modelSPlaid" */ "../views/models/ModelSPlaidView.vue"
      ),
  },
  {
    path: "/vehicle/model/s",
    name: "modelS",
    meta: {
      title: "Model S",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "modelS" */ "../views/models/ModelSView.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    meta: {
      title: "Contact Us",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/story",
    name: "test",
    meta: {
      title: "Component Test",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ComponentStory.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    meta: {
      title: "Blog",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/BlogView.vue"),
  },
  {
    path: "/blog/:slug",
    name: "article",
    meta: {
      title: "",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/ArticleView.vue"),
  },
  {
    path: "/redirect/quote/:quoteId/:brandId",
    name: "quote-redirect",
    meta: {
      title: "Redirecting...",
    },
    component: () =>
      import(
        /* webpackChunkName: "quote-redirecting" */ "../views/QuoteRedirectingView.vue"
      ),
  },
  {
    path: "/redirect/verify/:id",
    name: "verify-redirect",
    meta: {
      title: "Redirecting...",
    },
    component: () =>
      import(
        /* webpackChunkName: "verify-redirecting" */ "../views/VerifyRedirectingView.vue"
      ),
  },
  {
    path: "/redirect/payment/:id",
    name: "payment-redirect",
    meta: {
      title: "Redirecting...",
    },
    component: () =>
      import(
        /* webpackChunkName: "payment-redirecting" */ "../views/PaymentRedirectingView.vue"
      ),
  },
  {
    path: "/redirect/sign/:id",
    name: "signature-redirect",
    meta: {
      title: "Redirecting...",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "sign" */ "../views/SignatureRedirecting.vue"
      ),
  },
  {
    path: "/redirect/document/:id",
    name: "document-redirect",
    meta: {
      title: "Redirecting...",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "document-redirect" */ "../views/DocumentRedirectingView.vue"
      ),
  },
  {
    path: "/error",
    name: "500",
    meta: {
      title: "Internal Error",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/InternalErrorView.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "Page Not Found",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "pagenotfound" */ "../views/PageNotFoundView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title + " | Resla";
  });
});

export default router;
