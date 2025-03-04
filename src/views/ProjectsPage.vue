<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectFilterButton from '@/components/ProjectFilterButton.vue';
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
    title: 'Wet Wet',
    titleGradient: 'light-blue',
    subtitle: 'Realtime WebGL water shader',
    coverImgSrc: 'img/project_thumbnails/wet_wet.jpg',
    types: [ProjectType.PROGRAMMING, ProjectType.DESIGN],
    projectLink: 'https://mattgies.github.io/wet-wet-water-shader/'
  },
  {
    title: '404: Producer Not Found',
    titleGradient: 'light-blue',
    subtitle: 'Mystery Game made in UE5',
    coverImgSrc: 'img/project_thumbnails/404_prod_not_found.jpg',
    types: [ProjectType.DESIGN, ProjectType.GAME],
    projectLink: 'https://saffrona.itch.io/404-producer-not-found'
  },
  {
    title: 'Root of All Evil',
    titleGradient: 'orange',
    subtitle: 'another one',
    coverImgSrc: 'img/project_thumbnails/root_of_all_evil.jpg',
    types: [ProjectType.GAME],
    projectLink: 'https://hsdrummond.itch.io/root-of-all-evil'
  },
  {
    title: 'Dreaded Dark',
    titleGradient: 'green',
    subtitle: 'first one',
    coverImgSrc: 'img/project_thumbnails/dreaded_dark.jpg',
    types: [ProjectType.GAME],
    projectLink: 'https://artoramen.itch.io/dreaded-dark'
  },
  {
    title: 'Journal Jams',
    titleGradient: 'light-blue',
    subtitle: 'A music recommendation application',
    coverImgSrc: 'img/project_thumbnails/journal_jams.jpg',
    types: [ProjectType.PROGRAMMING],
    projectLink: 'https://github.com/AlexGrams/journal-jams'
  },
  {
    title: 'Minecraft Parkour AI',
    titleGradient: 'light-blue',
    subtitle: 'he jump',
    coverImgSrc: 'img/project_thumbnails/mc_parkour_ai.jpg',
    types: [ProjectType.PROGRAMMING],
    projectLink: 'https://github.com/mattgies/mc-parkour-ai'
  },
  {
    title: 'Clownage: Rise of the Clownival',
    titleGradient: 'light-blue',
    subtitle: 'another one',
    coverImgSrc: 'img/project_thumbnails/clownage.jpg',
    types: [ProjectType.GAME],
    projectLink: 'https://mattgies.itch.io/clownage'
  },
  {
    title: 'Hi5',
    titleGradient: 'light-blue',
    subtitle: 'DubHacks 2021 Submission',
    coverImgSrc: 'img/project_thumbnails/hi5.jpg',
    types: [ProjectType.DESIGN, ProjectType.PROGRAMMING],
    projectLink: 'https://www.figma.com/design/uFyeONSyabDq4XwUAezlRP' // 'https://github.com/maaarvin-was-here/hi5'
  },
  {
    title: 'Voxel',
    titleGradient: 'light-blue',
    subtitle: 'Design@UCI 2021 Project Team',
    coverImgSrc: 'img/project_thumbnails/voxel.jpg',
    types: [ProjectType.DESIGN],
    projectLink: 'https://www.figma.com/file/mcIoC33ocwb8NzrnBltc7u/high-fidelity'
  }
];

let filteredProjectsList: Ref<Project[]> = ref(projects);
let filtersShown = ref(false);

let visibleProjectTypes: Ref<ProjectType[]> = ref([
  ProjectType.DESIGN,
  ProjectType.GAME,
  ProjectType.PROGRAMMING
]);

function shouldIncludeProj(proj: Project) {
  for (const projType of proj.types) {
    if (visibleProjectTypes.value.includes(projType)) {
      return true;
    }
  }
  return false;
}

function updateVisibleProjects(projectTypeToToggle: ProjectType) {
  console.log('updating visible projects');
  const projectTypeIndex: number = visibleProjectTypes.value.indexOf(projectTypeToToggle);
  if (projectTypeIndex !== -1) {
    // projectTypeToToggle is in the visibleProjectTypes array
    visibleProjectTypes.value.splice(projectTypeIndex, 1);
  } else {
    // not in the visibleProjectTypes array
    visibleProjectTypes.value.push(projectTypeToToggle);
  }

  filteredProjectsList.value = projects.filter((proj) => shouldIncludeProj(proj));
  // if (visibleProjectTypes.value.length === 0) {
  //   filteredProjectsList.value = projects;
  // } else {
  //   filteredProjectsList.value = projects.filter((proj) => shouldIncludeProj(proj));
  // }
}
</script>

<template>
  <div>
    <div class="project-filters">
      <ProjectFilterButton
        @click="updateVisibleProjects(ProjectType.PROGRAMMING)"
        filterName="Programming"
      />

      <ProjectFilterButton @click="updateVisibleProjects(ProjectType.DESIGN)" filterName="Design" />

      <ProjectFilterButton
        @click="updateVisibleProjects(ProjectType.GAME)"
        filterName="Video Game"
      />
    </div>
    <Transition name="fade">
      <div
        v-if="filteredProjectsList.length === 0"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <svg
          style="width: 5rem; height: 5rem; position: absolute; margin-top: 20vh"
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.3561 71.4915C65.232 71.4915 78.1019 58.6216 78.1019 42.7458C78.1019 26.8699 65.232 14 49.3561 14C33.4803 14 20.6104 26.8699 20.6104 42.7458C20.6104 58.6216 33.4803 71.4915 49.3561 71.4915ZM43.39 195.153H212.61C212.61 152.618 174.729 118.136 128 118.136C81.2712 118.136 43.39 152.618 43.39 195.153ZM256 195.153V242.882H0V195.153C0 130.451 57.3076 78.0004 128 78.0004C198.692 78.0004 256 130.451 256 195.153ZM234.305 42.7458C234.305 58.6216 221.435 71.4915 205.559 71.4915C189.683 71.4915 176.813 58.6216 176.813 42.7458C176.813 26.8699 189.683 14 205.559 14C221.435 14 234.305 26.8699 234.305 42.7458Z"
            fill="var(--color-text)"
          />
        </svg>
        <p style="text-align: center; position: absolute; margin-top: 28vh">
          No projects found for the given filters
        </p>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="filteredProjectsList.length > 0" class="project-gallery">
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
    </Transition>
  </div>
</template>

<style scoped>
.btn-selected {
  background-color: green;
}
</style>
