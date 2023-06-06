<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top spacing">
        <div>
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="Logo" height="30">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> 
        </div>

        <div class="collapse  navbar-collapse custom-nav" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Populares</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Top</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nuevas</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <div src="" alt="Avatar" class="rounded-circle" width="30" height="30"/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarMovies',
};
</script>

<style scoped>
    .custom-nav{
        display: flex;
        justify-content: space-around;
    }
</style>
