<template>
  <div class="lg:border-x border-primary-700">
    <div class="py-20 lg:px-0 px-6 max-w-content w-full mx-auto flex flex-col gap-6 text-left">
        <!--heading-->
        <div class="flex flex-col gap-3">
          <h1 class="font-medium text-heading-1 leading-10 tracking-negative-3 text-primary-100">
            Privacy Policy
          </h1>
          <p class="block font-urbanist text-base text-primary-100">
            Last Updated December 15, 2023
          </p>
        </div>

        <div class="bg-primary-700 w-full h-px"></div>

        <!--contents-->
        <div class="flex flex-col gap-3  text-primary-100 font-urbanist text-sm leading-[22.4px]">
          <p class="block">
            This Privacy Notice for Premiere Luxury Car Rentals LLC (doing business
            as Resla) ("Resla," "we," "us," or "our"), describes how and why we might
            collect, store, use, and/or share ("process") your information when you
            use our services or rent from Resla ("Services"), such as when you:
          </p>

          <ul style="list-style-type:disc;" class="ml-6">
            <li>
              Visit our website <router-link to="/" target="_blank"
                class="underline">https://www.resla.com</router-link>
              or any website of ours that links to this Privacy Notice
            </li>
            <li>
              . Rent from Resla
            </li>
            <li>
              . Engage with us in other related ways, including any sales, marketing, rentals or events.
            </li>
          </ul>

          <p class="block">
            If you have any questions or concerns about this Privacy Policy, please contact us at <a
              href="mailto:admin@resla.com" class="underline">admin@resla.com</a>
          </p>
          <p class="block">
            When you visit, use, or navigate our Services, including engaging our services or
            renting a vehicle from us, you consent that we may process personal information
            depending on how you interact with Resla and the Services, the choices you make,
            and the products and features you use.
          </p>
          <div>
            <p class="font-medium text-base tracking-negative-3">
              Receipt of Information from Third Parties
            </p>
            <p class="block">
              We may receive information from third parties. We do not currently share any of
              your information with third parties; however, we may share information in specific
              situations and with specific third parties as outlined in this Privacy Notice.
            </p>
          </div>
          <div>
            <p class="font-medium text-base tracking-negative-3">
              Why we might process your information
            </p>
            <p class="block">
              We may process your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to comply with law.
              We may also process your information for other purposes. We process your information
              only when we have a valid legal reason to do so.
            </p>
          </div>
          <div>
            <p class="font-medium text-base tracking-negative-3">
              Safety of Information
            </p>
            <p class="block">
              We have organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic transmission
              over the internet or information storage technology can be guaranteed
              to be 100% secure, so we cannot promise or guarantee that hackers, cybe
              rcriminals, or other unauthorized third parties will not be able to def
              eat our security and improperly collect, access, steal, or modify your
              information.
            </p>
          </div>
          <div>
            <p class="font-medium text-base tracking-negative-3">
              Your Privacy Rights
            </p>
            <p class="block">
              Depending on where you are located geographically, the applicable state
              -specific or federal privacy law may mean you have certain rights regar
              ding your personal information.
            </p>
          </div>
          <div>
            <p class="font-medium text-base tracking-negative-3">
              How to Exercise Your Rights
            </p>
            <p class="block">
              You may exercise your rights by filling out our data request form
              available here: <a href="mailto:data-request@resla.com" class="underline">data-request@resla.com</a>, or by
              contacting us. We will
              consider and act upon any request in accordance with applicable data
              protection laws.
            </p>
          </div>
        </div>

        <div class="bg-primary-700 w-full h-px"></div>
        <!--table of contents-->
        <div class="flex flex-col gap-3">
          <h2 class="font-medium text-heading-2 leading-8 text-primary-100">
            Table of Contents
          </h2>
          <ol class="grid grid-cols-1 lg:grid-cols-2  gap-x-2 items-center">
            <li v-for="(item, index) in contentTable" :key="index" class="m-0 p-0">
              <a :href="item.url" class="flex gap-4 px-3 py-4 items-center apperance-none focus:ring-0">
                <div
                  class="size-6 flex items-center justify-center gap-2.5 rounded bg-primary-900 text-base font-medium text-primary-100">
                  {{ index + 1 }}
                </div>
                <div class="font-urbanist font-normal text-base text-primary-300">
                  {{ item.label }}
                </div>
              </a>
            </li>
          </ol>
        </div>
        <div class="bg-primary-700 w-full h-px"></div>

        <div id="information-we-collect" class="mt-3 flex flex-col gap-6">
          <h3 class="font-medium text-heading-2 leading-8 tracking-negative-3 text-primary-100">
            Information We Collect
          </h3>
          <div class="flex flex-col gap-1">
            <p class="font-medium text-2xl leading-8 tracking-negative-2 text-primary-100">
              Personal Information You Disclose to us
            </p>
            <p class="block font-urbanist text-base text-primary-300">
              We collect personal information that you voluntarily provide to us when you
              express an interest in obtaining information about us or our products and
              Services, when you participate in activities on the Services, when you
              rent from Resla, or otherwise when you contact us.
            </p>
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-base leading-8 tracking-negative-2 text-primary-100">
              Personal Information Provided by You
            </p>
            <p class="block font-urbanist  text-base text-primary-300">
              The personal information that we collect depends on the context of your
              interactions with us and the Services, the choices you make, and the
              products and features you use. The personal information we collect
              may include the following:
            </p>
            <ul style="list-style-type:disc;" class="ml-6 block font-urbanist font-medium text-base text-primary-300">
              <li>
                names
              </li>
              <li>
                phone numbers
              </li>
              <li>
                email addresses
              </li>
              <li>
                mailing addresses
              </li>
              <li>
                contact or authentication data
              </li>
              <li>
                debit/credit card numbers
              </li>
              <li>
                driver license number and related information
              </li>
              <li>
                date of birth
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-base leading-8 tracking-negative-2 text-primary-100">
              Payment Data
            </p>
            <p class="block font-urbanist text-base text-primary-300">
              We may collect data necessary to process your payment if you make purchases,
              such as your payment instrument number (such as a credit card number), and
              the security code associated with your payment instrument. All payment data
              is stored by Stripe. You may find their privacy notice link(s) here <a href="https://stripe.com/privacy"
                target="_blank" class="underline">https://stripe.com/privacy</a>
            </p>
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-base leading-8 tracking-negative-2 text-primary-100">
              Social Media Login Data
            </p>
            <p class="block font-urbanist text-base text-primary-300">
              We may provide you with the option to register with us using your existing social
              media account details, like your Facebook, Twitter, or other social media account.
              If you choose to register in this way, we will collect the information described
              in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below.</p>
            <p class="block font-urbanist text-base text-primary-300">
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
          </div>
        </div>


        <div class="flex flex-col gap-2">
          <p class="font-medium text-2xl leading-8 text-primary-100">
            Information Automatically Collected
          </p>
          <p class="block font-urbanist text-base text-primary-300">
            We automatically collect certain information when you visit, use, or navigate the
            Services. This information does not reveal your specific identity (like your name
            or contact information) but may include device and usage information, such as your
            IP address, browser and device characteristics, operating system, language preferences
            , referring URLs, device name, country, location, information about how and when you use
            our Services, and other technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our internal analytics and
            reporting purposes.</p>
          <div class="mt-3">
            <p class="block font-urbanist text-base text-primary-300">
              The information we collect includes:
            </p>
            <ul style="list-style-type:disc;" class="ml-6 block font-urbanist text-base text-primary-300">
              <li>
                Log and Usage Data.Log and usage data is service-related, diagnostic, usage, and performance
                information our servers automatically collect when you access or use our Services and which
                we record in log files. Depending on how you interact with us, this log data may include
                your IP address, device information, browser type, and settings and information about your
                activity in the Services (such as the date/time stamps associated with your usage, pages
                and files viewed, searches, and other actions you take such as which features you use),
                device event information (such as system activity, error reports (sometimes called "crash
                dumps"), and hardware settings).
              </li>
              <li>
                Location Data.We collect location data such as information about your device's location,
                including your rented vehicles location, which can be either precise or imprecise. How
                much information we collect depends on the type and settings of the device you use to
                access the Services, and how you use the rented vehicle(s). For example, we may use GPS
                and other technologies to collect geolocation data that tells us your current location
                (based on your IP address or geolocation software in the rented vehicle). You can opt out
                of allowing us to collect this information on your personal device either by refusing
                access to the information or by disabling your Location setting on your device. However
                , if you choose to opt out, you may not be able to use certain aspects of the Services,
                and you may not prevent us from monitoring the location of Resla property.
              </li>
            </ul>
          </div>

        </div>

        <div id="how-we-process-your-information" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 tracking-negative-3 text-primary-100">
            How We Process Your Information
          </h3>
          <div>
            <p class="block font-urbanist text-base text-primary-300">
              We process your information for a variety of reasons, depending on how you interact with our Services,
              including:
            </p>
            <ul style="list-style-type:disc;" class="ml-6 mt-4 block font-urbanist text-base text-primary-300">
              <li>
                To deliver and facilitate delivery of services to the user.We may process your information to
                provide you with the requested service.
              </li>
              <li>
                To respond to user inquiries/offer support to users.We may process your information to respond
                to your inquiries and solve any potential issues you might have with the requested service.
              </li>
              <li>
                To send administrative information to you.We may process your information to send you details about
                our products and services, changes to our terms and policies, and other similar information.
              </li>
              <li>
                To deliver targeted advertising to you.We may process your information to develop and display
                personalized
                content
                and advertising tailored to your interests, location, and more.
              </li>
              <li>
                To post testimonials.We post testimonials on our Services that may contain personal information
              </li>
              <li>
                To protect our Services and Property.We may process your information as part of our efforts to keep our
                Services safe and secure,
                including fraud monitoring and prevention, and to protect and manage our property.
              </li>
              <li>
                To evaluate and improve our Services, products, marketing, and your experience.We may process your
                information when we believe it
                is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to
                evaluate and improve Our
                Services, products, marketing, and your experience.
              </li>
              <li>
                To identify usage trends.We may process information about how you use our Services to better understand
                how they are being used
                so we can improve them
              </li>
              <li>
                To determine the effectiveness of our marketing and promotional campaigns.We may process your
                information
                to better understand
                how to provide marketing and promotional campaigns that are most relevant to you.
              </li>
              <li>
                To comply with our legal obligations.We may process your information to comply with our legal
                obligations,
                respond to legal requests,
                and exercise, establish, or defend our legal rights.
              </li>
            </ul>
          </div>

        </div>

        <div id="sharing-your-information" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 tracking-negative-3 text-primary-100">
            When and with whom We Share your information
          </h3>
          <div class="flex flex-col gap-1 text-primary-300 text-base leading-[25.6px]">
            <span class="block text-primary-100 font-semibold text-base leading-[25.6px]">Vendors, Consultants, and
              Other
              Third-Party Service Providers</span>
            We may share your data with third-party vendors, service providers, contractors, or agents ("third parties")
            who
            perform services for us or on our behalf and require access to such information to do that work. We have
            contracts
            in place with our third parties, which are designed to help safeguard your personal information. This means
            that
            they cannot do anything with your personal information unless we have instructed them to do it. They will
            also
            not share your personal information with any organization apart from us. They also commit to protect the
            data
            they hold on our behalf and to retain it for the period we instruct. The third parties we may share personal
            information with are as follows
          </div>
          <ul style="list-style-type:disc;" class="ml-6 text-primary-300 font-urbanist text-base leading-[25.6px]">
            <li>
              <span class="font-semibold">Communicate and Chat with Users</span> . Twilio,
              Facebook Customer Chat, MailChimp and Zendesk Chat
            </li>
            <li>
              <span class="font-semibold">Content Optimization</span>. GitHub social
              plugins, MailChimp widget plugin and Instagram embed
            </li>
            <li>
              <span class="font-semibold">Data Backup and Security. </span>. Google Drive
              Backup
            </li>
            <li>
              <span class="font-semibold">Functionality and Infrastructure
                Optimization.</span>. GitHub Pages
            </li>
            <li>
              <span class="ffont-semibold">Invoice and Billing. .</span>. Stripe, Google
              Wallet, Android Pay, Apple Pay and PayPal
            </li>
            <li>
              <span class="font-semibold">Retargeting Platforms. .</span>. Facebook
              Remarketing, Google Analytics Remarketing, Twitter Remarketing, Google Ads Remarketing , Facebook Custom
              Audience, Twitter Tailored Audiences and LinkedIn Website Retargeting
            </li>
            <li>
              <span class="font-semibold">Social Media Sharing and Advertising. </span>.
              Facebook social plugins, Facebook advertising, LinkedIn social plugins, Reddit plugins, Twitter social
              plugins and Twitter advertising
            </li>
            <li>
              <span class="font-semibold">User Account Registration and
                Authentication.</span> Stripe, Google Wallet, Android Pay, Apple Pay and PayPal
            </li>
            <li>
              <span class="font-semibold">Website Hosting.</span> WordPress.com, Amazon Web
              Services
            </li>
          </ul>
          <p class="block font-urbanist font-normal text-base leading-[25.6px] text-primary-300">
            We also may need to share your personal information in the following situations:
          </p>
          <div class="flex flex-col gap-1 font-urbanist text-base">
            <p class="block font-semibold text-primary-100">
              Business Transfers
            </p>
            <p class="block font-normal text-primary-300">
              We may share or transfer your information in connection with, or during negotiations
              of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base">
            <p class="block font-semibold text-primary-100">
              Business Partners
            </p>
            <p class="block font-normal  text-primary-300">
              We may share your information with our business partners to offer you certain products, services, or
              promotions.
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base">
            <p class="block font-semibold text-primary-100">
              Mobile Phone Contact Information
            </p>
            <p class="block font-normal text-primary-300">
              Resla will not share or sell your mobile phone contact information to third parties for marketing
              purposes.
            </p>
          </div>
        </div>

        <div id="how-we-handle-your-social-logins" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            How We Handle Your Social Logins
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            Our Services offer you the ability to register and log in using your third- party social media account
            details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The profile information we receive may
            vary depending on the social media provider concerned, but will often include your name, email address
            , friends list, and profile picture, as well as other information you choose to make public on such a
            social media platform.
          </p>
          <p class="mt-1 block font-urbanist font-normal text-base text-primary-300">
            We will use the information we receive only for the purposes that are described in this privacy notice or
            that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are
            not responsible for, other uses of your personal information by your third-party social media provider.
            We recommend that you review their privacy notice to understand how they collect, use, and share your
            personal information, and how you can set your privacy preferences on their sites and apps.

          </p>

        </div>

        <div id="how-long-we-keep-your-information" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            How Long We Keep Your Information
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this
            privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting,
            or other legal requirements). No purpose in this notice will require us keeping your personal information
            for longer than 6 months.
          </p>

          <p class="mt-1 block font-urbanist font-normal text-base text-primary-300">
            When we have no ongoing legitimate business need to process your personal information, we will either
            delete
            or anonymize such information, or, if this is not possible (for example, because your personal information
            has
            been stored in backup archives), then we will securely store your personal information and isolate it from
            any
            further processing until deletion is possible.
          </p>
        </div>

        <div id="how-we-keep-your-information-safe" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            How We Keep Your Information Safe
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            We have implemented appropriate and reasonable technical and organizational security measures designed
            to protect the security of any personal information we process. However, despite our safeguards and efforts
            to secure your information, no electronic transmission over the Internet or information storage technology
            can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
            other
            unauthorized third parties will not be able to defeat our security and improperly collect, access, steal,
            or modify your information. Although we will do our best to protect your personal information, transmission
            of personal information to and from our Services is at your own risk. You should only access the Services
            within a secure environment.
          </p>
        </div>

        <div id="information-from-minors" class="flex flex-col gap-3">
          <h2 class="font-medium text-heading-2 leading-8 text-primary-100">
            Information From Minors
          </h2>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            We do not knowingly solicit data from or market to persons under 18 years of age.
            By using the Services, you represent that you are at least 18 or that you are the
            parent or guardian of such a minor and consent to such minor dependent’s use of
            the Services. If we learn that personal information from users less than 18 years
            of age has been collected, we will deactivate the account and take reasonable measures
            to promptly delete such data from our records. If you become aware of any data we may
            have collected from children under age 18, please contact us at <a href="mailto:privacy@resla.com"
              class="underline">privacy@resla.com</a>.
          </p>
        </div>

        <div id="your-privacy-rights" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            Your Privacy Rights
          </h3>
          <div class="flex flex-col gap-1">
            <p class="text-base font-semibold leading-[25.6px] text-primary-100">
              Withdrawing your consent
            </p>
            <p class="block font-urbanist font-normal text-base text-primary-300 leading-[25.6px]">
              If we are relying on your consent to process your personal information, which may be express
              and/or implied consent depending on the applicable law, you have the right to withdraw your
              consent at any time. You can withdraw your consent at any time by contacting us using the
              contact details provided at the end of this Privacy Notice.
            </P>
            <p class="mt-4 block font-urbanist font-normal text-base text-primary-300 leading-[25.6px]">
              However, please note that this will not affect the lawfulness of the processing before its withdrawal nor
              , when applicable law allows, will it affect the processing of your personal information conducted in
              reliance on lawful processing grounds other than consent
            </p>
          </div>
          <div class="flex flex-col gap-1">
            <p class="block text-base font-semibold leading-[25.6px] text-primary-100">
              Opting out of marketing and promotional
              communications
            </p>
            <p class="block font-urbanist font-normal text-base text-primary-300 leading-[25.6px]">
              You can unsubscribe from our marketing and promotional communications at any time by clicking on the
              unsubscribe
              link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by
              contacting
              us.You will then be removed from the marketing lists. However, we may still communicate with you — for
              example,
              to send you service- related messages that are necessary for the administration and use of your account,
              to respond to service requests, or for other non-marketing purposes.
            </p>
            <p class="mt-4 block font-urbanist font-normal text-base text-primary-300 leading-[25.6px]">
              If you have questions or comments about your privacy rights, you may email us at <a
                href="mailto:privacy@resla.com" class=underline>privacy@resla.com</a>.
            </p>
          </div>
        </div>

        <div id="controls-for-do-not-track-features" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            Controls for Do-Not-Track Features
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300 leading-[25.6px]">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
            ("DNT") feature or setting you can activate to signal your privacy preference not to have data about
            your online browsing activities monitored and collected. At this stage no uniform technology standard
            for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond
            to DNT browser signals or any other mechanism that automatically communicates your choice not to be
            tracked online. If a standard for online tracking is adopted that we must follow in the future, we
            will inform you about that practice in a revised version of this privacy notice.
          </p>
        </div>

        <div id="ca-residents-specific-privacy-rights" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 text-primary-100">
            California Residents Specific Privacy Rights
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who
            are California residents to request and obtain from us, once a year and free of charge, information
            about categories of personal information (if any) we disclosed to third parties for direct marketing
            purposes and the names and addresses of all third parties with which we shared personal information
            in the immediately preceding calendar year. If you are a California resident and would like to make
            such a request, please submit your request in writing to us using the contact information provided
            below. If you are under 18 years of age, reside in California, and have a registered account with
            Services, you have the right to request removal of unwanted data that you publicly post on the Services.
            To request removal of such data, please contact us using the contact information provided below and
            include the email address associated with your account and a statement that you reside in California.
            We will make sure the data is not publicly displayed on the Services, but please be aware that the
            data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
          </p>
          <div class="flex flex-col gap-2">
            <p class="font-medium text-2xl leading-[38.4px] tracking-negative-2">
              CCPA PrivacyNotice
            </p>
            <div>
              <p class="block font-urbanist font-normal text-base text-primary-300">
                The California Code of Regulations defines a "resident" as:
              </p>
              <ul class="ml-6 block font-urbanist font-normal text-base text-primary-300">
                <li>
                  1. every individual who is in the State of California for other than a temporary or transitory purpose
                  and
                </li>
                <li>
                  2. every individual who is domiciled in the State of California who is outside the State of California
                for a
                temporary or transitory purpose
                </li>
              </ul>
              <p class="block font-urbanist font-normal text-base text-primary-300">
                All other individuals are defined as "non-residents."
              </p>
              <p class="block font-urbanist font-normal text-base text-primary-300">
                If this definition of "resident" applies to you, we must adhere to certain rights and obligations
                regarding
                your personal information.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-2xl leading-9 tracking-negative-2 text-primary-100">
              What categories of personal information do we collect?
            </h3>
            <p class="block font-urbanist font-normal text-base text-primary-300">
              We have collected the following categories of personal information in the past twelve (12) months:
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Identifiers: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Contact details, such as real name, alias, postal address, telephone or mobile contact number,
              unique personal identifier, online identifier, Internet Protocol address, email address, and account name
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Personal Information Categories listed in the California Customer Records Statue: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Name, contact information, education, employment, employment history, and financial information
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Protected classification characteristics under California or federal law: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Gender and date of birth
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Commercial information: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Transaction information, purchase history, financial details, and payment information
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Biometric information: Not Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Fingerprints and voiceprints
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Internet or other similar network activity: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Browsing history, search history, online behavior, interest data,
              and interactions with our and other websites, applications, systems, and advertisements
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Geolocation data: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Device location
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Audio, electronic, visual, thermal, olfactory, or similar information: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Images and audio, video or call recordings created in connection with our business activities
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Professional or employment-related information: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Business contact details in order to provide you our Services at a
              business level or job title, work history, and professional qualifications if you apply for a job with us
            </p>
          </div>
          <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Education Information: Not Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Student records and directory information
            </p>
             </div>
          <!--<div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
            <p class="font-semibold text-primary-100">
              Professional or employment-related information: Collected
            </p>
            <p class="font-normal text-primary-300">
              Examples: Business contact details inorder to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us
            </p>
          </div> -->
            <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
              <p class="font-semibold text-primary-100">
                Inferences drawn from other
                personal information:
                Not Collected
              </p>
              <p class="font-normal text-primary-300">
                Inferences drawn from any of the
                collected personal information listed above to create a profile or summary about,
                for example, an individual’s preferences and characteristics
              </p>
            </div>
            <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
              <p class="font-semibold text-primary-100">
                Inferences drawn from other
                personal information:
                Not Collected
              </p>
              <p class="font-normal text-primary-300">
                Inferences drawn from any of the
                collected personal information listed above to create a profile or summary about,
                for example, an individual’s preferences and characteristics
              </p>
            </div>
            <p class="mt-4 block font-urbanist font-normal text-base text-primary-300">
              We may also collect other personal information outside of these categories through instances where you
              interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul style="list-style-type:disc;" class="ml-6 font-urbanist font-normal text-base leading[25.6px]">
              <li>
                Receiving help through our customer support channels;
              </li>
              <li>
                Participation in customer surveys or contests;
              </li>
              <li>
                How you operate our property; and
              </li>
              <li>
                Facilitation in the delivery of our Services and to respond to your inquiries.
              </li>
            </ul>
            <div class="flex flex-col gap-1 font-urbanist text-base leading-[25.6px]">
              <p class="font-semibold text-primary-100">
                How do we use and share your personal information?
              </p>
              <p class="font-normal text-primary-300">
                More information about our data collection and sharing practices can be found in this privacy notice
              </p>
              <p class="mt-4 font-normal text-primary-300">
                You may contact us by email at any of our email addresses mentioned in this Notice or at <a href="mailto:admin@resla.com" class="underline">admin@resla.com</a>.
              </p>
              <p class="mt-4 font-normal text-primary-300">
                If you are using an authorized agent to exercise your right to opt out, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.  
              </p>
            </div>
        </div>


        <div class="flex flex-col gap-3">
          <h3 class="font-medium text-2xl leading[38.4px] tracking-negative-2 text-primary-100">
            Your rights with respect to your personal data
          </h3>
          <div class="block font-urbanist text-base leading[25.6px] text-primary-300">
            <span class="mb-1 block font-semibold text-primary-100">Right to request deletion of the data — Request to delete</span>
            You can ask for the deletion of your personal information. If you ask us to delete
            your personal information, we will respect your request and delete your personal
            information, subject to certain exceptions provided by law, such as (but not
            limited to) the exercise by another consumer of his or her right to free speech,
            our compliance requirements resulting from a legal obligation, or any processing
            that may be required to protect against illegal activities.
          </div>
          <div class="block font-urbanist text-base leading[25.6px] text-primary-300">
            <span class="mb-1 block font-semibold text-primary-100">Right to be informed — Request to know</span>
            Depending on the circumstances, you have a right to know:
            <ul style="list-style-type:disc;" class="ml-6 font-urbanist font-normal text-base leading[25.6px]">
            <li>
              whether we collect and use your personal information;
            </li>
            <li>
              the categories of personal information that we collect;
            </li>
            <li>
              the purposes for which the collected personal information is used;
            </li>
            <li>
              whether we sell your personal information to third parties;
            </li>
            <li>
              the categories of personal information that we sold or disclosed for a business purpose;
            </li>
            <li>
              the categories of third parties to whom the personal information was sold or disclosed for a business
              purpose; and
            </li>
            <li>
              the business or commercial purpose for collecting or selling personal information.
            </li>

            </ul>
            In accordance with applicable law, we are not obligated to provide or delete consumer information that
            is de-identified in response to a consumer request or to re-identify individual data to verify a consumer
            request.
          </div>
          <div class="block font-urbanist text-base leading[25.6px] text-primary-300">
            <span class="mb-1 block font-semibold text-primary-100">Right to Non-Discrimination for the Exercise of a Consumer ’ s Privacy Rights</span>
            We will not discriminate against you if you exercise your privacy rights.
          </div>
          <div class="block font-urbanist text-base leading[25.6px] text-primary-300">
            <span class="mb-1 block font-semibold text-primary-100">Verification Process</span>
            <span class="block">
              Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
            </span>
            <span class="block mt-4">
              We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
            </span>
          </div>
          <div class="block font-urbanist text-base leading[25.6px] text-primary-300">
            <span class="mb-1 block font-semibold text-primary-100">Other Privacy Rights</span>
            <ul style="list-style-type:disc;" class="ml-6 font-urbanist font-normal text-base leading[25.6px]">
            <li>
              You may object to the processing of your personal information.
            </li>
            <li>
              You may request correction of your personal data if it is incorrect or no longer
              relevant, or ask to restrict the processing of the information.
            </li>
            <li>
              You may request to opt out from future selling of your personal information to third parties.
              Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible,
              but no later than fifteen (15) days from the date of the request submission.
            </li>
          </ul>
          <span class="block">
            To exercise these rights, you can contact us by email at <a href="mailto:admin@resla.com" class="underline">admin@resla.com</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, please inform us at your earliest convenience.
          </span>
          </div>
        </div>

        <div id="updates-to-this-notice" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 tracking-negative-3 text-primary-100">
            Updates to This Notice
          </h3>
          <p class="block font-urbanist font-normal text-base text-primary-300">
            We may update this privacy notice from time to time. The updated version will be indicated
            by an updated "Revised" date and the updated version will be effective as soon as it is
            accessible. If we make material changes to this Privacy Notice, we may notify you either
            by posting a notice of such changes or by directly sending you a notification. We encourage
            you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>
        </div>

        <div id="contact-us" class="flex flex-col gap-3">
          <h3 class="font-medium text-heading-2 leading-8 tracking-negative-3 text-primary-100">
            Contact Us
          </h3>
          <P class="block font-urbanist font-normal text-base text-primary-300">
            If you have questions or comments about this notice, you may email us at <a href="mailto:privacy@resla.com"
              class="underline">privacy@resla.com</a> or by post to:
          </P>
          <P class="block font-urbanist font-normal text-base text-primary-300">
            Premiere Luxury Car Rentals LLC<br>8 W 5th Street<br>Fulton, MO 65251<br>United States
          </P>
          <P class="block font-urbanist font-normal text-base text-primary-300">
            You have the right to request access to the personal information we collect from you, change that
            information, or delete it. To request to review, update, or delete your personal information, please
            visit: <a href="mailto:data-request@resla.com" class="underline">data-request@resla.com</a>
          </P>



        </div>
    </div>
    <!--cta section-->
    <LegalPageCta></LegalPageCta>
  </div>
</template>
<script>
import LegalPageCta from '@/components/LegalPageCta.vue'

export default {
  name: "PrivacyView",
  components: {
    LegalPageCta
  },
  data() {
    return {
      contentTable: [
        {
          label: "Information We Collect",
          url: "#information-we-collect",
        },
        {
          label: "How We Process Your Information",
          url: "#how-we-process-your-information",
        },
        {
          label: "Sharing Your Information",
          url: "#sharing-your-information",
        },
        {
          label: "How We Handle Your Social Logins",
          url: "#how-we-handle-your-social-logins",
        },
        {
          label: "How Long We Keep Your Information",
          url: "#how-long-we-keep-your-information",
        },
        {
          label: "How We Keep Your Information Safe",
          url: "#how-we-keep-your-information-safe",
        },
        {
          label: "Information from Minors",
          url: "#information-from-minors",
        },
        {
          label: "Your Privacy Rights",
          url: "#your-privacy-rights",
        },
        {
          label: "Controls for Do-Not-Track Features",
          url: "#controls-for-do-not-track-features",
        },
        {
          label: "CA Residents Specific Privacy Rights",
          url: "#ca-residents-specific-privacy-rights",
        },
        {
          label: "Updates To This Notice",
          url: "#updates-to-this-notice",
        },
        {
          label: "Contact Us",
          url: "#contact-us",
        },

      ],
    };
  },
};
</script>