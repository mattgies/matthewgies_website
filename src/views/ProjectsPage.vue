<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
defineProps<{
  text: string;
}>();

enum ProjectType {
  DESIGN,
  GAME,
  PROGRAMMING
}

interface Project {
  title: string;
  subtitle: string;
  coverImgSrc: string;
  types: ProjectType[];
  projectLink: string;
}

const projects: Project[] = [
  {
    title: '404: Producer Not Found',
    subtitle: 'Mystery Game made in UE4',
    coverImgSrc: 'img/photography/500x750_DSC00631_thumbnail.jpg',
    types: [ProjectType.DESIGN],
    projectLink: './projects'
  },
  {
    title: 'Root of All Evil',
    subtitle: 'another one',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.GAME],
    projectLink: './photography'
  },
  {
    title: 'Specter Safari',
    subtitle: 'first one',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.GAME],
    projectLink: './projects'
  },
  {
    title: 'Clownage: Rise of the Clownival',
    subtitle: 'another one',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.GAME],
    projectLink: './photography'
  },
  {
    title: 'Journal Jams',
    subtitle: 'A music recommendation application',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.PROGRAMMING],
    projectLink: './home'
  },
  {
    title: 'Minecraft Parkour AI',
    subtitle: 'he jump',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.PROGRAMMING],
    projectLink: './home'
  },
  {
    title: 'Wet Wet',
    subtitle: 'Realtime WebGL water shader',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.PROGRAMMING],
    projectLink: './home'
  },
  {
    title: 'Hi5',
    subtitle: 'DubHacks 2021 Submission',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.DESIGN, ProjectType.PROGRAMMING],
    projectLink: './home'
  },
  {
    title: 'Voxel',
    subtitle: 'Design@UCI 2021 Project Team',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.DESIGN],
    projectLink: './home'
  }
];

// let filters = ref([]);
// console.log(filters.value);
let filteredProjectsList = ref(projects);
</script>

<template>
  <div>
    <button
      @click="
        filteredProjectsList = projects;
        console.log(filteredProjectsList);
      "
    >
      Remove filters
    </button>
    <button
      @click="
        filteredProjectsList = projects.filter((i) => i.types.includes(ProjectType.DESIGN));
        console.log(filteredProjectsList);
      "
    >
      Design only
    </button>
    <button
      @click="
        filteredProjectsList = projects.filter((i) => i.types.includes(ProjectType.GAME));
        console.log(filteredProjectsList);
      "
    >
      Game only
    </button>
    <button
      @click="
        filteredProjectsList = projects.filter((i) => i.types.includes(ProjectType.PROGRAMMING));
        console.log(filteredProjectsList);
      "
    >
      Programming only
    </button>
    <h1>Design</h1>
    <div class="project-gallery">
      <TransitionGroup name="fade">
        <ProjectCard
          v-for="(proj, index) in filteredProjectsList"
          :key="proj.title + index.toString()"
          :title="proj.title"
          :subtitle="proj.subtitle"
          :coverImgSrc="proj.coverImgSrc"
          :href="proj.projectLink"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
