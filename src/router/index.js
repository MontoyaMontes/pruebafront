import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieCatalog from '../components/MovieCatalog.vue';
import MovieDetail from '../views/MovieDetail.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MovieCatalog',
        component: MovieCatalog
    },
    {
        path: '/movieDetail/:idMovie',
        name: 'MovieDetail',
        component: MovieDetail
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
