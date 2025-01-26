<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import type { Ref } from 'vue';
import { ref } from 'vue';

let hamburgerMenuExpanded: Ref<boolean> = ref(false);
</script>

<template>
  <svg viewBox="-5 4 10 20">
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
    <RouterLink to="/programming" class="nav-elem">Programming</RouterLink>
    <RouterLink to="/" class="nav-logo">
      <img src="./assets/img/ma_logo.png" />
    </RouterLink>
    <RouterLink to="/design" class="nav-elem">Design</RouterLink>
    <RouterLink to="/photography" class="nav-elem">Photography</RouterLink>
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

  <Transition name="fade">
    <nav v-show="hamburgerMenuExpanded" class="mobile-nav-menu-expanded mobile-only">
      <button
        class="mobile-nav-close-button"
        @click="hamburgerMenuExpanded = !hamburgerMenuExpanded"
      >
        X
      </button>
      <RouterLink @click="hamburgerMenuExpanded = false" to="/" class="mobile-nav-elem"
        >Home</RouterLink
      >
      <RouterLink @click="hamburgerMenuExpanded = false" to="/programming" class="mobile-nav-elem"
        >Programming</RouterLink
      >
      <RouterLink @click="hamburgerMenuExpanded = false" to="/design" class="mobile-nav-elem"
        >Design</RouterLink
      >
      <RouterLink @click="hamburgerMenuExpanded = false" to="/photography" class="mobile-nav-elem"
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
