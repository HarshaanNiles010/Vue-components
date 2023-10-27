<template>
    <h1>This is the body of this page</h1>
    <div class="scrolling-component" ref="scrollComponent">
        <Post
            v-for='(post, index) in posts'
            :post = "post"
            :key="index"
        />
    </div>
</template>


<script>
import getPosts from '../api/get-posts';
import Post from './Post.vue';
import { ref, onMounted, onUnmounted } from 'vue';
export default{
    components:{
        Post
    },
    setup(){
        const posts = ref(getPosts(10))
        // getting the refrence to our custom scroll div
        const scrollComponent = ref(null);

        const loadMorePosts = () => {
            let newPosts = getPosts(10)
            posts.value.push(...newPosts)
        }

        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })

        const handleScroll = (e) =>{
            let element = scrollComponent.value
            if (element.getBoundingClientRect().bottom - 1 < window.innerHeight){
                loadMorePosts();
            }
        }

        return {
            posts,
            scrollComponent
        }
    }
}
</script>
