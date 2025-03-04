<script setup lang="ts">
import { ref } from 'vue';
import { type Ref } from 'vue';

defineProps<{
  filterName: string;
}>();

const isSelected: Ref<boolean> = ref(true);
</script>

<template>
  <button
    @click="isSelected = !isSelected"
    :style="isSelected ? 'background: var(--color-theme-2)' : ''"
    style="
      display: flex;
      width: auto;
      align-items: center;
      justify-content: space-between;
      transition: all 0.5s;
    "
  >
    {{ filterName }}
    <!-- <span>{{ isSelected ? ' X' : ' *' }}</span> -->
    <svg
      style="height: 1.5rem; width: 1.5rem; margin-left: 1rem; transition: transform 0.5s"
      :style="isSelected ? '' : 'transform: rotate(-45deg);'"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M232.51 24L24.0002 232.51"
        :stroke="isSelected ? 'black' : 'white'"
        stroke-width="69.5652"
      />
      <path
        d="M232.51 232.51L24.0002 24.0002"
        :stroke="isSelected ? 'black' : 'white'"
        stroke-width="69.5652"
      />
    </svg>
  </button>
</template>
