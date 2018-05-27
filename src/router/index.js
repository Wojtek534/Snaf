import Vue from 'vue';
import Router from 'vue-router';
// home
import DashboardPage from '@/components/DashboardPage';
import CurrencyPage from '@/components/CurrencyPage';
import PopulationPage from '@/components/PopulationPage';
import NotFound from '@/components/common/NotFound';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      component: DashboardPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/currency',
      component: CurrencyPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/population',
      component: PopulationPage,
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
