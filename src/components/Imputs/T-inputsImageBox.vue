<template>
  <label
    for="imageUpload"
    :class="inputImgBox({ variant: VariantInputImgBox })"
  >
    <span><slot> </slot></span>
  </label>
</template>

<script setup lang="ts">
import { inputImgBox } from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";

type PropConInputImgBox = VariantProps<typeof inputImgBox>;

defineProps<{
  VariantInputImgBox?: PropConInputImgBox["variant"];
}>();
</script>
