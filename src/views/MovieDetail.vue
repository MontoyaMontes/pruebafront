<template>
    <div class="container">
        <div v-if="movie">
            <h2>{{ movie.original_title }}</h2>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
const accessToken = process.env.VUE_APP_ACCESS_TOKEN;

export default {
    name: 'MovieDetail',
    data() {
        return {
            movie: null
        };
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
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>
