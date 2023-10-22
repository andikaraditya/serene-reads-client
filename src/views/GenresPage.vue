<template>
    <div>
        <h1 class="text-center">Available Genres</h1>

        <div id="genre-container" class="d-flex flex-wrap justify-content-between">
            <GenresCard 
            v-for="category in categories"
            :category="category"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "pinia";
import {bookStore} from "../stores/books";
import GenresCard from "../components/GenresCard.vue";
    export default {
        name: "GenresPage",
        components: {
            GenresCard
        },
        computed: {
            ...mapState(bookStore, ["categories"])
        }
    }
</script>

<style scoped>
#genre-container {
    /* background-color: red; */
    width: 80%;
    margin: auto;
    height: 70vh;
}

.card {
    height: 20%;
    width: 30%;
}

.card:hover {
    cursor: pointer;
}

.card:nth-of-type(1) {
    background-image: url("https://wallpaperaccess.com/full/3328619.jpg");
    background-size: cover;
    background-position-y: 70%;
}
.card:nth-of-type(2) {
    background-image: url("https://png.pngtree.com/background/20230401/original/pngtree-forest-night-glow-fantasy-background-picture-image_2251888.jpg");
    background-size: cover;
    background-position-y: 70%;
}
.card:nth-of-type(3) {
    background-image: url("https://www.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg");
    background-size: cover;
    background-position-y: 30%;
}
.card:nth-of-type(4) {
    background-image: url("https://www.thoughtco.com/thmb/CWbNhXAvv6eqiWqQVWhWlAlm74A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-god-and-adam-s-hands-157844809-58ab54a23df78c345b08689c-5c531771c9e77c00014b025e.jpg");
    background-size: cover;
    background-position-y: 50%;
}
.card:nth-of-type(5) {
    background-image: url("https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop");
    background-size: cover;
    background-position-y: 70%;
}
.card:nth-of-type(6) {
    background-image: url("https://static.independent.co.uk/2021/06/10/15/iStock-1174494913.jpg");
    background-size: cover;
    background-position-y: 30%;
}
.card:nth-of-type(7) {
    background-image: url("https://worldofprintables.com/wp-content/uploads/2023/06/Outer-Space-Stars-Space-Wallpapers-650x364.jpg");
    background-size: cover;
    background-position-y: 30%;
}
.card:nth-of-type(8) {
    background-image: url("https://www.verywellmind.com/thmb/e4Q2mVEfC4eX09BXZrXJ9_UANec=/2359x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-527617369-f4a8c9d5be1b4abd88636130f1384618.jpg");
    background-size: cover;
    background-position-y: 30%;
}
.card:nth-of-type(9) {
    background-image: url("https://www.science.org/do/10.1126/science.caredit.a1600047/abs/cc_careers_highlighting-lines-16x9.jpg");
    background-size: cover;
    background-position-y: 60%;
}
</style>