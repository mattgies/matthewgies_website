<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

let scrollToTopButton = useTemplateRef('scrollToTopButton');

const handleScroll = () => {
  if (window.scrollY > 600) {
    scrollToTopButton.value!.classList.remove('invisible-by-opacity');
  } else {
    scrollToTopButton.value!.classList.add('invisible-by-opacity');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <button
    class="scroll-to-top-button invisible-by-opacity"
    ref="scrollToTopButton"
    @click="scrollToTop"
  >
    <svg
      style="width: 4rem; height: 4rem"
      width="210"
      height="256"
      viewBox="0 0 210 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M105 251L105 41" stroke="var(--color-text)" stroke-width="60" />
      <path
        d="M38.7379 147L0 108.73L105 5L210 108.73L171.262 147L105 81.539L38.7379 147Z"
        fill="var(--color-text)"
      />
    </svg>
  </button>
</template>
