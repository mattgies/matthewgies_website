<script setup lang="ts">
import { RouterView } from 'vue-router';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import NavHeaderAndButtons from './components/NavHeaderAndButtons.vue';
import SvgLinearGradients from './components/SvgLinearGradients.vue';

// const pages: string[] = ['home', 'projects', 'photography', 'about'];
const pages: string[] = ['projects', 'photography', 'about'];

const nums: Number[] = [];
for (let i = 0; i < 5; i++) {
  nums.push(0.1 * (Math.random() + 2) * 3);
  nums.push(0.1 * (Math.random() + 2) * 2);
  nums.push((Math.random() + 1) * 2);
  nums.push((Math.random() + 1) * 5);
  nums.push((Math.random() + 2) * 3);
}
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

  <NavHeaderAndButtons :pages="pages" />

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <SvgLinearGradients />
</template>
