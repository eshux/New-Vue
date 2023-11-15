import Vue from 'vue';
import VueRouter from 'vue-router';
import EventCreateView from '../views/EventCreateView.vue';
import EventListView from '../views/EventListView.vue';
import EventShowView from '../views/EventShowView.vue';
import NProgress from 'nprogress';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: true
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShowView,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('event/fetchEvent', routeTo.params.id).then(() => {
        next();
      });
    }
  },
  {
    path: '/events/create',
    name: 'event-create',
    component: EventCreateView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
