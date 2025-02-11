<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';
import MobileNav from './MobileNav.vue';
import ExternalProfileLinks from './ExternalProfileLinks.vue';

defineProps<{
  pages: string[];
}>();

let activePage: Ref<string> = ref(window.location.pathname.split('/').pop()!);

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
      <ExternalProfileLinks />
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
