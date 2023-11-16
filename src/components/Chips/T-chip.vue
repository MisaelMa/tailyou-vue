<template>
  <div :class="chip({ variant, size })">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { chip } from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

type PropsChip = VariantProps<typeof chip>;
defineProps<{
  variant?: PropsChip["variant"];
  size?: PropsChip["size"];
}>();
</script>
