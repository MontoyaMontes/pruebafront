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

export default routes;
