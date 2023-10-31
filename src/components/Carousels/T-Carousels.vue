<template>
  <div id="animation-carousel" :class="cbody({ vbody })" data-carousel="static">
    <div :class="conteiner({ vconteiner })">
      <div
        v-for="(image, index) in props.images"
        :key="index"
        :class="slideClasses(index)"
        data-carousel-item
        @click="selectImage(index)"
      >
        <img :src="image" :class="pimages({ vimages })" alt="..." />
      </div>
    </div>

    <button type="button" :class="buttonL({ vbtnl })" @click="prevSlide">
      <ChevronLeft :class="icon({ vicon })"></ChevronLeft>
    </button>
    <button type="button" :class="buttonR({ vbtnr })" @click="nextSlide">
      <ChevronRight :class="icon({ vicon })"></ChevronRight>
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  withDefaults,
  onMounted,
  onBeforeUnmount,
  defineEmits,
} from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
import {
  buttonL,
  buttonR,
  cbody,
  conteiner,
  icon,
  pimages,
} from "@tailyou/cva";

type PropsBody = VariantProps<typeof cbody>;
type PropsConteiner = VariantProps<typeof conteiner>;
type PropsButtonL = VariantProps<typeof buttonL>;
type PropsButtonR = VariantProps<typeof buttonR>;
type PropsIcon = VariantProps<typeof icon>;
type PropsImages = VariantProps<typeof pimages>;

const props = withDefaults(
  defineProps<{
    vbody?: PropsBody["vbody"];
    vconteiner?: PropsConteiner["vconteiner"];
    vbtnl?: PropsButtonL["vbtnl"];
    vbtnr?: PropsButtonR["vbtnr"];
    vicon?: PropsIcon["vicon"];
    vimages?: PropsImages["vimages"];
    currentImageIndex?: number;
    autoSlide?: Boolean;
    images: Array<any>;
  }>(),
  {
    images: [] as any,
  }
);

const emits = defineEmits();
const localImageIndex = ref(props.currentImageIndex);

const prevSlide = () => {
  if (localImageIndex.value > 0) {
    localImageIndex.value--;
    emits("image-selected", localImageIndex.value);
  }
};

const nextSlide = () => {
  if (localImageIndex.value < props.images.length - 1) {
    localImageIndex.value++;
    emits("image-selected", localImageIndex.value);
  }
};

const selectImage = (index) => {
  console.log("Evento de selección de imagen emitido con índice:", index);
  emits("image-selected", index);
};

const slideClasses = (index) => {
  const classes = [
    "absolute inset-0 transition-transform duration-500 ease-linear",
  ];
  const distance = Math.abs(index - props.currentImageIndex);

  if (distance === 0) {
    classes.push("z-10 translate-x-0");
  } else if (index > props.currentImageIndex) {
    classes.push("z-20 translate-x-full");
  } else {
    classes.push("z-20 -translate-x-full");
  }

  return classes.join(" ");
};

const autoSlide = () => {
  if (props.autoSlide) {
    let isReversed = false;
    const interval = setInterval(() => {
      if (localImageIndex.value < props.images.length - 1 && !isReversed) {
        nextSlide();
      } else if (
        localImageIndex.value === props.images.length - 1 &&
        !isReversed
      ) {
        isReversed = true;
      } else if (localImageIndex.value > 0 && isReversed) {
        prevSlide();
      } else {
        isReversed = false;
      }
    }, 5000);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });
  }
};

onMounted(() => {
  localImageIndex.value = props.currentImageIndex;
  autoSlide();
});
</script>
