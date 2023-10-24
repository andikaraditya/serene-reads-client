<template>
    <div>
        <h2 
        v-if="posts.length > 0"
        class="text-center mb-4 fs-1">Community Posts</h2>
        <div 
        v-if="posts.length === 0"
        class="text-center">
            <p class="text-center mb-4 fs-1">There are no posts in this forum right now</p>
            <p class="text-center mb-4 fs-4">Be the first one to post on this forum!</p>
            <a 
                @click.prevent="$router.push({name: 'CreatePost'})"
                href="" class="btn btn-outline-dark">Create post</a>
        </div>
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