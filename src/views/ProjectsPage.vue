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
  titleGradient: string;
  subtitle: string;
  coverImgSrc: string;
  types: ProjectType[];
  projectLink: string;
}

const projects: Project[] = [
  {
    title: '404: Producer Not Found',
    titleGradient: 'light-blue',
    subtitle: 'Mystery Game made in UE4',
    coverImgSrc: 'img/project_thumbnails/404_prod_not_found.png',
    types: [ProjectType.DESIGN, ProjectType.GAME],
    projectLink: 'https://saffrona.itch.io/404-producer-not-found'
  },
  {
    title: 'Root of All Evil',
    titleGradient: 'orange',
    subtitle: 'another one',
    coverImgSrc: 'img/project_thumbnails/root_of_all_evil.png',
    types: [ProjectType.GAME],
    projectLink: 'https://hsdrummond.itch.io/root-of-all-evil'
  },
  {
    title: 'Dreaded Dark',
    titleGradient: 'green',
    subtitle: 'first one',
    coverImgSrc: 'img/project_thumbnails/dreaded_dark.png',
    types: [ProjectType.GAME],
    projectLink: 'https://artoramen.itch.io/dreaded-dark'
  },
  {
    title: 'Clownage: Rise of the Clownival',
    titleGradient: 'light-blue',
    subtitle: 'another one',
    coverImgSrc: 'img/project_thumbnails/',
    types: [ProjectType.GAME],
    projectLink: 'https://mattgies.itch.io/clownage'
  },
  {
    title: 'Journal Jams',
    titleGradient: 'light-blue',
    subtitle: 'A music recommendation application',
    coverImgSrc: 'img/project_thumbnails/',
    types: [ProjectType.PROGRAMMING],
    projectLink: 'https://github.com/AlexGrams/journal-jams'
  },
  {
    title: 'Minecraft Parkour AI',
    titleGradient: 'light-blue',
    subtitle: 'he jump',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.PROGRAMMING],
    projectLink: 'https://github.com/mattgies/mc-parkour-ai'
  },
  {
    title: 'Wet Wet',
    titleGradient: 'light-blue',
    subtitle: 'Realtime WebGL water shader',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.PROGRAMMING],
    projectLink: 'https://mattgies.github.io/wet-wet-water-shader/'
  },
  {
    title: 'Hi5',
    titleGradient: 'light-blue',
    subtitle: 'DubHacks 2021 Submission',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.DESIGN, ProjectType.PROGRAMMING],
    projectLink: 'https://www.figma.com/design/uFyeONSyabDq4XwUAezlRP' // 'https://github.com/maaarvin-was-here/hi5'
  },
  {
    title: 'Voxel',
    titleGradient: 'light-blue',
    subtitle: 'Design@UCI 2021 Project Team',
    coverImgSrc: 'img/ma_logo.png',
    types: [ProjectType.DESIGN],
    projectLink: 'https://www.figma.com/file/mcIoC33ocwb8NzrnBltc7u/high-fidelity'
  }
];

// let filters = ref([]);
// console.log(filters.value);
let filteredProjectsList = ref(projects);
let filtersShown = ref(false);
let visibleProjectTypes: ProjectType[] = ref([]);
</script>

<template>
  <!-- <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1)"
    width="640"
    height="450"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuFyeONSyabDq4XwUAezlRP%2FDubHacks-2021%3Fnode-id%3D0%253A1"
    allowfullscreen
  ></iframe> -->
  <div>
    <button @click="filtersShown = !filtersShown">Show Project Filters</button>
    <div v-show="filtersShown">
      <input
        type="checkbox"
        id="design-only"
        value="DESIGN"
        @click="
          filters.push(ProjectType.DESIGN);
          console.log(filters);
        "
      />
      <label for="design-only">Design only</label>
      <input type="checkbox" id="game-only" value="GAME" />
      <label for="game-only">Game only</label>
      <input type="checkbox" id="programming-only" value="PROGRAMMING" />
      <label for="programming-only">Programming only</label>
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
    </div>
    <div class="project-gallery">
      <TransitionGroup name="fade">
        <ProjectCard
          v-for="(proj, index) in filteredProjectsList"
          :titleGradient="proj.titleGradient"
          :key="proj.title + index.toString()"
          :title="proj.title"
          :subtitle="proj.subtitle"
          :coverImgSrc="proj.coverImgSrc"
          :href="proj.projectLink"
          :target="proj.projectLink.startsWith('./') ? '' : '_blank'"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
