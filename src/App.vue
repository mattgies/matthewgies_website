<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/programming">Programming</RouterLink>
      <RouterLink to="/design">Design</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
