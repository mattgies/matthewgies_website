<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

let scrollToTopButton = useTemplateRef('scrollToTopButton');

const handleScroll = () => {
  if (window.scrollY > 500) {
    scrollToTopButton.value!.classList.remove('invisible');
  } else {
    scrollToTopButton.value!.classList.add('invisible');
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
  <button class="scroll-to-top-button invisible" ref="scrollToTopButton" @click="scrollToTop">
    ⬆️
  </button>
</template>
