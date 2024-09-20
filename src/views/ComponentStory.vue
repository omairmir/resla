<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="flex flex-col gap-10 justify-center items-center min-h-screen">
    <!-- Primary button with icon -->
    <div class="text-5xl">Buttons</div>
    <div>Primary Button</div>
    <div class="flex items-center gap-10">
      <ButtonComponent trailingIcon>Label</ButtonComponent>
      <ButtonComponent leadingIcon>Label</ButtonComponent>
      <ButtonComponent trailingIcon size="small">Label</ButtonComponent>
      <ButtonComponent trailingIcon size="small" />
      <ButtonComponent trailingIcon size="large" isDisabled>Label</ButtonComponent>
      <ButtonComponent trailingIcon />
    </div>
    <div>Secondary Button</div>
    <div class="flex items-center gap-10">
      <ButtonComponent variant="secondary" trailingIcon>Label</ButtonComponent>
      <ButtonComponent variant="secondary" leadingIcon>Label</ButtonComponent>
      <ButtonComponent variant="secondary" trailingIcon size="small">Label</ButtonComponent>
      <ButtonComponent variant="secondary" trailingIcon size="small" />
      <ButtonComponent variant="secondary" trailingIcon size="large" isDisabled>Label</ButtonComponent>
      <ButtonComponent variant="secondary" trailingIcon />
    </div>
    <div>Tertiary Button</div>
    <div class="flex items-center gap-10">
      <ButtonComponent variant="tertiary" trailingIcon>Label</ButtonComponent>
      <ButtonComponent variant="tertiary" leadingIcon>Label</ButtonComponent>
      <ButtonComponent variant="tertiary" trailingIcon size="large" isDisabled>Label</ButtonComponent>
      <ButtonComponent variant="tertiary" trailingIcon />
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Inputs</div>
    <div class="flex items-center gap-10">
      <TextInput id="test" label="Label" placeholder="place" is-rounded></TextInput>
      <TextInput id="test" label="Label" value="Value" placeholder="place" icon></TextInput>
      <TextInput id="test" label="Label" placeholder="place" isDisabled></TextInput>
      <TextInput id="test" label="Label" placeholder="place" size="small"></TextInput>
      <TextInput id="test" label="Label" placeholder="place" size="small" is-rounded icon></TextInput>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Chips</div>
    <div class="flex items-center gap-10">
      <ChipsButton>Label</ChipsButton>
      <ChipsButton selected>Label</ChipsButton>
      <ChipsButton isDisabled>Label</ChipsButton>
      <ChipsButton selected isDisabled>Label</ChipsButton>
    </div>
    <div class="text-5xl">Color Chips</div>
    <div class="flex items-center gap-10">
      <ColorChip></ColorChip>
      <ColorChip color="blue" selected></ColorChip>
      <ColorChip color="black"></ColorChip>
      <ColorChip color="pearl"></ColorChip>
      <ColorChip color="silver"></ColorChip>
      <ColorChip isDisabled></ColorChip>
      <ColorChip selected isDisabled></ColorChip>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Toggle</div>
    <div class="flex items-center gap-10">
      <Toggle :options="[
        { label: 'Red', value: 'red', },
        { label: '', value: 'blue', icon: '<svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M4 4L12 12M12 4L4 12&quot; stroke=&quot;#636F7E&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /></svg>' },
        { label: 'Green', value: 'green' }
      ]" v-model="selectedOption">

      </Toggle>
      
      <Toggle :options="options" v-model="toggle">
</Toggle>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Badges</div>
    <div class="flex items-center gap-10">
      <BadgeButton type="success">Success</BadgeButton>
      <BadgeButton type="error">Error</BadgeButton>
      <BadgeButton type="warning">Warning</BadgeButton>
      <BadgeButton size="large">Default</BadgeButton>
      <BadgeButton>Default</BadgeButton>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Dropdown Menu</div>
    <div class="flex items-center gap-10">
    <DropdownMenu :id="'my-dropdown'" label="select" variant="secondary" :options=" [
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
      ]" valueKey="id" v-model="selectedOption">
    </DropdownMenu>
    <DropdownMenu :id="'my-dropdown'" label="select" variant="primary" :options=" [
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
      ]" valueKey="id" :icon="false" v-model="selectedOption">
    </DropdownMenu>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Location Card</div>
    <div class="flex items-center gap-10">
      <LocationCard></LocationCard>
    </div>
    <hr color-primary-100 width="100%" />
    <div class="text-5xl">Review Card</div>
    <div class="flex items-center gap-10">
      <ReviewCard></ReviewCard>
      <ReviewCard :rating="2"></ReviewCard>
    </div>
  </div>
</template>

<script>
import ChipsButton from "@/components/base/Chip.vue";
import ButtonComponent from "../components/base/CtaButton.vue";
import TextInput from "@/components/base/TextInput.vue";
import ColorChip from '@/components/base/ColorChip.vue'
import Toggle from '@/components/base/ToggleButton.vue'
import BadgeButton from '@/components/base/Badge.vue'
import DropdownMenu from '@/components/base/DropdownMenu.vue'
import LocationCard from "@/components/base/LocationCard.vue";
import ReviewCard from "@/components/base/ReviewCard.vue";

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
    ReviewCard
  },
  data(){
    return{
      selectedOption:"",
      toggle:"map",
      options:
      [
        { label: '', value: 'map', icon: `<svg width='20' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5.22727V17.5L7.5 14.7727L12.5 17.5L17.5 14.7727V2.5L12.5 5.22727L7.5 2.5L2.5 5.22727Z" fill="#2B2825"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8828 1.85508C18.1105 1.9902 18.25 2.2353 18.25 2.5V14.7727C18.25 15.0472 18.1001 15.2997 17.8591 15.4311L12.8591 18.1584C12.6353 18.2805 12.3647 18.2805 12.1409 18.1584L7.5 15.627L2.85914 18.1584C2.62676 18.2852 2.34477 18.28 2.11715 18.1449C1.88953 18.0098 1.75 17.7647 1.75 17.5V5.22727C1.75 4.95281 1.89992 4.70028 2.14086 4.56885L7.14086 1.84158C7.36472 1.71947 7.63528 1.71947 7.85914 1.84158L12.5 4.37296L17.1409 1.84158C17.3732 1.71483 17.6552 1.71995 17.8828 1.85508ZM11.75 5.6725L8.25 3.76341V14.3275L11.75 16.2366V5.6725ZM13.25 16.2366L16.75 14.3275V3.76341L13.25 5.6725V16.2366ZM6.75 14.3275V3.76341L3.25 5.6725V16.2366L6.75 14.3275Z" fill="#D6D2CD"/>
            </svg>` }
      ]
      
    }
  },
};
</script>