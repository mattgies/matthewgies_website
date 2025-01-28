<script setup lang="ts">
const galleryImages: string[] = Object.values(
  import.meta.glob('../assets/img/photography/*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
);

const imagesWithScales: { src: string; scale: number }[] = [];
const subArrays = [];
let subArray = [];

let i: number = 3;
for (const img of galleryImages) {
  const [width, height] = img.split('/').pop()!.split('_')[0].split('x');
  imagesWithScales.push({
    src: img,
    scale: parseInt(width) / parseInt(height)
  });

  subArray.push({
    src: img,
    scale: parseInt(width) / parseInt(height)
  });

  if (subArray.length === i) {
    subArrays.push(subArray);
    subArray = [];
  }
}

console.log(subArrays);
</script>

<template>
  <div class="photo-gallery-row" v-for="subArr in subArrays" :key="subArr[0]">
    <img
      class="NEW-gallery-image"
      v-for="img of subArr"
      :key="img.src"
      :src="img.src"
      :style="`flex: ${img.scale}`"
    />
  </div>

  <!-- <div class="NEW-photo-gallery">
    <img
      class="NEW-gallery-image"
      v-for="img of imagesWithScales"
      :key="img.src"
      :src="img.src"
      :style="`flex: ${img.scale}`"
    />
  </div> -->
</template>
