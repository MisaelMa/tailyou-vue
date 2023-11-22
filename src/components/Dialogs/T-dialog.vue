<template>
  <div v-if="isOpen" :class="dialogAbroad({ variant: AbroadV })">
    <Card v-if="isOpen" variant="default" size="dialogBig" class="my-4">
      <headerCard
        variant-content="default"
        variant-title="default"
        :Title="props.title"
      >
      </headerCard>
      <cardContent
        variant="default"
        :class="dialogScroll({ variant: ScrollV })"
      >
        <div>
          <slot name="content"></slot>
        </div>
      </cardContent>

      <div class="m-4">
        <slot name="actions">
          <Button
            class="ml-[26rem]"
            variant="slate"
            size="default"
            @click="closeDialog"
            >Close</Button
          >
        </slot>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import { Card, headerCard, cardContent, Button } from "../index";
import { cva, type VariantProps } from "class-variance-authority";
import { dialogAbroad, dialogScroll } from "@tailyou/cva";

type PropsAbroad = VariantProps<typeof dialogAbroad>;
type PropsScroll = VariantProps<typeof dialogScroll>;

const props = defineProps<{
  AbroadV?: PropsAbroad["variant"];
  ScrollV?: PropsScroll["variant"];
  title?: string;
  openDialog?: boolean;
}>();

const emits = defineEmits();

const isOpen = ref(props.openDialog || false);

watch(
  () => props.openDialog,
  (nuevoValor) => {
    console.log("Watcher - props.openDialog cambió a:", nuevoValor);

    isOpen.value = nuevoValor;
  }
);
const closeDialog = () => {
  console.log("Cerrando el diálogo");
  isOpen.value = false;
  emits("update:openDialog", false);
  emits("closeDialog");
  console.log("Estado al cerrase", isOpen.value);
};
</script>
