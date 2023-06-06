<template>
    <div class="container">
        <h2>{{ movie.original_title }}</h2>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<script>

import axios from 'axios';
const accessToken = process.env.VUE_APP_ACCESS_TOKEN;

export default {
    // name: 'MovieDetail',
    data() {
        return {
            movie: {}
        };
    },
    mounted() {
        const idMovie = this.$route.params.idMovie;
        console.log("Hola mundo", idMovie,this.$route.params);
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
