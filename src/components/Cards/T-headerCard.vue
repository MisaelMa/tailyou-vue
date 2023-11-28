<template>
  <div :class="headerContent({ variant: variantContent })">
    <div :class="headerTitle({ variant: variantTitle })">{{ Title }}</div>
    <div>
      <div :class="spaceOption({ variant: variantSpOption })">
        <slot name="actions"
          :class="headerOption({ variant: variantOption })"
        >
        </slot>
      </div>
    </div>
  </div>

  <div><slot></slot></div>
</template>
<script lang="ts" setup>
import {
  headerContent,
  headerOption,
  headerTitle,
  spaceOption,
} from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

type PropsHeaderContent = VariantProps<typeof headerContent>;
type PropsHeaderOption = VariantProps<typeof headerOption>;
type PropsHeaderTitle = VariantProps<typeof headerTitle>;
type PropsHeaderSpaceOption = VariantProps<typeof spaceOption>;

defineProps<{
  variantContent?: PropsHeaderContent["variant"];
  variantOption?: PropsHeaderOption["variant"];
  variantTitle?: PropsHeaderTitle["variant"];
  variantSpOption?: PropsHeaderSpaceOption["variant"];

  Title?: string;
}>();
</script>
