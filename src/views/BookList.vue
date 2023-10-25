<template>
    <div>
        <h1 class="text-center">Available Communities</h1>
        <div id="community-container">
            <form 
            @submit.prevent="handleSearch"
            class="mb-4">
                <div class="input-group mb-3 w-50">
                    <span class="input-group-text">Title</span>
                    <input 
                    v-model="form.title"
                    type="text" class="form-control" placeholder="Search title">
                </div>
                <div class="input-group mb-3 w-50">
                    <span class="input-group-text">Author</span>
                    <input 
                    v-model="form.author"
                    type="text" class="form-control" placeholder="Search author">
                </div>
                <button class="btn btn-outline-dark">Search</button>
            </form>
            <Card 
            class="pointer-hover"
            @click.prevent="$router.push(`/books/${book.id}`)"
            v-for="(book, index) in books"
            :key="index"
            :book="book"
            />
            <div class="d-flex justify-content-between">
                <button 
                @click.prevent="handlePage('down')"
                :disabled="counter === 1"
                class="btn btn-outline-dark">Previous Page</button>
                <button 
                :disabled="books.length < 8"
                @click.prevent="handlePage('up')"
                class="btn btn-outline-dark">Next Page</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {bookStore} from "../stores/bookStore";
import Card from "../components/Card.vue";
    export default {
        name: "BookList",
        data() {
            return {
                form:{
                    title: "",
                    author: ""
                },
                counter: 1
            }
        },
        components: {
            Card
        },
        computed: {
            ...mapState(bookStore, ["books"])
        },
        methods: {
            ...mapActions(bookStore, ["fetchBooks"]),
            handleSearch() {
                this.fetchBooks(this.form)
            },
            handlePage(direction){
                if (direction ==="up") {
                    this.counter += 1
                } else if (direction === "down") {
                    this.counter -= 1
                }
                const {query} = this.$route
                const obj = {
                    ...query,
                    page: this.counter
                }
                // console.log(obj)
                this.fetchBooks(obj)
                window.scrollTo(0,0);
            }
        },
        created(){
            this.fetchBooks(this.$route.query)
        }
    }
</script>

<style scoped>
#community-container {
    width: 80%;
    margin: 3rem auto;
}
</style>