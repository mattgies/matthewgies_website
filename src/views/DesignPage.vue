<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
defineProps<{
  text: string;
}>();

const weLoopin: { title: string; text: string }[] = [
  {
    title: 'yup',
    text: 'first one'
  },
  {
    title: 'nope',
    text: 'another one'
  }
];
</script>

<template>
  <div class="design-projects">
    <p>My text is {{ text }}</p>
    <ProjectCard
      v-for="obj in weLoopin"
      :key="obj.title"
      :projectTitle="obj.title"
      :description="obj.text"
    />
    <ProjectCard projectTitle="my - proj" description="this is my proj" />
  </div>
</template>
