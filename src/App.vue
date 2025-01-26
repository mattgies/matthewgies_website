<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import type { Ref } from 'vue';
import { ref } from 'vue';

const pages: string[] = ['programming', 'home', 'design', 'photography'];
let activePage: Ref<string> = ref('home');
let hamburgerMenuExpanded: Ref<boolean> = ref(false);

const nums = [];
for (let i = 0; i < 5; i++) {
  nums.push(0.1 * (Math.random() + 2) * 3);
  nums.push(0.1 * (Math.random() + 2) * 2);
  nums.push((Math.random() + 1) * 2);
  nums.push((Math.random() + 1) * 5);
  nums.push((Math.random() + 2) * 3);
}
</script>

<template>
  <svg viewBox="-5 4 10 10">
    <!-- stroke-width = gap * (1 + i/4) -->
    <!-- r = base + i *  -->
    <circle
      v-for="i in 5"
      :key="i"
      cx="0"
      cy="0"
      :r="nums[i * 5] + 'rem'"
      :stroke-width="nums[i * 5 + 1] + 'rem'"
      :stroke="'var(--color-theme-' + i + ')'"
      :stroke-dasharray="nums[i * 5 + 2] + ' ' + nums[i * 5 + 3]"
      :stroke-opacity="0.4"
      fill="none"
      :style="'animation: rotate-2d ' + nums[i * 5 + 4] + 's ease-in-out normal infinite forwards'"
    />
  </svg>

  <ScrollToTopButton />

  <nav class="desktop-only">
    <RouterLink
      v-for="page of pages"
      :key="page"
      @click="activePage = page"
      :to="page == 'home' ? '/' : '/' + page"
      class="nav-elem"
      :class="{ 'nav-elem-active': activePage == page }"
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
      @click="hamburgerMenuExpanded = !hamburgerMenuExpanded"
    >
      <img src="./assets/svg/icon_hamburger_menu.svg" />
    </button>
  </nav>

  <Transition name="slide">
    <nav v-show="hamburgerMenuExpanded" class="mobile-nav-menu-expanded mobile-only">
      <button
        class="mobile-nav-close-button"
        @click="hamburgerMenuExpanded = !hamburgerMenuExpanded"
      >
        X
      </button>
      <RouterLink
        v-for="page of pages"
        :key="page"
        :to="page == 'home' ? '/' : '/' + page"
        @click="
          hamburgerMenuExpanded = false;
          activePage = page;
        "
        class="mobile-nav-elem"
        :class="{ 'nav-elem-active': activePage == page }"
      >
        {{ page.charAt(0).toUpperCase() + page.slice(1) }}
      </RouterLink>
    </nav>
  </Transition>

  <main :style="hamburgerMenuExpanded ? 'position: fixed' : ''">
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
