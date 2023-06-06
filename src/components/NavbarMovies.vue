<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="Logo" height="30">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Sección 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sección 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sección 3</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <img src="" alt="Avatar" class="rounded-circle" width="30" height="30">
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
  
<style scoped></style>
  