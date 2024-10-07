<script setup lang="ts">
import imgSrc from '@/assets/img/DSC00667.jpg'
import imgVert from '@/assets/img/DSC00631.jpg'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const galleryId = 'my-gallery'
const imagesData = [
  {
    key: 'xyz',
    href: 'src/assets/img/DSC00667.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 3000,
    height: 2000
  },
  {
    key: 'abc',
    href: 'src/assets/img/DSC00631.jpg',
    altText: 'my image 2 duh',
    src: imgVert,
    width: 2000,
    height: 3000
  }
]

import { onMounted, onUnmounted } from 'vue'

let lightbox = null

onMounted(() => {
  if (!lightbox) {
    const lightboxOptions = {
      gallery: '#' + galleryId,
      children: 'a',
      showHideAnimationType: 'zoom',
      bgOpacity: 0.6,
      pswpModule: () => import('photoswipe')
    }
    lightbox = new PhotoSwipeLightbox(lightboxOptions)
    lightbox.init()
  }
})

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})

const show: boolean = true
</script>

@Options({ components: { Lightgallery, }, data: () => ({ plugins: [lgThumbnail, lgZoom], }),
methods: { onInit: () => { console.log('lightGallery has been initialized'); }, onBeforeSlide: () =>
{ console.log('calling before slide'); }, }, })

<template>
  <p>image gallery here</p>
  <Transition>
    <div
      v-show="show"
      :id="galleryId"
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 0.5em;
        /* flex-wrap: wrap; */
      "
    >
      <a
        v-for="imgData in imagesData"
        :key="imgData.key"
        :href="imgData.href"
        :data-pswp-width="imgData.width"
        :data-pswp-height="imgData.height"
        target="_blank"
        ref="noreferrer"
      >
        <img :alt="imgData.altText" :src="imgData.src" width="100%" />
      </a>
    </div>
  </Transition>
</template>
