<template>
    <div class="border border-3 border-black rounded-4 p-4">
        <p 
        @click.prevent="$router.go(-1)"
        class="fs-4 pointer-hover">⬅ back to forum</p>
        <h2 class="text-center mb-4 fs-1">{{ postDetail.title }}</h2>
        <p class="fs-5">Posted by: {{ postDetail.User.username }}</p>
        <p>Posted on {{ getDate }}</p>
        <p class="fs-4">{{ postDetail.content }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {bookStore} from "../stores/bookStore";
    export default {
        name: "PostDetail",
        computed: {
            ...mapState(bookStore, ["postDetail"]),
            getDate(){
                const date = new Date(this.postDetail.createdAt)
                const options = { year: 'numeric', month: 'long', day: 'numeric' }

                return date.toLocaleDateString("en-EN", options)
            }
        },
        methods: {
            ...mapActions(bookStore, ["fetchPostById"])
        },
        created() {
            // console.log(this.$route.params)
            const {BookId, PostId} = this.$route.params
            this.fetchPostById(BookId, PostId)
        }
    }
</script>

<style scoped>
</style>