<template>
    <div class="card border border-3 border-black mb-4">
        <div class="card-body">
            <h5 class="card-title fs-1">Title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary fs-4">Author</h6>
            <p class="card-text fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium corrupti
                maxime quisquam aspernatur ea soluta. Repudiandae, unde culpa eos aperiam adipisci
                qui minus ab placeat dicta maiores possimus deserunt?
            </p>
            <a 
            @click.prevent="$router.push('posts/1')"
            href="" class="btn btn-outline-dark">Discuss</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
}
</script>
