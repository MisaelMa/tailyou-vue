<template>
  <label
    v-if="label"
    for="countries"
    class="block mb-2 text-sm font-medium text-gray-900"
    >{{ label }}</label
  >
  <select
    id="countries"
    class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @change="onChange"
  >
    <option :selected="localSelect" disabled readonly>
      {{ placeholder }}
    </option>
    <option
      v-for="(item, i) of items"
      :key="i"
      :selected="isSelected(item)"
      :value="i"
    >
      {{ getText(item) }}
    </option>
  </select>
</template>
<script setup>
import { defineExpose, defineProps, defineEmits, computed } from "vue";
defineExpose({
  name: "WSelect",
});
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  label: String,
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {},
  items: Array,
  itemValue: {},
  itemText: {},
  returnObject: Boolean,
});
const localSelect = computed(() => {
  const exist = !!props.items.filter((item) => isSelected(item)).length;
  return !exist;
});
const getText = (item) => {
  if (!props.itemText) {
    return item;
  }
  return item[props.itemText];
};
const getValue = (item) => {
  if (!props.itemValue) {
    return item;
  }
  return item[props.itemValue];
};
const onChange = (event) => {
  const index = event.target.value;
  const value = getValue(props.items[index]);
  emit("update:modelValue", value);
  emit("change", value);
};
const isSelected = (item) => {
  if (typeof item === "object") {
    if (!props.itemValue) {
      return compareObjects(item, props.modelValue);
    }
    return getValue(item) === props.modelValue;
  }
  const selected = item === props.modelValue;
  return selected;
};
const compareObjects = (a, b) => {
  let s = (o) =>
    Object.entries(o)
      .sort()
      .map((i) => {
        if (i[1] instanceof Object) i[1] = s(i[1]);
        return i;
      });
  return JSON.stringify(s(a)) === JSON.stringify(s(b));
};
</script>
<style scoped>
select option:disabled {
  color: #000;
  font-weight: bold;
}
</style>
