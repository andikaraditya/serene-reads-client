<template>
    <div>
        <h1 class="text-center">News On The Literature World</h1>
        <div id="news-container">
            <div 
            v-for="i in 9"
            class="card mb-4 border border-black border-2">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://placekitten.com/300/300" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">
                            Article by Anonymous 
                        </p>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque error, neque veniam, autem iste ullam ad ratione reprehenderit enim libero explicabo odio inventore molestiae quam dolores! Laboriosam, dolore iste?
                        </p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsPage"
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

.card {
    width: 80%;
}

</style>