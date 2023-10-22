<script setup  lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { button } from "@tailyou/cva"
import {cn} from '../../utils/cn'
import { Loader } from 'lucide-vue-next';

//type ButtonProps = Required<VariantProps<typeof button>>;
type ButtonProps = VariantProps<typeof button>

withDefaults(
  defineProps<{variant:ButtonProps["variant"],size:ButtonProps["size"],isLoading?: boolean;}>(),
  {
    variant: 'default',
    size: 'default',
    isLoading: false
  }
);
</script>
<template>
  <button :class="cn(button({ variant, size }))">
     <Loader v-if="isLoading" color="red" :size="32" class="w-4 h-4 mr-2 animate-spin" />
    <slot />
  </button>
</template>