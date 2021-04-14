import { createApp } from '@/app';
import { routes } from '@/router/routes';

const { app, router } = createApp();

router.onReady(() => {
  router.addRoutes(routes);
  app.$mount('#app');
});
