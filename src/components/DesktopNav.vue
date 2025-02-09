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
      @click="activePage = 'home'"
      to="/"
      :class="['nav-elem', activePage == 'home' ? 'nav-elem-active' : '']"
    >
      <img class="nav-logo" src="@/assets/svg/file.svg" />
    </RouterLink>
    <div style="display: flex; flex-direction: row; align-items: center">
      <RouterLink
        v-for="(page, i) of pages.filter((page) => page != 'home')"
        :key="page"
        @click="activePage = page"
        :to="'/' + page"
        :class="['nav-elem', activePage == page ? 'nav-elem-active' : '']"
      >
        {{ page == 'home' ? '' : page.charAt(0).toUpperCase() + page.slice(1) }}
      </RouterLink>
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
    </div>
  </nav>
</template>
