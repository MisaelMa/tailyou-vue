<template>
    <ShoppingCart @click="toggleCarSidebar"
      > </ShoppingCart>
      <span
        v-if="contadorTotal > 0"
        :class="Count({ Vcount })"
      >
        <p :class="TextCount({ Vtextcount })">{{ contadorTotal }}</p>
      </span>
<div
  :class="[
    'transition-transform ease-in-out duration-300',
    showCarSidebar ? 'translate-x-0 translate-y-0' : 'translate-x-[450vw] translate-y-[-450vw]',
    Trantition({ Vtrantition })
  ]"
>
        <h2 :class="CountTitle({ Vtitle })">
          Carrito de compras
        </h2>
        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" :class="Lines({ Vlines })">
              <li
                :class="List({ Vlist })"
                v-for="product in productAdd"
                :key="product.id"
              >
                <div
                  :class="SizeContent({ Vsizecontent })"
                >
                  <img
                    :src="product.images[0].url"
                    alt="Imagen del producto"
                    :class="Images({ Vimages })"
                  />
                </div>

                <div :class="CountData({ Vcountdata })">
                  <div>
                    <div
                     :class="Labels({ Vlabels })"
                    >
                      <h3>
                        <a href="#">{{ product.name }}</a>
                      </h3>
                      <p class="ml-4 ">$ {{ product.priceTotal }}</p>
                    </div>
                  </div>
                  <div class="flex flex-1  justify-between text-sm">
                    <p class=" flex items-center">
                      <button
                        @click="deletProduc(product)"
                        :class="Buttons({ Vbuttons })"
                      >
                        -
                      </button>
                      <div :class="CountCounter({ Vcountcounter })">
                        {{ product.contador }}
                      </div>
                      <button
                        @click="aumetProduc(product)"
                        :class="Buttons({ Vbuttons })"
                      >
                        +
                      </button>
                    </p>

                    <div class="flex">
                      <button
                        @click="DeleteProducto(product)"
                        type="button"
                        class="text-red-600"
                      >
                        <Trash2></Trash2>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div :class="CountFooter({ Vcountfotter })">
          <div :class="CountPrice({ Vcountprice })">
            <div name="TotalPrice" :class="CountTotal({ Vcounttotal })">
            <p >Subtotal</p>
            <p class="ml-20">$ {{ totalPrice }}</p>
            </div>
          </div>
          <div class="mt-6 text-center">
            <Button
            variant='confirm'
              href="#"
              >Comprar</Button>
          </div>
          <div
            :class="CountDelete({ Vcountdelete })">
            <p>
              o
              <button @click="dobleAction" class="text-red-500">
                Eliminar productos
              </button>
            </p>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import { User, Menu, ShoppingCart, Trash2 } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useBagStore } from "~/store/bag";
const showCarSidebar = ref(false);

const store = useBagStore();
const productAdd = store.isBag;
const totalPrice = computed(() =>
  parseFloat(
    productAdd.reduce(
      (total: any, product: any) => total + parseFloat(product.priceTotal),
      0
    )
  ).toFixed(2)
);

const contadorTotal = computed(() =>
  productAdd.reduce(
    (total: any, product: any) => total + product.contadorTotal,
    0
  )
);

const DeleteProducto = (producto: any) => {
  store.DeleteProductAll(producto);
};
const deleteAllProducts = () => {
  store.ClearProducts();
};

const deletProduc = (producto: any) => {
  store.ReduceProduct(producto);
};

const aumetProduc = (producto: any) => {
  store.AumentarContador(producto);
};

const toggleCarSidebar = () => {
  showCarSidebar.value = !showCarSidebar.value;
}; 
const dobleAction = () => {
  deleteAllProducts();
  toggleCarSidebar();
};




import { cva, type VariantProps } from "class-variance-authority";
import { Count, CountTitle, TextCount, SizeContent, Lines, Images, CountData, List, Labels, Trantition, Buttons, CountPrice, CountFooter, CountDelete, CountTotal, CountCounter } from "@tailyou/cva"
import { defineProps } from "vue";
import { Button } from "..";

type PropsContador = VariantProps<typeof Count>
type PropsTitle = VariantProps<typeof CountTitle>
type PropsTextCoun = VariantProps<typeof TextCount>
type PropsSizeContent = VariantProps<typeof SizeContent>
type PropsLines = VariantProps<typeof Lines>
type PropsImages = VariantProps<typeof Images>
type PropsCountData = VariantProps<typeof CountData>
type PropsList = VariantProps<typeof List>
type PropsLabels = VariantProps<typeof Labels>
type PropsTrantition = VariantProps<typeof Trantition>
type PropsButons = VariantProps<typeof Buttons>
type PropsCountPrice = VariantProps<typeof CountPrice>
type PropsCountFootter = VariantProps<typeof CountFooter>
type PropsCountDelete = VariantProps<typeof CountDelete>
type PropsCountTotal = VariantProps<typeof CountTotal>
type PropsCountCounter = VariantProps<typeof CountCounter>
withDefaults(
  defineProps<{
    Vcount:PropsContador["Vcount"];
    Vtitle:PropsTitle["Vtitle"];
    Vtextcount:PropsTextCoun["Vtextcount"];
    Vsizecontent:PropsSizeContent["Vsizecontent"];
    Vlines:PropsLines["Vlines"];
    Vimages:PropsImages["Vimages"];
    Vcountdata:PropsCountData["Vcountdata"];
    Vlist:PropsList["Vlist"];
    Vlabels:PropsLabels["Vlabels"];
    Vtrantition:PropsTrantition["Vtrantition"];
    Vbuttons:PropsButons["Vbuttons"];
    Vcountprice:PropsCountPrice["Vcountprice"];
    Vcountfotter:PropsCountFootter["Vcountfotter"];
    Vcountdelete:PropsCountDelete["Vcountdelete"];
    Vcounttotal:PropsCountTotal["Vcounttotal"];
    Vcountcounter:PropsCountCounter["Vcountcounter"];
  }>(),
  {
    Vcount: 'default', VTitle: 'default', Vtextcount: 'default', Vsizecontent: 'default', Vlines: 'default', Vimages: 'default', Vcountdata: 'default', Vlist: 'default', Vlabels: 'default', Vtrantition: 'default', Vbuttons: 'default', Vcountprice: 'default', Vcountfotter: 'default', Vcountdelete: 'default', Vcounttotal: 'default', Vcountcounter: 'default'  }
);
</script>