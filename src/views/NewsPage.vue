<template>
    <div ref="scrollComponent">
        <h1 class="text-center">News On The Literature World</h1>
        <div id="news-container">
            <Card 
            v-for="(newsItem, index) in news"
            :key="index"
            :newsItem="newsItem"
            />
            <div 
            v-if="!isBusy"
            class="text-center">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="">
                <p class="fs-1">Loading news</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapWritableState  } from "pinia";
import {newsStore} from "../stores/newsStore";
import { ref } from "vue";
import Card from "../components/Card.vue";
    export default {
        name: "NewsPage",
        data(){
            return {
                scrollComponent: ref(null)
            }
        },
        components: {
            Card
        },
        computed: {
            ...mapState(newsStore, ["news"]),
            ...mapWritableState(newsStore, ["isBusy"])
        },
        methods: {
            ...mapActions(newsStore, ["fetchNews"]),
            handleScroll(e){
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    if (!this.isBusy) {
                        console.log("you're at the bottom of the page")
                        this.fetchNews()
                    }
                }
            }
        },
        created(){
            this.fetchNews()
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
#news-container {
    width: 80%;
    margin: 3rem auto;
}
</style>