<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type Ref } from 'vue';
import { usePreferredDark } from '@vueuse/core';
import MobileNav from './MobileNav.vue';
import ExternalProfileLinks from './ExternalProfileLinks.vue';

const props = defineProps<{
  pages: string[];
}>();

let activePage: Ref<string> = ref(window.location.pathname.split('/').pop()!);

let hamburgerMenuExpanded: Ref<boolean> = ref(false);

const handleMobileNavOpenClose = () => {
  hamburgerMenuExpanded.value = !hamburgerMenuExpanded.value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.overflow = hamburgerMenuExpanded.value ? 'hidden' : '';
};

addEventListener('resize', () => {
  hamburgerMenuExpanded.value = false;
  document.body.style.overflow = '';
});

const darkModePreferred = usePreferredDark();
const colorTheme = ref('light');

onMounted(() => {
  if (darkModePreferred.value === true) {
    changeTheme();
    // colorTheme.value = 'dark';
  }
});

const changeTheme = () => {
  const darkModeSwitch = document.getElementById('dark-mode-switch')!;
  const darkModeInput = document.getElementById('dark-mode-input')!;
  const currentClasses = document.querySelector(':root')?.classList!;
  if (currentClasses.contains('dark-theme')) {
    darkModeInput.style.transform = '';
    // darkModeSwitch.style.justifyContent = 'left';
    currentClasses.remove('dark-theme');
  } else {
    darkModeInput.style.transform = 'translateX(2rem)';
    // darkModeSwitch.style.justifyContent = 'right';
    currentClasses.add('dark-theme');
  }
};
</script>

