<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
defineProps<{
  text: string;
}>();

interface ProjectDescription {
  title: string;
  subtitle: string;
  coverImgSrc: string;
  projectLink: string;
}

const projects: ProjectDescription[] = [
  {
    title: 'yup',
    subtitle: 'first one',
    coverImgSrc: '../assets/img/photography/500x750_DSC00631_thumbnail.jpg',
    projectLink: './design'
  },
  {
    title: 'nope',
    subtitle: 'another one',
    coverImgSrc: '../assets/img/ma_logo.png',
    projectLink: './photography'
  },
  {
    title: 'yup',
    subtitle: 'first one',
    coverImgSrc: '../assets/img/ma_logo.png',
    projectLink: './design'
  },
  {
    title: 'nope',
    subtitle: 'another one',
    coverImgSrc: '../assets/img/ma_logo.png',
    projectLink: './photography'
  },
  {
    title: 'yup',
    subtitle: 'first one',
    coverImgSrc: '../assets/img/ma_logo.png',
    projectLink: './home'
  }
];
</script>

<template>
  <div class="project-gallery">
    <ProjectCard
      v-for="proj in projects"
      :key="proj.title"
      :title="proj.title"
      :subtitle="proj.subtitle"
      :coverImgSrc="proj.coverImgSrc"
      :href="proj.projectLink"
    />
  </div>
</template>
