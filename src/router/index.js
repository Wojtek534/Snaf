import Vue from 'vue';
import Router from 'vue-router';
// home
import HomePage from '@/components/HomePage';
import NotFound from '@/components/common/NotFound';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/notFound',
      component: NotFound
    },
    {
      path: '/*',
      redirect: '/notFound'
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
