import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import MovieCatalog from "./views/MovieCatalog.vue";
import MovieDetail from "./views/MovieDetail.vue";

import "./assets/main.scss";
const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
});
// createApp(App).mount("#app").use(router).mount("#app");

const app = createApp(App);
app.use(router);
app.mount("#app");
