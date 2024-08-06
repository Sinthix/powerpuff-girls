import { createRouter, createWebHistory } from 'vue-router';
import ShowPage from '../pages/ShowPage.vue';
import EpisodeDetail from '../components/EpisodeDetail.vue';

const routes = [
  { path: '/', name: 'show', component: ShowPage },
  { path: '/episode/:id', name: 'episode', component: EpisodeDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
