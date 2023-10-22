<template>
    <div v-if="book">
        <header>
            <p>Discussion on: </p>
            <h1 
            @click.prevent="$router.push(`/books/${book.id}`)"
            class="text-center pointer-hover">{{ book.title }}</h1>
            <p class="text-end">By {{ book.author }}</p>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-4 flex-column p-4">
                <img :src="book.imageUrl" class="img-fluid w-100 rounded">
                <p class="mt-4 fs-5">{{ book.summary }}</p>
                <a 
                @click.prevent="$router.push({name: 'CreatePost'})"
                href="" class="btn btn-outline-dark">Create post</a>
                </div>
                <div class="col p-4">
                    <RouterView
                    :posts="book.Posts"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {bookStore} from "../stores/bookStore";
import { RouterView } from 'vue-router';

    export default {
        name: "ForumPage",
        components: {
            RouterView
        },
        computed: {
            ...mapState(bookStore, ["book"])
        },
        methods: {
            ...mapActions(bookStore, ["fetchBookById"])
        },
        created() {
            const {BookId} = this.$route.params
            // console.log(BookId)
            this.fetchBookById(BookId)
        }
    }
</script>

<style scoped>
header {
    width: 80%;
    margin: auto;
}
header p {
    font-size: 1.5rem;
}
</style>