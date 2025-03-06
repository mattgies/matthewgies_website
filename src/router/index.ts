import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import HomeView from '../views/HomeView.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import PhotographyPage from '@/views/PhotographyPage.vue';
import ArtPage from '@/views/ArtPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/projects',
      name: 'Matthew Gies - Projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProjectsPage,
      props: { text: 'uwu' }
    },
    {
      path: '/photography',
      name: 'Matthew Gies - Photography',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PhotographyPage
    },
    {
      path: '/art',
      name: 'Matthew Gies - Art',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArtPage
    },
    {
      path: '/about',
      name: 'Matthew Gies - About',
      component: AboutPage
    }
  ]
});

const DEFAULT_TITLE = 'Matthew Gies';
router.afterEach((to, from) => {
  document.title = to.valueOf().name! || DEFAULT_TITLE;
});

export default router;
