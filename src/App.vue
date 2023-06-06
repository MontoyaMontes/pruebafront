<template>
  <NavbarMovies />
  <CardsMovies msg="Welcome to Your Vue.js App" />
</template>

<script>

import CardsMovies from './components/MovieCatalog.vue'
import NavbarMovies from './components/NavbarMovies.vue';

export default {
  name: 'App',
  components: {
    CardsMovies,
    NavbarMovies,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
