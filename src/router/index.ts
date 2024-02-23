import { createRouter, createWebHistory } from 'vue-router';
import UserRequestsView from '@/views/UserRequestsView.vue';
import CreateRequestsView from '@/views/CreateRequestsView.vue';
import CreateOrderView from '@/views/CreateOrderView.vue';
import CreateDeliverView from '@/views/CreateDeliverView.vue';
import AllRequestsView from '@/views/AllRequestsView.vue';
import PageNotFount from '@/views/PageNotFount.vue';

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
      component: AllRequestsView
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
      component: UserRequestsView
    },
    {
      path: '/:userId/create',
      name: 'create-requests',
      component: CreateRequestsView
    },
    {
      path: '/:userId/create-order',
      name: 'create-order',
      component: CreateOrderView
    },
    {
      path: '/:userId/create-deliver',
      name: 'create-deliver',
      component: CreateDeliverView
    },
    { path: '/:pathMatch(.*)*', component: PageNotFount }
  ]
});

router.beforeEach((to) => {
  if (!to.params.userId) to.params.userId = '1';
});

export default router;
