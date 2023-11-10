<template>
  <div v-for="(item, index) in data" :key="index" class="mb-3">
    <div :class="spanPoint({ variant: variantSpan })">
      <span
        :class="`bg-${item.color}`"
        class="w-2.5 h-2.5 rounded-full mt-1 justify-center items-center"
      ></span>
      <div>
        <span class="text-sm"> {{ item.value }} {{ item.text }} </span>
      </div>
    </div>
  </div>
  <div :class="lineSpace({ variant: variantLine })"></div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { lineSpace, spanPoint } from "@tailyou/cva";

type PropsLine = VariantProps<typeof lineSpace>;
type PropsSpanPoint = VariantProps<typeof spanPoint>;

defineProps<{
  variantLine?: PropsLine["variant"];
  variantSpan?: PropsSpanPoint["variant"];
  data: DataSpan[];
}>();
type DataSpan = {
  text: string;
  color: string;
  value?: number;
};
</script>
