<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';
defineProps<{ pages: string[] }>();
let activePage: Ref<string> = ref('home');
let hamburgerMenuExpanded: Ref<boolean> = ref(false);

const handleMobileNavOpenClose = () => {
  hamburgerMenuExpanded.value = !hamburgerMenuExpanded.value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.overflow = hamburgerMenuExpanded.value ? 'hidden' : '';
};
</script>

<template>
  <nav class="mobile-only mobile-nav-header">
    <RouterLink to="/" class="nav-logo">
      <img src="@/assets/svg/file.svg" />
    </RouterLink>
    <button
      class="mobile-only mobile-nav-button-open-hamburger-menu"
      @click="handleMobileNavOpenClose()"
    >
      {{ hamburgerMenuExpanded ? 'close' : 'menu' }}
    </button>
  </nav>

  <Transition name="slide-from-right">
    <nav v-show="hamburgerMenuExpanded" class="mobile-nav-menu-expanded mobile-only">
      <div class="mobile-nav-menu-router-links">
        <RouterLink
          v-for="(page, i) of pages"
          :key="page"
          :to="page == 'home' ? '/' : '/' + page"
          @click="
            handleMobileNavOpenClose();
            activePage = page;
          "
          :class="['mobile-nav-elem', activePage == page ? 'nav-elem-active' : '']"
        >
          {{ page.charAt(0).toUpperCase() + page.slice(1) }}
        </RouterLink>
      </div>
      <div class="mobile-nav-menu-external-profile-links">
        <a
          class="mobile-nav-external-profile-link"
          href="https://open.spotify.com/user/mattgies?si=046d4cdc03904e13"
          target="_blank"
          ><img src="@/assets/svg/Spotify_icon.svg" />
        </a>
        <a
          class="mobile-nav-external-profile-link"
          href="https://www.linkedin.com/in/matthewgies/"
          target="_blank"
          ><img src="@/assets/svg/LinkedIn_icon.svg" />
        </a>
        <a
          class="mobile-nav-external-profile-link"
          href="https://github.com/mattgies"
          target="_blank"
          ><img src="@/assets/svg/github-mark.svg" />
        </a>
      </div>
    </nav>
  </Transition>
</template>
