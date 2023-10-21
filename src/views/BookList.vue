<template>
    <div>
        <h1 class="text-center">Available Communities</h1>
        <div id="news-container">
            <Card />
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
    export default {
        components: {
            Card
        }
    }
</script>

<style scoped>
h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.6rem;
}

#news-container {
    width: 80%;
    margin: 3rem auto;
}
</style>