<template>
    <div>
        <h2 class="text-center mb-4 fs-1">Community Posts</h2>
        <PostCard 
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
        />
    </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

    export default {
        name: "ForumPosts",
        components: {
            PostCard
        },
        props: ["posts"]
    }
</script>

<style scoped>
.card{
    background-color: inherit;
}
</style>