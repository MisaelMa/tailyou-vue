<template>
  <div :class="card({ variant, size })">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { card } from "@tailyou/cva";

type PropsCardGeneral = VariantProps<typeof card>;

defineProps<{
  variant?: PropsCardGeneral["variant"];
  size?: PropsCardGeneral["size"];
}>();
</script>
