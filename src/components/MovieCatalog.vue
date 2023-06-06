<template>
    <div class="container">
        <FilterMovie @filters-applied="applyFilters" />

        <div id="carouselExample" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(movieGroup, groupIndex) in movieGroups" :key="groupIndex"
                    :class="{ active: groupIndex === 0 }">
                    <div class="row">
                        <div class="col-md-4" v-for="(movie, index) in movieGroup" :key="index">
                            <div class="card">
                                <img :src="getPoster(movie.poster_path)" class="card-img-top" alt="Poster">
                                <div class="card-body">
                                    <h5 class="card-title text-left">{{ movie.original_title }}</h5>
                                    <p class="card-text text-overview">{{ truncateText(movie.overview, 40) }}</p>
                                    <p class="card-text custom-text-right">{{ movie.release_date }}</p>
                                    <a :href="'/movieDetail/' + movie.id" class="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev custom-carousel-prev" href="#carouselExample" role="button" data-slide="prev"
                @click="changePage('previous')">
                <i class="fas fa-chevron-left"></i>
                <span class="sr-only">
                </span>
            </a>
            <a class="carousel-control-next custom-carousel-next" href="#carouselExample" role="button" data-slide="next"
                @click="changePage('next')">
                <i class="fas fa-chevron-right"></i>
                <span class="sr-only">Siguiente</span>
            </a>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import FilterMovie from '@/components/FilterMovie.vue';

const accessToken = process.env.VUE_APP_ACCESS_TOKEN;

export default {
    name: 'MovieCatalog',
    components: {
        FilterMovie,
    },
    data() {
        return {
            movies: [],
            movieGroups: [],
            currentPage: 1,
            includeAdult: false,
            query: '',
        };
    },
    methods: {
        fetchMovies(page) {
            axios
                .get(`https://api.themoviedb.org/3/search/movie/?page=${page}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    this.movies = response.data.results;
                    this.movieGroups = this.chunkArray(this.movies, 3);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        searchMovie() {
            const queryParams = {
                query: this.query,
                include_adult: this.includeAdult,
            };
            axios
                .get(`https://api.themoviedb.org/3/search/movie?query=mad%20max`, {
                    params: queryParams,
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    this.movies = response.data.results;
                    this.movieGroups = this.chunkArray(this.movies, 3);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        applyFilters(filters) {
            this.includeAdult = filters.includeAdult;
            this.query = encodeURIComponent(filters.query);
            this.searchMovie(1);
        },
        truncateText(text, limit) {
            const words = text.split(' ');
            if (words.length > limit) {
                return words.slice(0, limit).join(' ') + '...';
            }
            return text;
        },
        changePage(direction) {
            if (direction === 'previous') {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            } else if (direction === 'next') {
                this.currentPage++;
            }
            this.fetchMovies(this.currentPage);
        },
        chunkArray(array, size) {
            const chunkedArray = [];
            for (let i = 0; i < array.length; i += size) {
                const chunk = array.slice(i, i + size);
                chunkedArray.push(chunk);
            }
            return chunkedArray;
        },
        getPoster(url) {
            return `https://image.tmdb.org/t/p/w342/${url}`;
        }
    },
    watch: {
        'FilterMovie.query': {
            handler() {
                this.searchMovie();
            },
            deep: true,
        },
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/movie/upcoming?limit=9&page=1', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                this.movies = response.data.results;
                this.movieGroups = this.chunkArray(this.movies, 3);
            })
            .catch(error => {
                console.error(error);
            });
    },

};
</script>
  
<style scoped>
.row {
    padding: 2em;
}

.card {
    padding: 1em;
    background-color: #b1bdd6;
}

.custom-carousel-prev {
    position: absolute;
    left: -50px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}

.custom-carousel-next {
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    bottom: 0;
    width: 100%;
}

.card-title {
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.carousel-caption .card-title,
.carousel-caption .card-text {
    color: #fff;
}

.text-overview {
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.custom-text-right {
    text-align: right;
}

.card-title {
    font-weight: bold;
}

.carousel-caption .card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.score-meter {
    background-color: #f1f1f1;
    color: #333;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 10px;
}

.carousel-indicators {
    bottom: 15px;
}

.carousel-indicators li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #f1f1f1;
}

.carousel-indicators .active {
    background-color: #333;
}

.custom-carousel-next {
    background-color: black;
    position: absolute;
    right: -180px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.custom-carousel-prev {
    background-color: black;
    position: absolute;
    left: -180px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>