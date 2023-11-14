<template>
  <div class="border rounded border-[#c9cccf] mb-1 p-1">
    <span class="text-gray-500">Kid</span>
    <span class="text-interactive pl-2"
      ><a href="#">Change</a
      ><a href="#" class="text-critical ml-2">Unassign</a></span
    >
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { input, labelInput, auxilaryInput } from "@tailyou/cva";

type PropsInput = VariantProps<typeof input>;
type PropsLabelImput = VariantProps<typeof labelInput>;
type PropsAuxilaryInput = VariantProps<typeof auxilaryInput>;

defineProps<{
  variantInput?: PropsInput["variant"];
  variantLabel?: PropsLabelImput["variant"];
  variantAuxilary?: PropsAuxilaryInput["variant"];
  placeholder?: string;
  label?: string;
  inputType?: string;
  auxilary?: string;
}>();
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
