<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';
import MobileNav from './MobileNav.vue';

defineProps<{
  pages: string[];
}>();

let activePage: Ref<string> = ref('home');

let hamburgerMenuExpanded: Ref<boolean> = ref(false);

const handleMobileNavOpenClose = () => {
  console.log(hamburgerMenuExpanded);
  hamburgerMenuExpanded.value = !hamburgerMenuExpanded.value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.overflow = hamburgerMenuExpanded.value ? 'hidden' : '';
};

addEventListener('resize', () => {
  hamburgerMenuExpanded.value = false;
  document.body.style.overflow = '';
});
</script>

<template>
  <header>
    <RouterLink
      @click="activePage = 'home'"
      to="/"
      :class="['nav-elem', activePage == 'home' ? 'nav-elem-active' : '']"
    >
      <img class="nav-logo" src="@/assets/svg/file.svg" />
    </RouterLink>
    <nav class="desktop-only">
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
    </nav>
    <button
      class="mobile-only mobile-nav-button-open-hamburger-menu"
      @click="handleMobileNavOpenClose()"
    >
      {{ hamburgerMenuExpanded ? 'X' : 'O' }}
    </button>
  </header>
  <Transition name="slide-from-right">
    <MobileNav
      v-if="hamburgerMenuExpanded"
      v-model:hamMenuExpanded="hamburgerMenuExpanded"
      :pages="pages"
      @page-selected="
        (newPage) => {
          handleMobileNavOpenClose();
          activePage = newPage;
        }
      "
      :activePage="activePage"
    />
  </Transition>
</template>
