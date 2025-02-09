<script setup lang="ts">
defineProps<{ pages: string[]; activePage: string }>();
</script>

<template>
  <nav class="mobile-nav-menu-expanded mobile-only">
    <div class="mobile-nav-menu-router-links">
      <RouterLink
        v-for="(page, i) of pages"
        :key="page"
        :to="page == 'home' ? '/' : '/' + page"
        @click="$emit('page-selected', page)"
        :class="['mobile-nav-elem', activePage == page ? 'nav-elem-active' : '']"
      >
        {{ page.charAt(0).toUpperCase() + page.slice(1) }}
      </RouterLink>
    </div>
    <div class="external-profile-links-group">
      <a
        class="external-profile-link"
        href="https://open.spotify.com/user/mattgies?si=046d4cdc03904e13"
        target="_blank"
        ><img src="@/assets/svg/Spotify_icon.svg" />
      </a>
      <a
        class="external-profile-link"
        href="https://www.linkedin.com/in/matthewgies/"
        target="_blank"
        ><img src="@/assets/svg/LinkedIn_icon.svg" />
      </a>
      <a class="external-profile-link" href="https://github.com/mattgies" target="_blank"
        ><img src="@/assets/svg/github-mark.svg" />
      </a>
    </div>
  </nav>
</template>
