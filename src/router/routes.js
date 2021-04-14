const Page404 = require('@/views/page-404.vue').default;
const Home = require('@/views/home.vue').default;

export const routes = [
  {
    path: '/',
    name: 'project-root',
    redirect: { name: 'home' }
  },
  {
    path: '/new',
    name: 'home',
    component: Home,
    props: true
  },
  { path: '*', name: '404-page', component: Page404, props: false }
];
