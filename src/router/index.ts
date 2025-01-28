import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import ProgrammingPage from '../views/ProgrammingPage.vue';
import PhotographyPage from '@/views/PhotographyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programming',
      name: 'programming',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProgrammingPage
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProjectsPage,
      props: { text: 'uwu' }
    },
    {
      path: '/photography',
      name: 'photography',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PhotographyPage
    }
  ]
});

const DEFAULT_TITLE = 'Matthew Gies';
router.afterEach((to, from) => {
  document.title = to.valueOf().name! || DEFAULT_TITLE;
});

export default router;
