<template>
  <div :class="cardContent({ variant: variant })">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { cardContent } from "@tailyou/cva";

type PropsCardContent = VariantProps<typeof cardContent>;

defineProps<{
  variant?: PropsCardContent["variant"];
}>();
</script>
