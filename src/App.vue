<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import type { Ref } from 'vue';
import { ref } from 'vue';

let hamburgerMenuExpanded: Ref<boolean> = ref(false);
</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-logo">
      <img src="./assets/img/ma_logo.png" />
    </RouterLink>
    <RouterLink to="/programming" class="nav-elem">Programming</RouterLink>
    <RouterLink to="/design" class="nav-elem">Design</RouterLink>
    <RouterLink to="/photography" class="nav-elem">Photography</RouterLink>
    <button
      class="nav-hamburger-menu mobile-only"
      @click="hamburgerMenuExpanded = !hamburgerMenuExpanded"
    >
      ham-here
    </button>
  </nav>

  <Transition name="fade">
    <p v-if="hamburgerMenuExpanded">peek a boo!</p>
  </Transition>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
