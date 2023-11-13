<template>
  <div class="block">
    <div class="mt-2">
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          :id="id"
          v-model="isChecked"
          @change="toggleChecked"
          :class="checkBox({ variant: Variant })"
        />
        <span class="ml-1">{{ label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";
import { checkBox } from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";

type PropsCheckBox = VariantProps<typeof checkBox>;

const emit = defineEmits(["changeActive"]);

const props = defineProps<{
  Variant?: PropsCheckBox["variant"];
  id: string;
  checked: boolean;
  label?: string;
}>();

const isChecked = ref(props.checked);

const toggleChecked = () => {
  emit("changeActive", props.id);
};

watch(
  () => props.checked,
  (newValue) => {
    isChecked.value = newValue;
  }
);
</script>
