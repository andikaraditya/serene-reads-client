<template>
    <div class="card text-center mt-4 mb-2">
        <div>
            <h3>{{ category }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "GenresCard",
    props: ["category"]
}
</script>

<style scoped>
.card div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
}

h3 {
    margin: auto;
    color: white;
}
</style>