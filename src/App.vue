<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import type { Ref } from 'vue';
import { ref } from 'vue';

const pages: string[] = ['programming', 'home', 'projects', 'photography'];
let activePage: Ref<string> = ref('home');
let hamburgerMenuExpanded: Ref<boolean> = ref(false);

const nums: Number[] = [];
for (let i = 0; i < 5; i++) {
  nums.push(0.1 * (Math.random() + 2) * 3);
  nums.push(0.1 * (Math.random() + 2) * 2);
  nums.push((Math.random() + 1) * 2);
  nums.push((Math.random() + 1) * 5);
  nums.push((Math.random() + 2) * 3);
}

const handleMobileNavOpenClose = () => {
  hamburgerMenuExpanded.value = !hamburgerMenuExpanded.value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.overflow = hamburgerMenuExpanded.value ? 'hidden' : '';
};
</script>

<template>
  <!-- <svg v-once viewBox="-5 4 10 10">
    <circle
      v-for="i in 5"
      :key="i - 1"
      cx="0"
      cy="0"
      :r="nums[(i - 1) * 5] + 'rem'"
      :stroke-width="nums[(i - 1) * 5 + 1] + 'rem'"
      :stroke="'var(--color-theme-' + (i - 1) + ')'"
      :stroke-dasharray="nums[(i - 1) * 5 + 2] + ' ' + nums[(i - 1) * 5 + 3]"
      :stroke-opacity="0.4"
      fill="none"
      :style="
        'animation: rotate-2d ' + nums[(i - 1) * 5 + 4] + 's ease-in-out normal infinite forwards'
      "
    />
  </svg> -->

  <ScrollToTopButton />

  <nav class="desktop-only">
    <RouterLink
      v-for="(page, i) of pages"
      :key="page"
      @click="activePage = page"
      :to="page == 'home' ? '/' : '/' + page"
      :class="['nav-elem', activePage == page ? 'nav-elem-active' : '', `color-theme-${i + 1}`]"
    >
      {{ page == 'home' ? '' : page.charAt(0).toUpperCase() + page.slice(1) }}
      <img class="nav-logo" v-if="page == 'home'" src="./assets/img/ma_logo.png" />
    </RouterLink>
  </nav>

  <nav class="mobile-only mobile-nav-header">
    <RouterLink to="/" class="nav-logo">
      <img src="./assets/img/ma_logo.png" />
    </RouterLink>
    <button
      class="mobile-only mobile-nav-button-open-hamburger-menu"
      @click="handleMobileNavOpenClose()"
      style="margin-right: 2rem"
    >
      {{ hamburgerMenuExpanded ? 'close' : 'menu' }}
    </button>
  </nav>

  <Transition name="slide-from-right">
    <nav v-show="hamburgerMenuExpanded" class="mobile-nav-menu-expanded mobile-only">
      <div style="display: flex; flex-direction: column">
        <RouterLink
          v-for="(page, i) of pages"
          :key="page"
          :to="page == 'home' ? '/' : '/' + page"
          @click="
            handleMobileNavOpenClose();
            activePage = page;
          "
          :class="[
            'mobile-nav-elem',
            activePage == page ? 'nav-elem-active' : '',
            `color-theme-${i + 1}`
          ]"
        >
          {{ page.charAt(0).toUpperCase() + page.slice(1) }}
        </RouterLink>
      </div>
      <div style="display: flex; flex-direction: row; justify-items: start">
        <a
          class="mobile-nav-elem"
          style="justify-self: baseline"
          href="https://open.spotify.com/user/mattgies?si=046d4cdc03904e13"
          target="_blank"
          ><img style="width: 5rem" src="@/assets/svg/Spotify_icon.svg" />
        </a>
        <a
          class="mobile-nav-elem"
          style="justify-self: baseline"
          href="https://www.linkedin.com/in/matthewgies/"
          target="_blank"
          ><img style="width: 5rem" src="@/assets/svg/LinkedIn_icon.svg" />
        </a>
      </div>
    </nav>
  </Transition>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
