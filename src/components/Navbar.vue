<template>
    <nav class="text-center py-4 px-4 mb-5">
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
                @click.prevent="$router.push('/books')"
                href="#">
                    Home
                </a>
            </div>
            <div class="col">
                <a 
                @click.prevent="$router.push('/search')"
                href="#">
                    Search
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
                v-if="access_token"
                @click.prevent="handleLogout"
                href="">
                    Logout
                </a>
                <a
                v-else
                @click.prevent="$router.push('/login')"
                href="#">
                    Login
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import {authStore} from "../stores/authStore";
    export default {
        name: "Navbar",
        computed: {
            ...mapState(authStore, ["access_token"])
        },
        methods: {
            ...mapActions(authStore, ["handleLogout"])
        }
    }
</script>

<style scoped>
nav {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 3px solid black;
}

.col {
    display: flex;
}

a {
    text-decoration: none;
    color: black;
    margin: auto;
}

a:hover {
    font-weight: 600;
}
</style>