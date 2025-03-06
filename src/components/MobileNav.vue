<script setup lang="ts">
import ExternalProfileLinks from './ExternalProfileLinks.vue';

defineProps<{ pages: string[]; activePage: string }>();
</script>

<template>
  <nav class="mobile-nav-menu-expanded mobile-only">
    <div class="mobile-nav-menu-router-links">
      <RouterLink
        v-for="page of pages"
        :key="page"
        :to="page == 'home' ? '/' : '/' + page"
        @click="$emit('page-selected', page)"
        :class="['mobile-nav-elem', activePage == page ? 'nav-elem-active' : '']"
      >
        {{ page.charAt(0).toUpperCase() + page.slice(1) }}
      </RouterLink>
      <a
        :class="['mobile-nav-elem', activePage == page ? 'nav-elem-active' : '']"
        target="_blank"
        href="/MatthewGies_Resume_March2025.pdf"
        >Resume</a
      >
    </div>
    <ExternalProfileLinks />
  </nav>
</template>
