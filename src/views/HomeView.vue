<script setup lang="ts">
import { onMounted } from 'vue';

const cb = (entries: IntersectionObserverEntry[]) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.remove('invisible');
      entry.target.classList.add('test-flip-animation');
    } else {
      entry.target.classList.add('invisible');
      entry.target.classList.remove('test-flip-animation');
    }
  }
};
const obs = new IntersectionObserver(cb);

onMounted(() => {
  const elems = document.querySelectorAll('.other');
  elems.forEach((el) => {
    obs.observe(el);
  });
});
</script>

<template>
  <!-- <NewImageGallery></NewImageGallery> -->
  <div>
    <h1 id="my-test-h1" class="other test-flip-animation">I am an h1 tag.</h1>
    <h2>I am an h2 tag.</h2>
    <h3>I am an h3 tag.</h3>
    <h4>I am an h4 tag.</h4>
    <h5>I am an h5 tag.</h5>
    <p>I am a p tag.</p>
    <p class="linear-grad-matcha">matcha grad</p>
    <h1 v-for="i in 40" :key="i" class="other">I am an h1 tag.</h1>
  </div>
</template>
