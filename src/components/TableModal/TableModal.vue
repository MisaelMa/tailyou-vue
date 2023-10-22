<template>
  <div>
    <div
      v-if="modelValue"
      id="modalOverlay"
      tabindex="-1"
      aria-hidden="true"
      :class="CModal({ VModal })"
    >
      <div :class="Emergen({ VEmergen })">
        <div :class="Contain({ VContain })">
          <h3 :class="PTxt1({ VTxt1 })">{{ title }}</h3>
        </div>
        <!-- Modal body -->
        <div @click.stop>
          <div class="p-6 space-y-6">
            <p :class="PTxt({ VTxt })">{{ Name }}</p>
            <slot name="nameInput">
              <input
                type="name"
                v-model="props.Name"
                :class="Input({ VInput })"
                :placeholder="props.placeholderNombre"
              />
            </slot>
            <p :class="PTxt({ VTxt })">{{ Description }}</p>
            <slot name="descriptionInput">
              <input
                type="description"
                v-model="props.Description"
                :class="Input({ VInput })"
                :placeholder="props.placeholderDescripcion"
              />
            </slot>
            <p :class="PTxt({ VTxt })">{{ Price }}</p>
            <slot name="priceInput"> </slot>
            <p :class="PTxt({ VTxt })"></p>
            <slot name="uploadInput"> </slot>
          </div>

          <div>
            <slot name="selectComp"></slot>
          </div>
          <!-- Modal footer -->
          <div :class="CButons({ VButons })">
            <slot :class="BtnOpen({ VBtn })" name="ModlasButton"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BtnClose,
  BtnOpen,
  CButons,
  CModal,
  Contain,
  Emergen,
  Input,
  PTxt,
  PTxt1,
} from "@tailyou/cva";
import { cva, type VariantProps } from "class-variance-authority";
import { defineProps } from "vue";

type PropsBtnO = VariantProps<typeof BtnOpen>;
type PropsBtnC = VariantProps<typeof BtnClose>;
type PropsInt = VariantProps<typeof Input>;
type PropsButons = VariantProps<typeof CButons>;
type PropsTxt = VariantProps<typeof PTxt>;
type PropsTxt1 = VariantProps<typeof PTxt1>;
type PropsCModal = VariantProps<typeof CModal>;
type PropsEmergen = VariantProps<typeof Emergen>;
type PropsContain = VariantProps<typeof Contain>;

const props = defineProps<{
  BtnOpen?: PropsBtnO["VBtn"];
  BtnClose?: PropsBtnC["VBtn"];
  Input?: PropsInt["VInput"];
  CButons?: PropsButons["VButons"];
  PTxt?: PropsTxt["VTxt"];
  PTxt1?: PropsTxt1["VTxt1"];
  CModal?: PropsCModal["VModal"];
  Emergen?: PropsEmergen["VEmergen"];
  Contain?: PropsContain["VContain"];
  Name?: String;
  Description?: String;
  Price?: String;
  placeholderNombre: String;
  placeholderDescripcion: String;
  placeholderPrice?: String;
  title: String;
  modelValue: Boolean;
}>();
</script>
