<template>
  <div class="mb-4">
    <label
      v-if="label"
      :for="getFor"
      :class="labelInput({ variant: variantLabel })"
    >
      {{ label }}
    </label>

    <div class="relative grid">
      <input
        :type="type"
        :id="getFor"
        v-model="value"
        :placeholder="placeholder"
        :class="classInput({ variant: variantInput })"
        class="pr-10"
        :disabled="disabled"
        :name="name"
        @input="input"
        @blur="onBlur"
        v-bind:class="{
          [classInput({ variant: 'inValid' })]: isTouched && errorMessage,
          [classInput({ variant: 'isValid' })]: isTouched && meta.valid && rule,
        }"
      />

      <div
        v-if="isTouched && meta.valid && rule"
        :class="labelInput({ variant: 'isValid' })"
      >
        Looks good!
      </div>
      <div v-if="isTouched" :class="labelInput({ variant: 'inValid' })">
        {{ errorMessage }}
      </div>
      <span :class="auxilaryInput({ variant: variantAuxilary })">
        <slot>{{ auxilary }}</slot></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps, ref, watch, defineEmits } from "vue";
import { input as classInput, labelInput, auxilaryInput } from "@tailyou/cva";
import { useUtils } from "@/utils/useUtils";
import { useField } from "vee-validate";
type PropsInput = VariantProps<typeof classInput>;
type PropsLabelInput = VariantProps<typeof labelInput>;
type PropsAuxilaryInput = VariantProps<typeof auxilaryInput>;

const props = defineProps<{
  variantInput?: PropsInput["variant"];
  variantLabel?: PropsLabelInput["variant"];
  variantAuxilary?: PropsAuxilaryInput["variant"];
  placeholder?: string;
  label?: string;
  type?: string;
  auxilary?: string;
  disabled?: boolean;
  modelValue: {
    required: false;
    default: "";
  };
  name: string;
  id: string;
  rule: [String, Object];
}>();

const { getFor } = useUtils({ id: props.id });

const emit = defineEmits(["update:modelValue"]);

const input = (data) => {
  if (data.target.type === "file") {
    const selectedFile = data.target.files;
    emit("update:modelValue", selectedFile);
  } else {
    emit("update:modelValue", data.target.value);
  }
};

const isTouched = ref(false);

const onBlur = () => {
  isTouched.value = true;
};

const { errorMessage, meta, value } = useField(
  props.name,
  props.rule ? props.rule : { required: false, validate: false },
  {
    uncheckedValue: false,
    validateOnMount: true,
  }
);
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
