<template>
    <div>
        <h1 class="text-center">News On The Literature World</h1>
        <div id="news-container">
            <Card 
            v-for="(newsItem, index) in news"
            :key="index"
            :newsItem="newsItem"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {newsStore} from "../stores/newsStore";
import Card from "../components/Card.vue";
    export default {
        name: "NewsPage",
        components: {
            Card
        },
        computed: {
            ...mapState(newsStore, ["news"])
        },
        methods: {
            ...mapActions(newsStore, ["fetchNews"])
        },
        created(){
            this.fetchNews()
        }
    }
</script>

<style scoped>
#news-container {
    width: 80%;
    margin: 3rem auto;
}
</style>