<template>
  <div class="flex items-center space-x-2">
    <div
      @click="toggleSwitch"
      :class="{
        [isChecked
          ? switchCaseContent({ variant: variantContent, size: sizeContent })
          : switchCaseContentFalse({
              variant: variantContent,
              size: sizeContent,
            })]: true,
      }"
    >
      <div
        :class="{
          [switchIndicatorContent({
            variant: variantIndicator,
            size: sizeIndicator,
          })]: true,
          'translate-x-full': isChecked,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import {
  switchCaseContent,
  switchIndicatorContent,
  switchCaseContentFalse,
} from "@tailyou/cva";

type PropContent = VariantProps<typeof switchCaseContent>;
type PropContentFalse = VariantProps<typeof switchCaseContentFalse>;
type PropIndicator = VariantProps<typeof switchIndicatorContent>;

const props = defineProps<{
  variantContent?: PropContent["variant"];
  variantContentFalse?: PropContentFalse["variant"];
  variantIndicator?: PropContent["variant"];
  sizeContent?: PropContent["size"];
  sizeIndicator?: PropIndicator["size"];

  defaultChecked: boolean;
}>();

const isChecked = ref(props.defaultChecked || false);

const toggleSwitch = () => {
  isChecked.value = !isChecked.value;
};
</script>
