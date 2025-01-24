<script setup lang="ts">
interface Image {
  key: string;
  href: string;
  altText: string;
  src: string;
  width: number;
  height: number;
}

import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

let rowWidth = ref(1200);
let scaledImages: Ref<Image[]> = ref([]);

const gallery: string[] = Object.values(
  import.meta.glob('../assets/img/*.jpg', { eager: true, query: '?url', import: 'default' })
);
const galleryWithInfo: Image[] = [];
for (const img of gallery) {
  const [width, height] = img.split('/').pop()!.split('_')[0].split('x');
  galleryWithInfo.push({
    src: img,
    width: +width,
    height: +height,
    key: img,
    href: img,
    altText: 'you already know'
  });
}
scaledImages.value = galleryWithInfo;

function scaleImages(images: Image[]) {
  const rowMaxHeight: number = 500;
  const spacing: number = 10;

  // [height, width] for each img
  for (let img of images) {
    let scalingFactor = rowMaxHeight / img.height;
    img.height *= scalingFactor;
    img.width *= scalingFactor;
  }

  const finalScaledImages: Image[] = [];
  let currentRow: Image[] = [];
  let currentRowImgWidthSum: number = 0;
  for (const img of images) {
    currentRowImgWidthSum += img.width;
    currentRow.push(img);

    if (currentRowImgWidthSum >= rowWidth.value) {
      const desiredWidthOfImagesAndSpacing = rowWidth.value - spacing * (currentRow.length - 1);
      const scalingFactor = desiredWidthOfImagesAndSpacing / currentRowImgWidthSum;
      for (let img of currentRow) {
        img.height *= scalingFactor;
        img.width *= scalingFactor;
      }
      finalScaledImages.push(...currentRow);

      currentRow = [];
      currentRowImgWidthSum = 0;
    }
  }

  if (currentRow.length > 0) {
    const scalingFactor = rowMaxHeight / currentRow[0].height;
    for (let img of currentRow) {
      img.height *= scalingFactor;
      img.width *= scalingFactor;
    }
    finalScaledImages.push(...currentRow);
  }
  return finalScaledImages;
}

let triggeredThisFrame = false;
const doResize = () => {
  const gallery = document.getElementById('photo-gallery');
  rowWidth.value = gallery?.offsetWidth! - 1;
  scaledImages.value = scaleImages(galleryWithInfo);
  triggeredThisFrame = false;
};

const scheduleResize = () => {
  if (triggeredThisFrame) return;
  requestAnimationFrame(doResize);
  triggeredThisFrame = true;
};

onMounted(() => {
  scheduleResize();

  addEventListener('resize', () => {
    scheduleResize();
  });
});

const fullSizeImages: string[] = [];
const thumbnailImages: string[] = [];
gallery.forEach((img) => {
  if (img.endsWith('thumbnail.jpg')) {
    thumbnailImages.push(img);
  } else {
    fullSizeImages.push(img);
  }
});

import FsLightbox from 'fslightbox-vue/v3';
let lightboxSlideNum = ref(1);
let lightboxToggler = ref(false);

function openLightboxToSlide(slideNum: number) {
  lightboxToggler.value = !lightboxToggler.value;
  lightboxSlideNum.value = slideNum;
}
</script>

<template>
  <FsLightbox :sources="gallery" :toggler="lightboxToggler" :slide="lightboxSlideNum"> </FsLightbox>
  <div id="photo-gallery">
    <a
      class="gallery-image"
      v-for="(imgData, index) in scaledImages"
      :key="imgData.key"
      :style="{
        width: imgData.width + 'px'
      }"
      @click="openLightboxToSlide(index + 1)"
    >
      <img
        :alt="imgData.altText"
        :src="imgData.src"
        :style="{
          width: imgData.width + 'px'
        }"
      />
    </a>
  </div>
</template>
