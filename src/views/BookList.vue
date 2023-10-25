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
            <div class="input-group mb-4 w-25">
                <label class="input-group-text" for="inputGroupSelect01">View Mode</label>
                    <select 
                    v-model="viewMode"
                    @change="handleChangeView"
                    class="form-select" id="inputGroupSelect01">
                        <option selected value="page">Page</option>
                        <option value="scroll">Scroll</option>
                    </select>
            </div>
            <Card 
            class="pointer-hover"
            @click.prevent="$router.push(`/books/${book.id}`)"
            v-for="(book, index) in books"
            :key="index"
            :book="book"
            />
            <div 
            v-if="viewMode === 'page'"
            class="d-flex justify-content-between">
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
        <button 
        @click.prevent="scrollTop"
        class="btn btn-outline-dark fs-3 fw-bold to-top">↑</button>
    </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
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
                counter: 1,
                viewMode: "page",

            }
        },
        components: {
            Card
        },
        computed: {
            ...mapWritableState(bookStore, ["books"]),
            ...mapState(bookStore, ["isBusy"])
        },
        methods: {
            ...mapActions(bookStore, ["fetchBooks"]),
            handleSearch() {
                this.viewMode = "page"
                this.fetchBooks(this.viewMode, this.form)
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
                this.fetchBooks(this.viewMode, obj)
                window.scrollTo(0,0);
            },
            handleChangeView(){
                this.books = []
                this.counter = 1
                this.$router.push("/books")
                this.fetchBooks(this.viewMode)
            },
            handleScroll(e){
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    if (!this.isBusy && this.viewMode === "scroll") {
                        console.log("you're at the bottom of the page")
                        const {query} = this.$route
                        this.counter += 1
                        const obj = {
                            ...query,
                            page: this.counter
                        }
                        this.fetchBooks(this.viewMode, obj)
                    }
                }
            },
            scrollTop(){
                window.scrollTo(0,0)
            }
        },
        created(){
            if (this.$route.query.page) {
                this.counter = Number(this.$route.query.page)
            }
            this.fetchBooks(this.viewMode, this.$route.query)
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll)
        },
        unmounted(){
            window.removeEventListener("scroll", this.handleScroll)
        }
    }
</script>

<style scoped>
#community-container {
    width: 80%;
    margin: 3rem auto;
}
</style>