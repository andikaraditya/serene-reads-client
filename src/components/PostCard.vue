<template>
    <div class="card border border-3 border-black mb-4">
        <div class="card-body">
            <h5 class="card-title fs-1">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary fs-5">posted by {{ post.User.username }}</h6>
            <p class="card-text fs-4">
                {{ post.content }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <a 
                @click.prevent="$router.push({name:'PostDetail', params: {PostId: post.id}})"
                href="" class="btn btn-outline-dark">Discuss</a>
                <DisqusCount 
                class="fs-5"
                shortname='serene-reads' :identifier="post.id" />
            </div>
        </div>
    </div>
</template>

<script>
import { DisqusCount } from 'vue-disqus'
export default {
    name: "PostCard",
    components: {
    DisqusCount
    },
    props: ["post"]
}
</script>
