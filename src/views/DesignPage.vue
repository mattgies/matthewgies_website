<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <p>My text is {{ text }}</p>
</template>
