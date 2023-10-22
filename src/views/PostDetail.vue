<template>
    <div class="border border-3 border-black rounded-4 p-4">
        <p 
        @click.prevent="$router.go(-1)"
        class="fs-4 pointer-hover">⬅ back to forum</p>
        <h2 class="text-center mb-4 fs-1">Post Title</h2>
        <p class="fs-5">Posted by: Anonymous</p>
        <p class="fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis impedit recusandae, laborum dolore, expedita voluptates voluptatem quaerat, facere nesciunt ratione unde. Est id eveniet possimus esse reiciendis, itaque quibusdam doloribus?</p>
    </div>
</template>

<script>
    export default {
        name: "PostDetail"
    }
</script>

<style scoped>
</style>