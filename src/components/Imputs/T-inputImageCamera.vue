<template>
  <div>
    <input
      id="imageUpload"
      type="file"
      class="hidden"
      multiple
      @change="handleImageUpload"
      accept="image/*"
      ref="fileInput"
    />
    <span :class="imagenInput({ variant: VariantInputImg })">
      <slot><Camera></Camera></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { Camera } from "lucide-vue-next";
import { imagenInput } from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";

type PropConInputImg = VariantProps<typeof imagenInput>;

defineProps<{
  VariantInputImg?: PropConInputImg["variant"];
}>();

const fileInput = ref<HTMLInputElement | null>(null);
const emit = defineEmits(["imageSelected"]);

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files) {
    const selectedImages = Array.from(files);
    emit("imageSelected", selectedImages);
    console.log("Evento imageSelected emitido");
  }
};
</script>
