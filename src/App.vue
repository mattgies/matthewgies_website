<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import type { Ref } from 'vue';
import { ref } from 'vue';

let activePage: Ref<string> = ref('home');
let hamburgerMenuExpanded: Ref<boolean> = ref(false);
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
      :r="0.1 * (Math.random() + 2) * 3 + 'rem'"
      :stroke-width="0.1 * (Math.random() + 2) * 2 + 'rem'"
      :stroke="'var(--color-theme-' + i + ')'"
      :stroke-dasharray="(Math.random() + 1) * 2 + ' ' + (Math.random() + 1) * 5"
      :stroke-opacity="0.4"
      fill="none"
      :style="
        'animation: rotate-2d ' + (Math.random() + 2) * 3 + 's ease-in-out normal infinite forwards'
      "
    />
  </svg>

  <nav class="desktop-only">
    <RouterLink
      @click="activePage = 'programming'"
      to="/programming"
      class="nav-elem"
      :class="{ 'nav-elem-active': activePage == 'programming' }"
      >Programming</RouterLink
    >
    <RouterLink
      @click="activePage = 'home'"
      to="/"
      class="nav-logo"
      :class="{ 'nav-elem-active': activePage == 'home' }"
    >
      <img src="./assets/img/ma_logo.png" />
    </RouterLink>
    <RouterLink
      @click="activePage = 'design'"
      to="/design"
      class="nav-elem"
      :class="{ 'nav-elem-active': activePage == 'design' }"
      >Design</RouterLink
    >
    <RouterLink
      @click="activePage = 'photography'"
      to="/photography"
      class="nav-elem"
      :class="{ 'nav-elem-active': activePage == 'photography' }"
      >Photography</RouterLink
    >
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
        @click="
          hamburgerMenuExpanded = false;
          activePage = 'home';
        "
        to="/"
        class="mobile-nav-elem"
        :class="{ 'nav-elem-active': activePage == 'home' }"
        >Home</RouterLink
      >
      <RouterLink
        @click="
          hamburgerMenuExpanded = false;
          activePage = 'programming';
        "
        to="/programming"
        class="mobile-nav-elem"
        :class="{ 'nav-elem-active': activePage == 'programming' }"
        >Programming</RouterLink
      >
      <RouterLink
        @click="
          hamburgerMenuExpanded = false;
          activePage = 'design';
        "
        to="/design"
        class="mobile-nav-elem"
        :class="{ 'nav-elem-active': activePage == 'design' }"
        >Design</RouterLink
      >
      <RouterLink
        @click="
          hamburgerMenuExpanded = false;
          activePage = 'photography';
        "
        to="/photography"
        class="mobile-nav-elem"
        :class="{ 'nav-elem-active': activePage == 'photography' }"
        >Photography</RouterLink
      >
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
