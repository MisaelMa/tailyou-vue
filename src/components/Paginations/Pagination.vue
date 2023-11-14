<template>
  <div class="text-center mt-3">
    <nav :class="bodypagination(variantBody)">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        :class="paginationNum(variant)"
      >
        <slot name="beforeText"><ArrowBigLeftDash /></slot>
      </button>

      <div v-for="pageNumber in visiblePages" :key="pageNumber">
        <button
          @click="goToPage(pageNumber)"
          :class="[
            currentPage === pageNumber
              ? btnPagination(btnPageVariant)
              : btnPaginationHover(btnPageHoverVariant),
          ]"
        >
          {{ pageNumber }}
        </button>
      </div>

      <div v-if="showEllipsisEnd">
        <span class="px-4 py-2">...</span>
      </div>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        :class="paginationNum(variant)"
      >
        <slot name="nextText"><ArrowBigRightDash /></slot>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted } from "vue";
import { btnPagination } from "@tailyou/cva";
import { bodypagination } from "@tailyou/cva";
import { ArrowBigLeftDash } from "lucide-vue-next";
import { ArrowBigRightDash } from "lucide-vue-next";
import { paginationNum } from "@tailyou/cva";
import { btnPaginationHover } from "@tailyou/cva";

const {
  variant,
  totalPages,
  btnPageHoverVariant,
  btnPageVariant,
  variantBody,
  modelValue: currentPageProp,
} = defineProps<{
  variantBody?: any;
  variant?: any;
  btnPageHoverVariant?: any;
  btnPageVariant?: any;
  totalPages: number;
  modelValue: number;
}>();

const emit = defineEmits(["update:modelValue"]);
const currentPage = ref(currentPageProp);

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:modelValue", currentPage.value);
  } else {
    currentPage.value = totalPages;
    emit("update:modelValue", currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    emit("update:modelValue", currentPage.value);
  } else {
    currentPage.value = 1;
    emit("update:modelValue", currentPage.value);
  }
};

const isNumber = (value: any) => {
  return typeof value === "number";
};

const goToPage = (pageNumber: number) => {
  if (isNumber(pageNumber)) {
    currentPage.value = pageNumber;
    emit("update:modelValue", currentPage.value);
  }
};

const visiblePages = computed(() => {
  if (totalPages <= 9) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    const visibleBefore = 8;
    const visibleAfter = 0;
    const totalPagesValue = totalPages;

    let startPage = currentPage.value - visibleBefore;
    let endPage = currentPage.value + visibleAfter;

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }
    if (endPage > totalPagesValue) {
      startPage -= endPage - totalPagesValue;
      endPage = totalPagesValue;
    }

    const visiblePagesValue = [];
    for (let i = startPage; i <= endPage; i++) {
      visiblePagesValue.push(i);
    }

    return visiblePagesValue;
  }
});

const showEllipsisEnd = computed(() => {
  return (
    totalPages > 9 &&
    visiblePages.value[visiblePages.value.length - 1] < totalPages
  );
});
</script>
