<template>
  <!-- ... tu código existente ... -->
  <div
    class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6 -my-6 divide-y divide-gray-300"
  >
    <slot name="product">
      <div
        class="w-full flex items-center py-6"
      >
        <slot name="product-image">
          <div
            class="overflow-hidden rounded-lg w-32 h-auto bg-gray-50 border border-gray-200 mt-2"
          >
          </div>
        </slot>
        
        <slot name="product-details">

        </slot>
        
        <slot name="product-price">

        </slot>
      </div>
    </slot>
  </div>
</template>


<script setup lang="ts">
import { User, Menu, ShoppingCart, Trash2 } from "lucide-vue-next";
import { ref } from "vue";


const showSidebar = ref(false);
const showUserSidebar = ref(false);
const showCarSidebar = ref(false);
const selectAttributes = {};
const productAdd = store.isBag;
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleUserSidebar = () => {
  showUserSidebar.value = !showUserSidebar.value;
};

const toggleCarSidebar = () => {
  showCarSidebar.value = !showCarSidebar.value;
};
</script>

