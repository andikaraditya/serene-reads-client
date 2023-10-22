<template>
    <div>
        <header>
            <p>Discussion on: </p>
            <h1 class="text-center">Harry Potter and the Philosopher's Stone</h1>
            <p class="text-end">By J.K Rowling</p>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-4 flex-column p-4">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" class="img-fluid w-100 rounded">
                <p class="mt-4 fs-5">Harry Potter spent ten long years living with Mr. and Mrs. Dursley, an aunt and uncle whose outrageous favoritism of their perfectly awful son Dudley leads to some of the most inspired dark comedy since Charlie and the Chocolate Factory. But fortunately for Harry, he's about to be granted a scholarship to a unique boarding school called THE HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</p>
                <a 
                @click.prevent="$router.push('create')"
                href="" class="btn btn-outline-dark">Create post</a>
                </div>
                <div class="col p-4">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

    export default {
        name: "ForumPage",
        components: {
            RouterView
        }
    }
</script>

<style scoped>
header {
    width: 80%;
    margin: auto;
}
header p {
    font-size: 1.5rem;
}
</style>