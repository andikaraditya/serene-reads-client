<template>
    <div>
        <h2 class="text-center mb-4 fs-1">Community Posts</h2>
        <PostCard 
        v-for="i in 4"
        />
    </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

    export default {
        name: "ForumPosts",
        components: {
            PostCard
        }
    }
</script>

<style scoped>
.card{
    background-color: inherit;
}
</style>