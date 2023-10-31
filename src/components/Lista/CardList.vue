<template>
  <div :class="LBody({ variant, size })">
    <div :class="LContent({ variantContent, size })">
      <div :class="LTitle({ variantTitle, size })">
        <slot name="labels"></slot>
      </div>
      <div :class="LMetods({ variantMetods, size })">
        <slot name="methods"></slot>
      </div>
    </div>
    <div class="text-center">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LBody } from "@tailyou/cva";
import { LTitle } from "@tailyou/cva";
import { LContent } from "@tailyou/cva";
import { LMetods } from "@tailyou/cva";

const { variant, size } = defineProps<{
  variant?: any;
  size?: any;
  variantTitle?: any;
  sizeTitle?: any;
  title: string;
  variantContent?: any;
  variantMetods?: any;
}>();
</script>
