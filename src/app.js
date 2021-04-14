import 'babel-polyfill';
import Vue from 'vue';
import App from '@/components/app.vue';
import { createRouter } from '@/router';

Vue.config.performance = true;

export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    ...App,
    render: h => h(App)
  });
  return { app, router };
}
