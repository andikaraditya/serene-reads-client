<template>
    <div class="border border-3 border-black rounded-4 p-4 px-5">
        <h1 class="text-center">CreatePost</h1>
        <form 
        @submit.prevent="sendForm"
        class="d-flex flex-column gap-3">
            <label class="fs-3" for="title">Post title:</label>
            <input 
            v-model="form.title"
            class="form-control" type="text" name="title" id="title">
            <label class="fs-3" for="title">Content:</label>
            <textarea 
            v-model="form.content"
            class="form-control" name="content" id="content" rows="8">
            </textarea>
            <label class="fs-3" for="date">Schedule post:</label>
            <input 
            v-model="form.schedule"
            type="datetime-local" name="" id="date">
            <div class="d-flex justify-content-between">
                <a 
                @click.prevent="$router.replace({name: 'ForumPosts'})"
                href="" class="btn btn-dark mt-3">Cancel</a>
                <button type="submit" class="btn btn-outline-dark mt-3">Create post</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { bookStore } from "../stores/bookStore";
    export default {
        name: "CreatePost",
        data() {
            return {
                form: {
                    title: "",
                    content: "",
                    schedule: null
                },
            }
        },
        methods: {
            ...mapActions(bookStore, ["handleCreatePost"]),
            sendForm(){
                const {BookId} = this.$route.params
                this.handleCreatePost(this.form, BookId)
            }
        }
    }
</script>