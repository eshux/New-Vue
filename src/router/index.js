import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import EventDetailsView from '../views/event/DetailsView.vue';
import EventRegisterView from '../views/event/RegisterView.vue';
import EventEditView from '../views/event/EditView.vue';
import EventLayoutView from '../views/event/LayoutView.vue';
import AboutView from '../views/AboutView.vue';
import NotFound from '../views/NotFound.vue';
import NetworkError from '../views/NetworkError.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/event/:id',
      name: 'EventLayout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetailsView
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegisterView
        },
        {
          path: 'dit',
          name: 'EventEdit',
          component: EventEditView
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;
