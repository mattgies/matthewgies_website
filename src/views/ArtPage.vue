<script setup lang="ts">
import ImageGallery from '../components/ImageGallery.vue';

const artImages: string[] = Object.values(
  import.meta.glob('../assets/img/art/*', {
    eager: true,
    query: '?url',
    import: 'default'
  })
);
</script>

<template>
  <div>
    <ImageGallery v-once :images="artImages" />
  </div>
</template>
