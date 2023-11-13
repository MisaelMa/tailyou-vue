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
import { ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { textToolArea } from "@tailyou/cva";

type PropTextArea = VariantProps<typeof textToolArea>;

defineProps<{
  Variant?: PropTextArea["variant"];
  labelTextArea?: string;
}>();
</script>
