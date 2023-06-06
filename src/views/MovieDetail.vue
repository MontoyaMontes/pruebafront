<template>
    <NavbarMovies/>
    <router-link to="/" class="btn btn-secondary position-absolute top-20 start-0 mt-3 ms-3">
      Regresar
    </router-link>
    <div class="container">
        <h2>{{ movie.original_title }}</h2>
        <img :src="getPoster(movie.poster_path)" class="card-img-top custom-poster" alt="Poster">
        <div class="d-flex justify-content-center flex-wrap">
            <div class="me-2 mb-2" v-for="(genre, groupIndex) in movie.genres" :key="groupIndex">
                <span class="badge bg-info">{{ genre.name }}</span>
            </div>
        </div>
        <p>{{ movie.overview }}</p>
        <div class="d-flex flex-wrap">
            <div class="text-left me-2 mb-2" v-for="(prod, groupIndex) in production_companies" :key="groupIndex">
                <span class="badge bg-primary">{{prod.name}}</span>
            </div>
        </div>


    </div>
</template>

<script>

import axios from 'axios';
const accessToken = process.env.VUE_APP_ACCESS_TOKEN;
import NavbarMovies from "../components/NavbarMovies.vue"



export default {
    name: 'MovieDetail',
    components: {
        NavbarMovies
    },
    data() {
        return {
            movie: {},
            production_companies: []
        };
    },
    methods: {
        getPoster(url) {
            return `https://image.tmdb.org/t/p/w342/${url}`;
        }
    },
    mounted() {
        const idMovie = this.$route.params.idMovie;
        axios
            .get(`https://api.themoviedb.org/3/movie/${idMovie}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                this.movie = response.data;
                this.production_companies = response.data.production_companies;
                console.log("++++++",response.data.production_companies);
                console.log("response.data",response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>

<style scoped>

.custom-poster{
    width: 500px;
    background-color: red;
}

</style>