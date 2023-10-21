<template>
    <nav class="container text-center py-4 mb-5">
        <div class="row">
            <div class="col">
                <a 
                @click.prevent="$router.push('/')"
                href="#">
                    Serene Reads
                </a>
            </div>
            <div class="col">
                <a 
                @click.prevent="$router.push('/')"
                href="#">
                    Home
                </a>
            </div>
            <div class="col">
                <a 
                @click.prevent="$router.push('/genres')"
                href="#">
                    Genres
                </a>
            </div>
            <div class="col">
                <a 
                @click.prevent="$router.push('/news')"
                href="#">
                    News
                </a>
            </div>
            <div class="col">
                <a 
                @click.prevent="$router.push('/login')"
                href="#">
                    Login
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
nav {
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 3px solid black;
}

a {
    text-decoration: none;
    color: black;
}
</style>