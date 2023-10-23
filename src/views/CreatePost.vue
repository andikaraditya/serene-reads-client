<template>
    <div class="border border-3 border-black rounded-4 p-4 px-5">
        <h1 class="text-center">CreatePost</h1>
        <form class="d-flex flex-column gap-3">
            <label class="fs-3" for="title">Post title:</label>
            <input 
            v-model="form.title"
            class="form-control" type="text" name="title" id="title">
            <label class="fs-3" for="title">Content:</label>
            <textarea 
            v-model="form.content"
            class="form-control" name="content" id="content" rows="8">
            </textarea>
            <div class="d-flex justify-content-between">
                <a 
                @click.prevent="$router.go(-1)"
                href="" class="btn btn-dark mt-3">Cancel</a>
                <a href="" class="btn btn-outline-dark mt-3">Create post</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreatePost",
        data() {
            return {
                form: {
                    title: "",
                    content: ""
                }
            }
        }
    }
</script>