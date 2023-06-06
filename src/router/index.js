import { createRouter, createWebHistory } from "vue-router";
import MovieCatalog from "../views/MovieCatalog.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  {
    path: "/",
    name: "MovieCatalog",
    component: MovieCatalog,
  },
  {
    path: "/movieDetail/:idMovie",
    name: "movieDetail",
    component: MovieDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
