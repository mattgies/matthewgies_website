<script setup lang="ts">
import ImageGallery from '../components/ImageGallery.vue';

const photographyImages: string[] = Object.values(
  import.meta.glob('../assets/img/photography/*', {
    eager: true,
    query: '?url',
    import: 'default'
  })
);
</script>

<template>
  <div>
    <ImageGallery v-once :images="photographyImages" />
  </div>
</template>
