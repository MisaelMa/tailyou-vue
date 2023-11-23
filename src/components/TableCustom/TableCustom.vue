<template>
  <div>
    <table :class="TTable({ Vtable })">
      <thead :class="THeader({ Vheader })">
        <tr :class="TTr({ Vtr })">
          <th v-for="(header, index) in headers" :class="TTh({ Vth })">
            <template v-if="!$slots[header.text]" class="m-2">
              {{ header.text }}
            </template>
            <slot :name="header.text" :index="index" :item="header"></slot>
            <span v-if="header.text === 'site.types'">
              
            </span>
          </th>
        </tr>
      </thead>

      <tbody :class="TBody({ Vbody })">
        <tr v-for="(items, i) in data">
          <td v-for="head in headers" :class="TTd({ Vtd })">
            <template v-if="!$slots[head.value]" class="m-2">
              {{ items[head.value] }}
            </template>
            <slot :name="head.value" :index="i" :item="items"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { TTable } from "@tailyou/cva";
import { THeader } from "@tailyou/cva";
import { TBody } from "@tailyou/cva";
import { TTd } from "@tailyou/cva";
import { TTh } from "@tailyou/cva";
import { TTr } from "@tailyou/cva";

import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

type PropsTable = VariantProps<typeof TTable>;
type PropsHeader = VariantProps<typeof THeader>;
type PropsBody = VariantProps<typeof TBody>;
type PropsTd = VariantProps<typeof TTd>;
type PropsTh = VariantProps<typeof TTh>;
type PropsTr = VariantProps<typeof TTr>;

withDefaults(
  defineProps<{
    Vtable?: PropsTable["Vtable"];
    Vheader?: PropsHeader["Vheader"];
    Vbody?: PropsBody["Vbody"];
    Vtr?: PropsTr["Vtr"];
    Vtd?: PropsTd["Vtd"];
    Vth?: PropsTh["Vth"];
    data: Array<any>;
    headers: Array<any>;
  }>(),
  { data: [] as any, headers: [] as any }
);
</script>
