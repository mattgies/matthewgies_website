<script setup lang="ts">
defineProps<{
  projectTitle: string;
  description: string;
}>();
</script>

<template>
  <article>
    <h1>{{ projectTitle }}</h1>
    <p>{{ description }}</p>
  </article>
</template>
