<template>
    <div>
        <h1 class="text-center">Available Communities</h1>
        <div id="community-container">
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
#community-container {
    width: 80%;
    margin: 3rem auto;
}
</style>