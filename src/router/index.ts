import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => {
        return 'requests';
      }
    },
    {
      path: '/requests',
      name: 'all-requests',
      component: () => import('@/views/AllRequestsView.vue')
    },
    {
      path: '/:userId',
      name: 'user',
      redirect: (to) => {
        return `/${to.params.userId}/requests`;
      }
    },
    {
      path: '/:userId/requests',
      name: 'user-requests',
      component: () => import('@/views/UserRequestsView.vue')
    },
    {
      path: '/:userId/create',
      name: 'create-requests',
      component: () => import('@/views/CreateRequestsView.vue')
    },
    {
      path: '/:userId/create-order',
      name: 'create-order',
      component: () => import('@/views/CreateOrderView.vue')
    },
    {
      path: '/:userId/create-deliver',
      name: 'create-deliver',
      component: () => import('@/views/CreateDeliverView.vue')
    },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/PageNotFount.vue') }
  ]
});

router.beforeEach((to) => {
  if (!to.params.userId) to.params.userId = '1';
});

export default router;
