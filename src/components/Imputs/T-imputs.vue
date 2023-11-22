<template>
  <div class="mb-4">
    <label for="yourInput" :class="labelInput({ variant: variantLabel })">
      {{ label }}
    </label>

    <div>
      <input
        :type="inputType"
        id="yourInput"
        :placeholder="placeholder"
        :class="input({ variant: variantInput })"
        :inputmode="inputType === 'number' ? 'numeric' : 'text'"
        class="pr-10"
        :disabled="isDisabled"
        v-model="inputValue"
      />

      <span :class="auxilaryInput({ variant: variantAuxilary })">
        <slot>{{ auxilary }}</slot></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps, ref, watch } from "vue";
import { input, labelInput, auxilaryInput } from "@tailyou/cva";

type PropsInput = VariantProps<typeof input>;
type PropsLabelImput = VariantProps<typeof labelInput>;
type PropsAuxilaryInput = VariantProps<typeof auxilaryInput>;

const props = defineProps<{
  variantInput?: PropsInput["variant"];
  variantLabel?: PropsLabelImput["variant"];
  variantAuxilary?: PropsAuxilaryInput["variant"];
  placeholder?: string;
  label?: string;
  inputType?: string;
  auxilary?: string;
  isDisabled?: boolean;
  value?: string;
}>();

const inputValue = ref(props.value);

watch(
  () => props.value,
  (newValue) => {
    inputValue.value = newValue;
  }
);
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
