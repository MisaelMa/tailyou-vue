<template>
  <button @click="agregarAlCarrito(product)">
    <ShoppingCart :class="ButtonCar({ variant })"></ShoppingCart>
  </button>
</template>
<script lang="ts" setup>
import { ShoppingCart } from "lucide-vue-next";
import { ProductModel } from "~/types/products.model";
import { useBagStore } from "~/store/bag";
import { defineProps } from "vue";
import { ButtonCar } from "@tailyou/cva"
import { cva, type VariantProps } from "class-variance-authority";



const store = useBagStore();

const agregarAlCarrito = (producto: ProductModel) => {
  store.AddProduct(producto);
};

type PropsButton = VariantProps<typeof ButtonCar>
withDefaults(
  defineProps<{
    variant: PropsButton["variant"];
    product: Array<any>;
  
  }>(),
  
  {variant:'default', product: [] as any}
);

</script>
