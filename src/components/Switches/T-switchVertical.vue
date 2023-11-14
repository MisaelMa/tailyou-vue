<template>
  <div class="mt-4">
    <label for="texarea">{{ labelSwitchVertical }}</label>
    <CheckBox
      id="1"
      :checked="isCheckbox1Checked"
      :label="optionSwitch1"
      @changeActive="handleCheckboxChange"
    ></CheckBox>
    <CheckBox
      id="2"
      :checked="isCheckbox2Checked"
      :label="optionSwitch2"
      @changeActive="handleCheckboxChange"
    ></CheckBox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckBox } from "../index";
import { textToolArea } from "@tailyou/cva";

type PropTextArea = VariantProps<typeof textToolArea>;

defineProps<{
  Variant?: PropTextArea["variant"];
  labelSwitchVertical?: string;
  optionSwitch1: string;
  optionSwitch2: string;
}>();

const isCheckbox1Checked = ref(true);
const isCheckbox2Checked = ref(false);

const handleCheckboxChange = (id) => {
  if (id === "1") {
    isCheckbox1Checked.value = true;
    isCheckbox2Checked.value = false;
  } else if (id === "2") {
    isCheckbox2Checked.value = true;
    isCheckbox1Checked.value = false;
  }

  console.log("Checkbox 1:", isCheckbox1Checked.value);
  console.log("Checkbox 2:", isCheckbox2Checked.value);
};
</script>
