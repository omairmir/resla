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

    <div>Chips Button</div>
    <div class="flex items-center gap-10">
      <ChipsButton size="small">Label</ChipsButton>
      <ChipsButton size="small" isDisabled>Label</ChipsButton>
    </div>

  </div>
</template>

<script>
import ChipsButton from "@/components/base/Chips.vue";
import ButtonComponent from "../components/base/ButtonComponent.vue";
import TextInput from "@/components/base/TextInput.vue";

export default {
  components: {
    ButtonComponent,
    TextInput,
    ChipsButton,
  },
};
</script>