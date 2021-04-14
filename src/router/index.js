import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createRouter() {
  let router = new VueRouter({
    mode: 'history',
    base: __dirname
  });
  router.beforeEach((to, from, next) => {
    // if (to.meta.static && Window.location) {
    //   Window.location = to.path;
    //   return;
    // }
    next();
  });
  return router;
}

export default createRouter;
