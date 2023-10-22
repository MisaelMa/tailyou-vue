<template>
  <label :class="iFile({ variant })">
    <slot>Subir Imagen</slot>
    <input
      type="file"
      @change="onFileChange"
      accept="image/*"
      multiple
      class="hidden"
      ref="fileInput"
    />
  </label>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";
import { ref, defineEmits } from "vue";
import { iFile } from "@tailyou/cva";

type PropsIFile = VariantProps<typeof iFile>;

defineProps<{
  variant?: PropsIFile["variant"];
}>();
const fileInput = ref<HTMLInputElement | null>(null);
const emit = defineEmits();

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    emit("file-selected", Array.from(input.files));
  }
};
</script>
