<template>
  <div class="mt-4">
    <label for="texarea">{{ labelTextArea }}</label>
    <textarea
      id="texarea"
      name="texarea"
      rows="2"
      cols="79"
      :class="textToolArea({ variant: Variant })"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { textToolArea } from "@tailyou/cva";

type PropTextArea = VariantProps<typeof textToolArea>;

const props = defineProps<{
  Variant?: PropTextArea["variant"];
  labelTextArea?: string;
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
