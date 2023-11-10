import Vue from "vue";
import VueRouter from "vue-router";
import EventCreateView from "../views/EventCreateView.vue";
import EventListView from "../views/EventListView.vue";
import EventShowView from "../views/EventShowView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventListView,
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShowView,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreateView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
