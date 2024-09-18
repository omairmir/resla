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
    <div>Chips</div>
    <div class="flex items-center gap-10">
      <ChipsButton>Label</ChipsButton>
      <ChipsButton selected>Label</ChipsButton>
      <ChipsButton isDisabled>Label</ChipsButton>
      <ChipsButton selected isDisabled>Label</ChipsButton>
    </div>
    <div>Color Chips</div>
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
    <div>Toggle</div>
    <div class="flex items-center gap-10">
      <Toggle :options="[
        { label: 'Red', value: 'red', },
        { label: '', value: 'blue', icon: '<svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M4 4L12 12M12 4L4 12&quot; stroke=&quot;#636F7E&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; /></svg>' },
        { label: 'Green', value: 'green' }
      ]" v-model="selectedOption">

      </Toggle>
    </div>
    <hr color-primary-100 width="100%" />
    <div>Badges</div>
    <div class="flex items-center gap-10">
      <BadgeButton type="success">Success</BadgeButton>
      <BadgeButton type="error">Error</BadgeButton>
      <BadgeButton type="warning">Warning</BadgeButton>
      <BadgeButton size="large">Default</BadgeButton>
      <BadgeButton>Default</BadgeButton>
    </div>
    <hr color-primary-100 width="100%" />
    <div>Dropdown Menu</div>
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

export default {
  components: {
    ButtonComponent,
    TextInput,
    ChipsButton,
    ColorChip,
    Toggle,
    BadgeButton,
    DropdownMenu
  },
  data(){
    return{
      selectedOption:""
    }
  },
};
</script>