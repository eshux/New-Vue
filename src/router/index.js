import Vue from 'vue';
import VueRouter from 'vue-router';
import EventCreateView from '../views/EventCreateView.vue';
import EventListView from '../views/EventListView.vue';
import EventShowView from '../views/EventShowView.vue';
import NProgress from 'nprogress';
import store from '@/store';
import NetworkIssue from '../views/NetworkIssue.vue';
import NotFound from '../views/NotFound.vue';

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
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then(() => {
          next();
        })
        .catch((err) => {
          if (err.response && err.response.status == 404) {
            next({ name: '404', params: { resource: 'event' } });
          } else {
            next({ name: 'network-issue' });
          }
        });
    }
  },
  {
    path: '/events/create',
    name: 'event-create',
    component: EventCreateView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue,
    props: true
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
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
