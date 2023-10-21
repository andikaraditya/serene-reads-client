<template>
    <div class="d-flex flex-column">
        <h1 class="align-self-center mt-4">Serene Reads</h1>
        <h2 class="align-self-center mt-4">Read & Talk Your Favorite Books!</h2>


        <div id="home-search" class="input-group mt-5 w-50 align-self-center">
        <input type="text" class="form-control border border-dark-subtle" placeholder="Search your favorite book!">
        <button class="btn btn-outline-secondary text-black" type="button" id="button-addon2">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>
h1 {
    font-size: 5rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 0.8rem;
}

#home-search{
    height: 3rem;
}
</style>