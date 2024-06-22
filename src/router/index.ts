import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
