<template>
    <div>
        <h1 class="text-center">Available Communities</h1>
        <div id="community-container">
            <Card 
            class="pointer-hover"
            @click.prevent="$router.push(`/books/${book.id}`)"
            v-for="(book, index) in books"
            :key="index"
            :book="book"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {bookStore} from "../stores/bookStore";
import Card from "../components/Card.vue";
    export default {
        name: "BookList",
        components: {
            Card
        },
        computed: {
            ...mapState(bookStore, ["books"])
        },
        methods: {
            ...mapActions(bookStore, ["fetchBooks"])
        },
        created(){
            this.fetchBooks()
        }
    }
</script>

<style scoped>
#community-container {
    width: 80%;
    margin: 3rem auto;
}
</style>