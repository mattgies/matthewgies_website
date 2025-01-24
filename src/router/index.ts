import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DesignPage from '../views/DesignPage.vue';
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
      path: '/design',
      name: 'design',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DesignPage,
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

export default router;
