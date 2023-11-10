<template>
  <ul class="list-none">
    <li v-for="item in items" :key="item.id">
      <slot name="itemSlot" :item="item"></slot>
      <hr class="border-spacing-x-1 my-3" />
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

defineProps<{
  items: any[];
  itemSlot: string;
}>();
</script>
