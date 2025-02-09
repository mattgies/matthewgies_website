<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';

defineProps<{
  pages: string[];
}>();

let activePage: Ref<string> = ref('home');
</script>

<template>
  <nav class="desktop-only">
    <RouterLink
      v-for="(page, i) of pages"
      :key="page"
      @click="activePage = page"
      :to="page == 'home' ? '/' : '/' + page"
      :class="['nav-elem', activePage == page ? 'nav-elem-active' : '']"
    >
      {{ page == 'home' ? '' : page.charAt(0).toUpperCase() + page.slice(1) }}
      <img class="nav-logo" v-if="page == 'home'" src="@/assets/svg/file.svg" />
    </RouterLink>
  </nav>
</template>
