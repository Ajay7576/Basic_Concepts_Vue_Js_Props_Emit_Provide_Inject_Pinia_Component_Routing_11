import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentRegistration from "../components/basicConcepts/StudentRegistration.vue";
import { AddEdit, LayoutView, ListView } from "../components/pinia";
import {
  Child,
  Inject,
  Parent,
  Privacy,
  Provide,
  UploadMultiple,
  DynamicNavbar,
} from "../components/basicConcepts";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/child",
    name: "Child",
    component: Child,
  },
  {
    path: "/uploadMultiple",
    name: "UploadMultiple",
    component: UploadMultiple,
  },

  {
    path: "/:name",
    component: Privacy,
  },

  {
    path: "/provide",
    name: "Provide",
    component: Provide,
  },

  {
    path: "/inject",
    name: "Inject",
    component: Inject,
  },

  {
    path: "/register",
    name: "StudentRegistration",
    component: StudentRegistration,
  },
  {
    path: "/dynamicNavbar",
    name: "DynamicNavbar",
    component: DynamicNavbar,
  },

  {
    path: "/users",
    name: "Users",
    component: LayoutView,
    children: [
      { path: "", name: "listView", component: ListView },
      { path: "add", component: AddEdit },
      { path: "edit/:id", component: AddEdit },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
