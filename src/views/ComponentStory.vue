<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container mx-auto px-8 py-10">
    <!-- Table of Contents -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-2">Base Components</h1>
      <p class="text-gray-600">Explore various components and their states.</p>
      <ul class="list-disc list-inside ml-4">
        <li><a href="#buttons" class="text-blue-500">Buttons</a></li>
        <li><a href="#inputs" class="text-blue-500">Inputs</a></li>
        <li><a href="#chips" class="text-blue-500">Chips</a></li>
        <li><a href="#toggles" class="text-blue-500">Toggles</a></li>
        <li><a href="#badges" class="text-blue-500">Badges</a></li>
        <li><a href="#dropdowns" class="text-blue-500">Dropdown Menu</a></li>
        <li><a href="#cards" class="text-blue-500">Cards</a></li>
        <li><a href="#loading" class="text-blue-500">Loading Animations</a></li>
      </ul>
    </div>

    <!-- Buttons Section -->
    <div id="buttons" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Buttons</h2>
      <p class="text-gray-600 mb-6">
        Buttons are essential interactive elements. Here are the different types
        and sizes available.
      </p>

      <div class="mb-6">
        <h3 class="text-xl font-semibold">Primary Button</h3>
        <div class="flex items-center gap-4">
          <ButtonComponent trailingIcon>Label</ButtonComponent>
          <ButtonComponent leadingIcon>Label</ButtonComponent>
          <ButtonComponent trailingIcon />
          <ButtonComponent trailingIcon size="small">Label</ButtonComponent>
          <ButtonComponent trailingIcon size="large" isDisabled>Label</ButtonComponent>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold">Secondary Button</h3>
        <div class="flex items-center gap-4">
          <ButtonComponent variant="secondary" trailingIcon>Label</ButtonComponent>
          <ButtonComponent variant="secondary" leadingIcon>Label</ButtonComponent>
          <ButtonComponent variant="secondary" leadingIcon></ButtonComponent>
          <ButtonComponent variant="secondary" trailingIcon size="small">Label</ButtonComponent>
          <ButtonComponent variant="secondary" trailingIcon size="large" isDisabled>Label</ButtonComponent>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold">Tertiary Button</h3>
        <div class="flex items-center gap-4">
          <ButtonComponent variant="tertiary" trailingIcon>Label</ButtonComponent>
          <ButtonComponent variant="tertiary" leadingIcon>Label</ButtonComponent>
          <ButtonComponent variant="tertiary" trailingIcon></ButtonComponent>
          <ButtonComponent variant="tertiary" trailingIcon size="large" isDisabled>Label</ButtonComponent>
        </div>
      </div>
    </div>

    <!-- Inputs Section -->
    <div id="inputs" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Inputs</h2>
      <p class="text-gray-600 mb-6">
        Input fields allow users to enter information. Different states and
        sizes are available below.
      </p>
      <div class="flex items-center gap-4">
        <TextInput id="test" label="Label" placeholder="place" is-rounded></TextInput>
        <TextInput id="testa" label="Label" value="Value" placeholder="place" icon></TextInput>
        <TextInput id="testb" label="Label" placeholder="place" isDisabled></TextInput>
        <TextInput id="testc" label="Label" placeholder="place" size="small"></TextInput>
        <TextInput id="testd" label="Label" placeholder="place" size="small" is-rounded icon></TextInput>
      </div>
    </div>

    <!-- Chips Section -->
    <div id="chips" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Chips</h2>
      <div class="flex items-center gap-4">
        <ChipsButton>Label</ChipsButton>
        <ChipsButton selected>Label</ChipsButton>
        <ChipsButton isDisabled>Label</ChipsButton>
        <ChipsButton selected isDisabled>Label</ChipsButton>
      </div>
    </div>

    <!--Color Chip-->
    <div id="chips" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Color Chips</h2>
      <div class="flex items-center gap-4">
        <ColorChip></ColorChip>
        <ColorChip color="blue" selected></ColorChip>
        <ColorChip color="black"></ColorChip>
        <ColorChip color="pearl"></ColorChip>
        <ColorChip color="silver"></ColorChip>
        <ColorChip isDisabled></ColorChip>
        <ColorChip selected isDisabled></ColorChip>
      </div>
    </div>

    <!-- Toggles Section -->
    <div id="toggles" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Toggles</h2>
      <div class="flex items-center gap-10">
        <Toggle :options="[
          { label: 'Red', value: 'red' },
          {
            label: '',
            value: 'blue',
            icon: '<svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M4 4L12 12M12 4L4 12&quot; stroke=&quot;#636F7E&quot; stroke-          1.5          e-linecap=&quot;round&quot; stroke-l        uot;round&quot; /></svg>',
            },
            { label: 'Green', value: 'green' },
          ]" v-model="selectedOption">
        </Toggle>

        <Toggle :options="options" v-model="toggle"> </Toggle>
      </div>
    </div>

    <!-- Badges Section -->
    <div id="badges" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Badges</h2>
      <div class="flex items-center gap-4">
        <BadgeButton>Default</BadgeButton>
        <BadgeButton type="success">Success</BadgeButton>
        <BadgeButton type="error">Error</BadgeButton>
        <BadgeButton type="warning">Warning</BadgeButton>
      </div>
    </div>

    <!-- Dropdown Menu Section -->
    <div id="dropdowns" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Dropdown Menu</h2>
      <div class="flex items-center gap-4">
        <DropdownMenu :id="'my-dropdown'" label="Select an option" variant="secondary" :options="[
          { id: '1', label: 'Option 1' },
          { id: '2', label: 'Option 2' },
        ]" valueKey="id" v-model="selectedOption" />
        <DropdownMenu :id="'my-dropdown'" label="Select an option" variant="primary" :options="[
          { id: '1', label: 'Option 1' },
          { id: '2', label: 'Option 2' },
        ]" valueKey="id" :value="'2'" :icon="true" />
      </div>
    </div>

    <!-- Location Card -->
    <div id="cards" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Loaction Card</h2>
      <div class="flex items-center">
        <LocationCard class="w-max" />
        <LocationCard :location="{
          city: 'Phoenix',
          state: 'AZ',
          icon: '',
          url: '',
        }" />
        <LocationCard class="w-max" />
      </div>
    </div>

    <!-- Faq Card -->
    <div id="cards" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Faq Card</h2>
      <div class="flex flex-col">
        <FaqCard question="I auto insurance required to rent with Resla?" answer="I auto insurance required to rent with Resla?"/>
        <FaqCard question="I auto insurance required to rent with Resla?" answer="Answer lorem ipsum dolor sit amit Answer lorem ipsum dolor sit amit" open/>
        <FaqCard question="I auto insurance required to rent with Resla?" answer="I auto insurance required to rent with Resla?" route="#"/>
      </div>
    </div>

    <!-- Review Card -->
    <div id="cards" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Review Card</h2>
      <div class="flex items-center gap-4">
        <ReviewCard></ReviewCard>
        <ReviewCard :rating="2"></ReviewCard>
      </div>
    </div>

    <!-- Loading Animations Section -->
    <div id="loading" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Loading Animations</h2>
      <div class="flex items-center gap-6">
        <LoadingAnimation :full-screen="false" type="spin"></LoadingAnimation>
        <LoadingAnimation :full-screen="false"></LoadingAnimation>
        <LoadingAnimation :full-screen="false" type="tire"></LoadingAnimation>
      </div>
    </div>

    <!-- Model Link -->
    <div id="cards" class="mb-16">
      <h2 class="text-3xl font-semibold mb-4">Model Link & Card</h2>
      <div class="flex items-center gap-10">
        <ModelLink :imgSrc="'model-3-front.png'" :name="'Model 3'" :url="'#'" />
        <ModelCard class="max-w-xl" :model-detail="{
                    name: 'Model 3',
                    imageUrl:'model-3.png',
                    rent: '69',
                    range: '272',
                    zeroToSixty: '5.1',
                    topSpeed: '162', 
                    dualAWD: true, 
                    colors: ['paint-red','paint-pearl', 'paint-blue', 'paint-black','paint-silver']
                }"></ModelCard>
      </div>
    </div>
  </div>
