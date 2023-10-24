<template>
    <div>
        <p 
        @click.prevent="$router.replace({name: 'ForumPosts'})"
        class="fs-4 pointer-hover">⬅ back to forum</p>
        <div class="border border-3 border-black rounded-4 p-4">
            <h2 class="mb-4 fs-1">{{ post.title }}</h2>
            <div class="d-flex justify-content-between">
                <p>Posted by: {{ post.User.username }}</p>
                <p>Posted on {{ getDate }}</p>
            </div>
            <p class="fs-4 mb-5">{{ post.content }}</p>
            <Disqus
            :pageConfig="pageConfig"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {bookStore} from "../stores/bookStore";
    export default {
        name: "PostDetail",
        data() {
            return {
                post: {
                    id: 0,
                    title: "",
                    content: "",
                    UserId: 0,
                    BookId: 0,
                    createdAt: "",
                    updatedAt: "",
                    User: {
                        username: ""
                    }
                },
                pageConfig: {
                    identifier: this.$route.params.PostId
                },
            }
        },
        watch: {
            postDetail(newValue, oldValue){
                if (newValue) {
                    this.post = this.postDetail
                }
            }
        },
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