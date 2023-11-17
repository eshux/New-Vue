import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import EventDetailsView from '../views/event/DetailsView.vue';
import EventCreateView from '../views/event/CreateView.vue';
import EventEditView from '../views/event/EditView.vue';
import EventLayoutView from '../views/event/LayoutView.vue';
import AboutView from '../views/AboutView.vue';

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
          path: 'create',
          name: 'EventCreate',
          component: EventCreateView
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
    }
  ]
});

export default router;
