<template>
  <div
    v-if="isOpen"
    class="modal-wrapper fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    @click="closeDialog"
  >
    <Card v-if="isOpen" variant="modal" size="chartCardauto">
      <headerCard
        variant-content="default"
        variant-title="default"
        :Title="props.title"
      >
        <cardContent variant="default">
          <div>
            <slot name="content"></slot>
          </div>
        </cardContent>
        <slot name="actions">
          <Button @click="closeDialog">Cierra el modal</Button>
        </slot>
      </headerCard>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import { Card, headerCard, cardContent, Button } from "../index";

const props = defineProps<{
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
