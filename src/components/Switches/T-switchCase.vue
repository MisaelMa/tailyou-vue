<template>
  <div class="flex items-center space-x-2">
    <div
      @click="toggleSwitch"
      :class="{ 'bg-gray-900': isChecked, 'bg-gray-300': !isChecked }"
      class="relative rounded-full w-8 h-4 transition duration-200 ease-in-out focus:outline-none cursor-pointer"
    >
      <div
        :class="{ 'translate-x-full': isChecked }"
        class="absolute inset-y-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-200 ease-in-out"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { switchCaseContent, switchIndicatorContent } from "@tailyou/cva";

type PropContent = VariantProps<typeof switchCaseContent>;
type PropIndicator = VariantProps<typeof switchIndicatorContent>;

const props = defineProps<{
  variantContent?: PropContent["variant"];
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
