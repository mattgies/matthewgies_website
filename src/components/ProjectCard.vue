<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  coverImgSrc: string;
}>();

function getImageUrl(name: string) {
  return new URL(name, import.meta.url).href;
}
</script>

<template>
  <a>
    <article class="project-card">
      <img class="project-card-display-image" :src="getImageUrl(coverImgSrc)" />
      <h1 class="project-card-title">{{ title }}</h1>
      <p class="project-card-subtitle">{{ subtitle }}</p>
    </article>
  </a>
</template>