<!-- for the first router link: -->
<!-- :class="['nav-logo', 'nav-elem', activePage == 'home' ? 'nav-elem-active' : '']" -->
<template>
  <header>
    <RouterLink
      @click="
        // activePage = 'home';
        activePage = 'about';
        hamburgerMenuExpanded = false;
      "
      to="/"
      :class="['nav-logo', 'nav-elem', activePage == 'about' ? 'nav-elem-active' : '']"
    >
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="400"
        height="400"
        viewBox="0, 0, 400,400"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" x2="100%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="blue" />
            <stop offset="50%" stop-color="purple" />
            <stop offset="100%" stop-color="pink" />
          </linearGradient>
        </defs>
        <g id="svgg">
          <path
            id="mg-logo"
            stroke="none"
            class="svg-visible"
            fill-rule="evenodd"
            d="M161.858 1.261 C 140.667 2.785,125.077 17.515,113.911 46.563 C 113.162 48.510,112.458 50.385,112.347 50.729 L 112.145 51.354 112.016 50.521 C 111.945 50.063,111.597 47.766,111.242 45.417 C 110.887 43.068,110.361 40.022,110.072 38.649 C 103.220 6.046,70.089 6.507,50.442 39.479 C 41.163 55.053,34.467 76.054,32.509 95.729 C 32.183 98.999,31.269 112.380,31.365 112.476 C 31.488 112.599,56.222 114.264,56.324 114.157 C 56.372 114.105,56.616 111.063,56.864 107.396 C 57.113 103.729,57.453 99.370,57.621 97.708 C 59.951 74.635,70.826 48.930,81.308 41.717 C 83.649 40.106,84.103 39.908,84.360 40.389 C 85.723 42.935,87.995 58.696,89.049 72.917 C 91.499 105.951,89.895 132.467,81.364 200.000 C 78.246 224.676,78.258 224.578,78.409 224.729 C 78.481 224.800,83.813 225.539,90.259 226.371 C 96.705 227.203,102.260 227.928,102.604 227.982 L 103.229 228.080 104.240 220.971 C 110.806 174.816,125.377 96.467,131.688 73.387 C 138.506 48.454,147.048 33.058,156.771 28.175 C 160.866 26.119,166.578 25.698,169.565 27.233 C 175.423 30.244,179.255 54.660,176.860 73.719 C 176.625 75.593,176.470 77.165,176.517 77.212 C 176.621 77.315,200.357 82.709,200.697 82.706 C 200.829 82.705,201.349 81.275,201.853 79.529 C 209.613 52.609,218.139 37.871,230.679 29.702 C 235.963 26.259,238.208 26.092,240.329 28.981 C 242.318 31.690,242.850 34.190,244.382 48.021 C 247.584 76.922,251.048 89.217,259.028 100.000 C 268.312 112.545,283.632 117.803,297.500 113.204 C 302.493 111.548,304.668 109.980,311.296 103.252 L 316.655 97.813 314.942 96.078 C 314.000 95.125,309.965 91.146,305.975 87.237 L 298.720 80.129 294.187 84.672 C 288.970 89.900,289.345 89.621,287.531 89.632 C 279.424 89.683,273.973 79.325,270.948 58.125 C 270.662 56.120,269.955 50.214,269.377 45.000 C 267.065 24.156,264.866 17.789,257.396 10.310 C 242.104 -5.002,218.251 0.795,199.727 24.324 C 198.801 25.499,197.984 26.390,197.910 26.303 C 197.836 26.217,197.514 25.396,197.194 24.479 C 192.315 10.495,182.207 2.385,168.251 1.259 C 165.344 1.024,165.147 1.024,161.858 1.261 M349.088 78.877 C 342.457 80.517,336.994 81.895,336.949 81.940 C 336.904 81.985,337.668 85.246,338.647 89.188 C 345.057 114.996,343.872 135.607,334.718 157.532 C 318.619 196.092,278.231 221.580,237.392 218.952 C 232.186 218.617,220.730 217.410,218.505 216.961 L 217.948 216.849 219.293 213.584 C 226.495 196.102,235.640 180.346,250.133 160.450 C 250.996 159.266,254.098 154.766,257.026 150.450 C 263.740 140.556,265.722 137.686,272.133 128.571 C 274.983 124.519,277.286 121.179,277.251 121.149 C 277.216 121.118,273.016 118.162,267.917 114.580 C 262.818 110.998,258.205 107.748,257.667 107.357 L 256.689 106.647 255.063 108.983 C 254.169 110.267,253.250 111.541,253.021 111.814 L 252.604 112.309 250.938 110.279 C 238.327 94.921,220.913 88.935,199.271 92.519 C 160.674 98.909,123.734 135.693,123.658 167.813 C 123.583 199.387,156.241 216.991,192.778 205.072 C 196.049 204.005,195.978 204.001,195.454 205.231 C 195.239 205.734,194.472 207.740,193.749 209.688 C 193.025 211.635,192.373 213.299,192.300 213.385 C 192.227 213.471,190.625 213.394,188.740 213.215 C 164.949 210.954,141.221 215.667,118.333 227.199 C 89.252 241.851,67.309 266.110,53.556 298.812 C 27.199 361.480,50.989 405.841,107.083 398.626 C 146.355 393.575,178.288 347.979,203.952 260.313 C 205.841 253.862,209.607 241.424,209.716 241.276 C 209.748 241.233,212.333 241.537,215.460 241.952 C 242.668 245.556,257.168 245.003,275.833 239.648 C 337.344 222.002,375.725 162.807,366.568 99.710 C 365.788 94.333,361.811 76.521,361.279 76.021 C 361.206 75.952,355.720 77.237,349.088 78.877 M214.688 116.897 C 223.307 117.949,228.659 121.725,235.086 131.290 L 237.125 134.325 232.756 140.861 C 217.058 164.337,198.297 178.827,178.441 182.811 C 161.033 186.304,147.325 178.719,148.737 166.376 C 151.529 141.977,189.119 113.776,214.688 116.897 M180.597 237.914 C 182.473 238.019,184.059 238.157,184.123 238.221 C 184.187 238.285,183.853 239.578,183.381 241.096 C 182.908 242.613,181.307 247.979,179.822 253.021 C 160.336 319.166,138.246 358.605,114.063 370.422 C 101.509 376.557,82.998 375.227,75.031 367.618 C 56.837 350.241,75.821 291.386,108.542 263.726 C 128.920 246.499,156.622 236.575,180.597 237.914 "
          ></path>
        </g>
      </svg>
    </RouterLink>
    <nav class="desktop-only">
      <RouterLink
        v-for="(page, i) of pages.filter((page) => page != 'home')"
        :key="page"
        @click="activePage = page"
        :to="'/' + page"
        :class="['nav-elem', activePage == page ? 'nav-elem-active' : '']"
      >
        {{ page == 'home' ? '' : page.charAt(0).toUpperCase() + page.slice(1) }}
      </RouterLink>
      <a
        :class="['nav-elem', activePage == page ? 'nav-elem-active' : '']"
        target="_blank"
        href="/MatthewGies_Resume_March2025.pdf"
        >Resume</a
      >
      <div id="dark-mode-switch-container">
        <div id="dark-mode-switch" @click="changeTheme()">
          <div id="dark-mode-input"></div>
          <span class="slider"></span>
        </div>
      </div>
      <ExternalProfileLinks />
    </nav>
    <button
      class="mobile-only mobile-nav-button-open-hamburger-menu"
      @click="handleMobileNavOpenClose()"
    >
      {{ hamburgerMenuExpanded ? 'X' : 'O' }}
    </button>
  </header>
  <Transition name="slide-from-right">
    <MobileNav
      v-if="hamburgerMenuExpanded"
      v-model:hamMenuExpanded="hamburgerMenuExpanded"
      :pages="pages"
      @page-selected="
        (newPage) => {
          handleMobileNavOpenClose();
          activePage = newPage;
        }
      "
      :activePage="activePage"
    />
  </Transition>
</template>

<style scoped>
#dark-mode-input {
  height: 1.3rem;
  width: 1.3rem;
  transition: all calc(var(--base-transition-speed) * 2);
  z-index: 10;
  border-radius: 0.75rem;
  background: var(--linear-grad-theme-1);
  /* border: 0.1rem solid var(--color-background-mute); */
}

#dark-mode-switch {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 2rem;
  width: 4rem;
  padding: 0.25rem;
  border: 0.1rem solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-background-mute);
  margin: auto;
}

#dark-mode-switch-container {
  width: 7rem;
  border-left: 0.1rem solid var(--color-bg-soft);
  border-right: 0.1rem solid var(--color-bg-soft);
}

#dark-mode-switch:hover {
  cursor: pointer;
}
</style>
