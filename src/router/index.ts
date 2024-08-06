import { createRouter, createWebHistory } from 'vue-router';
import ShowPage from './pages/ShowPage.vue';
import EpisodesPage from './pages/EpisodesPage.vue';

const routes = [
  { path: '/', component: ShowPage },
  { path: '/episode/:id', component: EpisodesPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;