</template>

<script>
import ChipsButton from "@/components/base/Chip.vue";
import ButtonComponent from "../components/base/CtaButton.vue";
import TextInput from "@/components/base/TextInput.vue";
import ColorChip from "@/components/base/ColorChip.vue";
import Toggle from "@/components/base/ToggleButton.vue";
import BadgeButton from "@/components/base/Badge.vue";
import DropdownMenu from "@/components/base/DropdownMenu.vue";
import LocationCard from "@/components/base/LocationCard.vue";
import ReviewCard from "@/components/base/ReviewCard.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import FaqCard from "@/components/base/FaqCard.vue";
import ModelLink from "@/components/base/ModelLink.vue";
import ModelCard from "@/components/base/ModelCard.vue";

export default {
  components: {
    ButtonComponent,
    TextInput,
    ChipsButton,
    ColorChip,
    Toggle,
    BadgeButton,
    DropdownMenu,
    LocationCard,
    ReviewCard,
    LoadingAnimation,
    FaqCard,
    ModelLink,
    ModelCard
  },
  data() {
    return {
      selectedOption: "red",
      toggle: "map",
      options: [
        {
          label: "",
          value: "map",
          icon: `<svg width='20' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5.22727V17.5L7.5 14.7727L12.5 17.5L17.5 14.7727V2.5L12.5 5.22727L7.5 2.5L2.5 5.22727Z" fill="#2B2825"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8828 1.85508C18.1105 1.9902 18.25 2.2353 18.25 2.5V14.7727C18.25 15.0472 18.1001 15.2997 17.8591 15.4311L12.8591 18.1584C12.6353 18.2805 12.3647 18.2805 12.1409 18.1584L7.5 15.627L2.85914 18.1584C2.62676 18.2852 2.34477 18.28 2.11715 18.1449C1.88953 18.0098 1.75 17.7647 1.75 17.5V5.22727C1.75 4.95281 1.89992 4.70028 2.14086 4.56885L7.14086 1.84158C7.36472 1.71947 7.63528 1.71947 7.85914 1.84158L12.5 4.37296L17.1409 1.84158C17.3732 1.71483 17.6552 1.71995 17.8828 1.85508ZM11.75 5.6725L8.25 3.76341V14.3275L11.75 16.2366V5.6725ZM13.25 16.2366L16.75 14.3275V3.76341L13.25 5.6725V16.2366ZM6.75 14.3275V3.76341L3.25 5.6725V16.2366L6.75 14.3275Z" fill="#D6D2CD"/>
            </svg>`,
        },
      ],
    };
  },
};
</script>
