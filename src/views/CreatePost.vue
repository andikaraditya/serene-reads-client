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
            <div class="form-check">
                <input 
                v-model="checked"
                class="form-check-input me-3" type="checkbox" id="date">
                <label class="form-check-label fs-3 pointer-hover" for="date">
                    Scheduled post
                </label>
            </div>
            <input 
            v-if="checked"
            v-model="form.schedule"
            class="form-control pointer-hover"
            type="datetime-local">
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
                checked: false
            }
        },
        methods: {
            ...mapActions(bookStore, ["handleCreatePost"]),
            sendForm(){
                const {BookId} = this.$route.params
                if (!this.checked) {
                    this.form.schedule = null
                }
                this.handleCreatePost(this.form, BookId)
            }
        }
    }
</script>

<style scoped>
#date {
    height: 1.5rem;
    width: 1.5rem;
}
</style>