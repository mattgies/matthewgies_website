<script setup lang="ts">
import imgSrc from '@/assets/img/DSC00667.jpg'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const galleryId = 'my-gallery'
const imagesData = [
  {
    key: 'xyz',
    href: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 500,
    height: 500
  },
  {
    key: 'abc',
    href: '../assets/img/DSC00667.jpg',
    altText: 'my image 2 duh',
    src: imgSrc,
    width: 500,
    height: 500
  },
  {
    key: 'xyz',
    href: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
    altText: 'my image 1 duh',
    src: imgSrc,
    width: 500,
    height: 500
  },
  {
    key: 'abc',
    href: '../assets/img/DSC00667.jpg',
    altText: 'my image 2 duh',
    src: imgSrc,
    width: 500,
    height: 500
  }
]

import { onMounted, onUnmounted } from 'vue'

let lightbox = null

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      showHideAnimationType: 'none',
      zoomAnimationDuration: false,
      pswpModule: () => import('photoswipe')
    })
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
        justify-content: space-around;
        /* align-items: center; */
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
        style="padding: 0; display: flex"
      >
        <img :alt="imgData.altText" :src="imgData.src" width="80%" style="margin: 0 auto" />
      </a>
    </div>
  </Transition>
</template>
