<template>
    <div class="card border border-3 border-black mb-4">
        <div class="card-body">
            <h5 class="card-title fs-1">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary fs-4">posted by {{ post.User.username }}</h6>
            <p class="card-text fs-4">
                {{ post.content }}
            </p>
            <a 
            @click.prevent="$router.push({name:'PostDetail', params: {PostId: post.id}})"
            href="" class="btn btn-outline-dark">Discuss</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: ["post"]
}
</script>
