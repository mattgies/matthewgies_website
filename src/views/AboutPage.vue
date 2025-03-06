<script setup lang="ts"></script>

<template>
  <div
    style="
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
    "
  >
    <img
      style="width: min(90vw, 30rem); margin: auto; border-radius: 50%; margin-bottom: 2rem"
      src="@/assets/img/mg_headshot.jpg"
    />
    <div class="about-body">
      <h1 style="letter-spacing: 0.05rem">Hey, I'm Matt!</h1>
      <h2>I'm deeply curious about how the world works.</h2>
      <p>
        I get bored sitting in one discipline. The intersection of art, technology, and science is
        what stimulates me, and my skills in each aspect make me better in all the others.
      </p>
      <h2>I'm passionate about creating accessible experiences.</h2>
      <p>
        We have a duty to make sure that all people are equally able to leverage technological
        advancements and appreciate artisitc beauty.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-body {
  margin-left: 5rem;
  margin-right: 5rem;
  max-width: 100rem;
}
</style>
