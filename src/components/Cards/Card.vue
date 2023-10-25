<template>
  <div :class="card({ variant, size })">
    <div>
      <img
        :src="imageUrl"
        alt="Imagen del producto"
        :class="cardImage({ variantImage, sizeImage })"
      />
    </div>

    <div :class="cardTitle({ variantTitle, sizeTitle })">
      {{ title }}
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { card } from "@tailyou/cva";
import { cardImage } from "@tailyou/cva";
import { cardTitle } from "@tailyou/cva";

const { variant, size, imageUrl, title } = defineProps<{
  variant?: any;
  size?: any;
  variantImage?: any;
  sizeImage?: any;
  variantTitle?: any;
  sizeTitle?: any;
  imageUrl: string;
  title: string;
}>();
</script>
