<template>
  <div class="mt-4">
    <label for="texarea">{{ labelTextArea }}</label>
    <div class="mt-2"></div>
    <div :class="conteinerToolArea({ variant: VariantConeiner })">
      <div>
        <slot><Camera></Camera></slot>
      </div>
      <div class="flex self-center">
        <div :class="separateToolArea({ variant: VariantSeárate })"></div>
        <ul class="flex self-center">
          <li>
            <button
              :class="iconToolArea({ variant: VariantIcon })"
              @click="makeBold"
            >
              <Bold class="stroke-2"></Bold>
            </button>
          </li>
          <li>
            <button
              :class="iconToolArea({ variant: VariantIcon })"
              @click="makeItalic"
            >
              <Italic class="stroke-2"></Italic>
            </button>
          </li>
          <li>
            <button :class="iconToolArea({ variant: VariantIcon })" @click="">
              <Link class="stroke-2"></Link>
            </button>
          </li>
          <li>
            <button
              :class="iconToolArea({ variant: VariantIcon })"
              @click="makeList"
            >
              <List class="stroke-2"></List>
            </button>
          </li>
          <li>
            <button
              :class="iconToolArea({ variant: VariantIcon })"
              @click="makeOrdered"
            >
              <ListOrdered class="stroke-2"></ListOrdered>
            </button>
          </li>
          <li>
            <button :class="iconToolArea({ variant: VariantIcon })" @click="">
              <Quote class="stroke-2"></Quote>
            </button>
          </li>
          <li>
            <button :class="iconToolArea({ variant: VariantIcon })" @click="">
              <Sheet class="stroke-2"></Sheet>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <textarea
      v-model="text"
      id="texarea"
      name="texarea"
      rows="1"
      cols="79"
      :style="{
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal',
        height: text ? 'auto' : '2.8rem',
        overflow: 'hidden',
      }"
      :class="textToolArea({ variant: VariantTextArea })"
      @input="resizeTextarea"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { Camera } from "lucide-vue-next";
import {
  conteinerToolArea,
  iconToolArea,
  separateToolArea,
  textToolArea,
} from "@tailyou/cva";
import { InputImageCamera } from "../index";

import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Sheet,
} from "lucide-vue-next";

type PropConteiner = VariantProps<typeof conteinerToolArea>;
type PropSIcon = VariantProps<typeof iconToolArea>;
type PropSeparate = VariantProps<typeof separateToolArea>;
type PropTextArea = VariantProps<typeof textToolArea>;

defineProps<{
  VariantConeiner?: PropConteiner["variant"];
  VariantIcon?: PropSIcon["variant"];
  VariantSeárate?: PropSeparate["variant"];
  VariantTextArea?: PropTextArea["variant"];
  labelTextArea?: string;
}>();
const text = ref("");
const isBold = ref(false);
const isItalic = ref(false);

const makeBold = () => {
  isBold.value = !isBold.value;
};

const makeItalic = () => {
  isItalic.value = !isItalic.value;
};

const makeList = () => {
  const lines = text.value.split("\n");
  text.value = lines.map((line) => `• ${line}`).join("\n");
};

const makeOrdered = () => {
  const lines = text.value.split("\n");
  let count = 1;
  text.value = lines.map((line) => `${count++}. ${line}`).join("\n");
};

const resizeTextarea = () => {
  const textarea = document.getElementById("texarea");
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};
</script>
