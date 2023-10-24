<template>
    <div class="card mb-4 border border-black border-2">
        <div class="row g-0">
            <div class="col-md-4 card-image">
                <img
                    :src="book.imageUrl"
                    class="img-fluid"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ book.title }}</h5>
                    <p class="card-text">By {{ book.author }}</p>
                    <p class="card-text card-main">
                        {{ book.summary }}
                    </p>
                    <p class="card-text">
                        <small class="text-body-secondary">ISBN: {{ book.isbn }}</small>
                    </p>
                <button
                @click.prevent="handleAddBook(book)"
                v-if="loc ==='search'"
                class="btn btn-outline-dark"
                >See Community</button>
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
    props: ["book", "loc"],
    methods: {
        ...mapActions(bookStore, ["handleAddBook"])
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
}
.card-main {
    max-height: 250px;
    overflow: auto;
}
</style>
