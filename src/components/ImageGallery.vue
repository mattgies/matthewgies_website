<script setup lang="ts">
import imgSrc from '@/assets/img/DSC00667_thumbnail.jpg'
import imgVert from '@/assets/img/DSC00631_thumbnail.jpg'

interface Image {
  key: string
  href: string
  altText: string
  src: string
  width: number
  height: number
}

let images: Image[] = [
  {
    key: 'xyz',
    href: './src/assets/img/DSC00667_thumbnail.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 3000,
    height: 2000
  },
  {
    key: 'abc',
    href: './src/assets/img/DSC00631_thumbnail.jpg',
    altText: 'my image 2 duh',
    src: imgVert,
    width: 2000,
    height: 3000
  },
  {
    key: 'def',
    href: './src/assets/img/DSC00631_thumbnail.jpg',
    altText: 'my image 2 duh',
    src: imgVert,
    width: 2000,
    height: 3000
  },
  {
    key: 'ghi',
    href: './src/assets/img/DSC00667_thumbnail.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 3000,
    height: 2000
  },
  {
    key: 'abc',
    href: './src/assets/img/DSC00631_thumbnail.jpg',
    altText: 'my image 2 duh',
    src: imgVert,
    width: 2000,
    height: 3000
  },
  {
    key: 'ghi',
    href: './src/assets/img/DSC00667_thumbnail.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 3000,
    height: 2000
  },
  {
    key: 'def',
    href: './src/assets/img/DSC00631_thumbnail.jpg',
    altText: 'my image 2 duh',
    src: imgVert,
    width: 2000,
    height: 3000
  }
]

import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

let rowWidth = ref(1200)
let scaledImages: Ref<Image[]> = ref([])

function scaleImages(images: Image[]) {
  const rowMaxHeight: number = 500
  const spacing: number = 10

  // [height, width] for each img
  for (let img of images) {
    let scalingFactor = rowMaxHeight / img.height
    img.height *= scalingFactor
    img.width *= scalingFactor
  }

  const finalScaledImages: Image[] = []
  let currentRow: Image[] = []
  let currentRowImgWidthSum: number = 0
  for (const img of images) {
    currentRowImgWidthSum += img.width
    currentRow.push(img)

    if (currentRowImgWidthSum >= rowWidth.value) {
      const desiredWidthOfImagesAndSpacing = rowWidth.value - spacing * (currentRow.length - 1)
      const scalingFactor = desiredWidthOfImagesAndSpacing / currentRowImgWidthSum
      for (let img of currentRow) {
        img.height *= scalingFactor
        img.width *= scalingFactor
      }
      finalScaledImages.push(...currentRow)

      currentRow = []
      currentRowImgWidthSum = 0
    }
  }

  if (currentRow) {
    const scalingFactor = rowMaxHeight / currentRow[0].height
    for (let img of currentRow) {
      img.height *= scalingFactor
      img.width *= scalingFactor
    }
    finalScaledImages.push(...currentRow)
  }

  return finalScaledImages
}

onMounted(() => {
  const gallery = document.getElementById('photo-gallery')
  console.log(`mounted with ${gallery?.offsetWidth}`)
  rowWidth.value = gallery?.offsetWidth!
  scaledImages.value = scaleImages(images)
})

addEventListener('resize', () => {
  const gallery = document.getElementById('photo-gallery')
  rowWidth.value = gallery?.offsetWidth!
  scaledImages.value = scaleImages(images)
})
</script>

<template>
  <div id="photo-gallery">
    <a
      v-for="imgData in scaledImages"
      :key="imgData.key"
      :href="imgData.href"
      :style="{ width: imgData.width + 'px' }"
    >
      <img :alt="imgData.altText" :src="imgData.src" :style="{ width: imgData.width + 'px' }" />
    </a>
  </div>
</template>
