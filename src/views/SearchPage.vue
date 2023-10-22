<template>
    <div>
        <h1 class="text-center">Search Books</h1>
        <div class="search-container container">
            <form 
            @submit.prevent="handleSearch(form)"
            id="search-form">
            <div class="row">
                <div class="col-5">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Title</span>
                        <input 
                        v-model="form.title"
                        type="text" class="form-control" placeholder="Search title">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Author</span>
                        <input 
                        v-model="form.author"
                        type="text" class="form-control" placeholder="Search author">
                    </div>
                    <div class="form-check">
                        <input 
                        v-model="form.book_type"
                        class="form-check-input" value="fiction" type="radio" id="fiction">
                        <label class="form-check-label" for="fiction">
                            Fiction
                        </label>
                        </div>
                        <div class="form-check">
                        <input 
                        v-model="form.book_type"
                        class="form-check-input" value="nonfiction" type="radio" id="nonfiction">
                        <label class="form-check-label" for="nonfiction">
                            Non Fiction
                        </label>
                    </div>
                </div>
                <div class="col d-flex flex-wrap gap-3">
                    <div 
                    v-for="(category, index) in categories"
                    :key="index"
                    class="form-check">
                        <input 
                        v-model="form.categories"
                        class="form-check-input" type="checkbox" :value="category" :id="category">
                        <label class="form-check-label" :for="category">
                            {{ category }}
                        </label>
                    </div>
                </div>
            </div>
                <button class="btn btn-outline-dark mt-4 w-25">Search</button>
            </form>
        </div>
        <div class="search-container">
            <div 
            v-if="loading"
            class="text-center">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="">
                <p class="fs-1">Loading data</p>
            </div>
            <Card
            v-else
            v-for="searchItem in searchResults"
            :book="searchItem"
            />
            <div class="d-flex justify-content-between">
                <button 
                @click.prevent="handlePage('down')"
                :disabled="counter === 1"
                class="btn btn-outline-dark">Previous Page</button>
                <button 
                @click.prevent="handlePage('up')"
                class="btn btn-outline-dark">Next Page</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import {searchStore} from "../stores/searchStore";
import Card from "../components/Card.vue";

    export default {
        name: "SearchPage",
        data() {
            return {
                form: {
                    title: "",
                    author: "",
                    book_type: "",
                    categories: []
                },
                counter: 1
            }
        },
        components: {
            Card
        },
        computed: {
            ...mapState(searchStore, ["categories", "searchResults", "loading"])
        },
        methods: {
            ...mapActions(searchStore, ["handleSearch"]),
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
                console.log(obj)
                this.handleSearch(obj)
                window.scrollTo(0,0);
            }
        },
        created(){
            this.handleSearch(this.$route.query)
        }
    }
</script>

<style scoped>
.search-container {
    width: 80%;
    margin: 3rem auto;
}

#search-form{
    max-width: 900px;
}
</style>