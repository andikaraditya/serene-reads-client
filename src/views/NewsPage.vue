<template>
    <div>
        <h1 class="text-center">News On The Literature World</h1>
        <div id="news-container">
            <Card />
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
    export default {
        name: "NewsPage",
        components: {
            Card
        }
    }
</script>

<style scoped>
#news-container {
    width: 80%;
    margin: 3rem auto;
}
</style>