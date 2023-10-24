<template>
    <div class="card mb-4 border border-black border-2">
        <div class="row g-0">
            <div class="col-md-4 card-image">
                <img
                    :src="book ? book.imageUrl : newsItem.urlToImage"
                    class="img-fluid"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ book ? book.title : newsItem.title }}</h5>
                    <p class="card-text">By {{ book ? book.author : newsItem.author }}</p>
                    <p
                    class="card-text"
                    v-if="newsItem"
                    >On {{ getDate }}</p>
                    <p class="card-text card-main">
                        {{ book ? book.summary : newsItem.description }}
                    </p>
                    <p class="card-text">
                        <small 
                        v-if="book"
                        class="text-body-secondary">ISBN: {{ book.isbn }}</small>
                    </p>
                <button
                @click.prevent="handleAddBook(book)"
                v-if="loc ==='search'"
                class="btn btn-outline-dark"
                >See Community</button>
                <a
                :href="newsItem.url"
                target="_blank"
                rel="noreferrer"
                v-if="newsItem"
                class="btn btn-outline-dark"
                >Read article on {{ newsItem.source }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import {bookStore} from "../stores/bookStore";

export default {
    name: "Card",
    props: ["book", "loc", "newsItem"],
    computed: {
        getDate(){
                const date = new Date(this.newsItem.publishedAt)
                const options = { year: 'numeric', month: 'long', day: 'numeric' }

                return date.toLocaleDateString("en-EN", options)
            }
    },
    methods: {
        ...mapActions(bookStore, ["handleAddBook"]),
    }
}
</script>

<style scoped>
.card {
    max-width: 80%;
    background-color: inherit;
}
.card-image{
    max-width: 300px;
}

img {
    width: 100%;
    height: 100%;
}
.card-main {
    max-height: 250px;
    overflow: auto;
}
</style>
