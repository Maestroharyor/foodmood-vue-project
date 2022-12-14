import { Capitalize } from "@/functions/utilities";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipesView.vue"),
  },
  {
    path: "/recipes/:id",
    name: "recipesDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipeDetailView.vue"),
  },
  {
    path: "/recipes/category/:name",
    name: "recipesCategories",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipeCategoryView.vue"),
  },
  {
    path: "/download",
    name: "download",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DownloadView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.name === "recipesDetails") {
    const routerParamsId = to.params.id as string;
    const routerParamsArr = routerParamsId.split("-");

    document.title = `${Capitalize(
      routerParamsArr.slice(0, routerParamsArr.length - 1).join(" ")
    )} - FoodMood`;
  } else if (to.name === "recipesCategories") {
    document.title = `${Capitalize(String(to.params.name))} Recipes - FoodMood`;
  } else {
    document.title = `${Capitalize(String(to.name))} - FoodMood`;
  }

  next();
});

export default router;
