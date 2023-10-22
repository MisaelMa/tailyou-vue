<template>
  <header :class="Header({ Vheader })">
    <h1 :class="Title({ Vtitle })">
      <slot name="Title"></slot>
    </h1>
    <div :class="BtnMenu({ Vbtnmenu })">
      <slot name="BotonMenu"></slot>
    </div>
     <div :class="BtnUser({ Vbtnuser })">
      <slot name="BotonUser"></slot>
    </div>
  </header>
  <div>
    <slot name="BotonFondo"></slot>
    <slot name="UserTranstition">
      <slot name="ListadeDatos" :class="ListUser({ Vlistuser })">
        <slot name="Botones" :class="BotonUser({ Vbotonuser })"> </slot>
      </slot>
    </slot>
    <slot name="BotonFondoSidebar"></slot>
    <slot name="TranstitionSidebar">
    </slot>
  </div>
</template>

<script setup lang="ts">
import {
  Header,
  CFondoUser,
  CUser,
  ListUser,
  Title,
  BtnUser,
  BtnFondoUser,
  BotonUser,
  BtnMenu,
} from "@tailyou/cva";

import { User, Menu } from "lucide-vue-next";
import { ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

type PropsHeader = VariantProps<typeof Header>;
type PropsTitle = VariantProps<typeof Title>;
type PropsCFondoUser = VariantProps<typeof CFondoUser>;
type PropsCUser = VariantProps<typeof CUser>;
type PropsListUser = VariantProps<typeof ListUser>;
type PropsBtnUser = VariantProps<typeof BtnUser>;
type PropsBtnFondoUser = VariantProps<typeof BtnFondoUser>;
type PropsBotonUser = VariantProps<typeof BotonUser>;
type PropsBtnMenu = VariantProps<typeof BtnMenu>;

defineProps<{
  Vcuser?: PropsCUser["Vcuser"];
  Vheader?: PropsHeader["Vheader"];
  Vtitle?: PropsTitle["Vtitle"];
  Vfondocuser?: PropsCFondoUser["Vfondocuser"];
  Vlistuser?: PropsListUser["Vlistuser"];
  Vbtnuser?: PropsBtnUser["Vbtnuser"];
  Vbtnfondouser?: PropsBtnFondoUser["Vbtnfondouser"];
  Vbotonuser?: PropsBotonUser["Vbotonuser"];
  Vbtnmenu?: PropsBtnMenu["Vbtnmenu"];
}>();

const showSidebar = ref(false);
const showUserSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleUserSidebar = () => {
  showUserSidebar.value = !showUserSidebar.value;
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
