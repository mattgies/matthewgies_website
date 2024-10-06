<script setup lang="ts">
import imgSrc from '@/assets/img/DSC00667.jpg'

const imagesData = [
  {
    key: 'xyz',
    href: 'https://www.google.com',
    altText: 'my image duh',
    src: imgSrc
  }
]
</script>

<template>
  <p>image gallery here</p>
  <img
    v-for="imgData in imagesData"
    :key="imgData.key"
    :alt="imgData.altText"
    :src="imgData.src"
    width="50%"
  />
</template>
