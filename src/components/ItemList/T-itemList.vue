<template>
  <ul class="list-none">
    <li v-for="item in items" :key="item.id">
      <slot name="itemSlot" :item="item"></slot>
      <div :class="lineSpace({ variant: variantLine })"></div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { lineSpace } from "@tailyou/cva";

type PropsIlineSpace = VariantProps<typeof lineSpace>;

defineProps<{
  variantLine?: PropsIlineSpace["variant"];
  items: any[];
  itemSlot: string;
}>();
</script>
