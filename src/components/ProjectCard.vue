<script setup lang="ts">
defineProps<{
  title: string;
  titleGradient: string;
  subtitle: string;
  coverImgSrc: string;
}>();

function getImageUrl(name: string) {
  return new URL(`/src/assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <a>
    <div class="project-card-outline">
      <article class="project-card">
        <img class="project-card-display-image" :src="getImageUrl(coverImgSrc)" />
        <h1
          class="project-card-title"
          :style="`background-image: var(--linear-grad-${titleGradient})`"
        >
          {{ title }}
        </h1>
        <p class="project-card-subtitle">{{ subtitle }}</p>
      </article>
    </div>
  </a>
</template>
