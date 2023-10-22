import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import ForumPage from '../views/ForumPage.vue';
import GenresPage from '../views/GenresPage.vue';
import NewsPage from '../views/NewsPage.vue';
import SearchPage from '../views/SearchPage.vue';
import BookList from '../views/BookList.vue';
import ForumPosts from '../views/ForumPosts.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '../views/CreatePost.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage
    },
    {
      path: "/books/:BookId",
      name: "ForumPage",
      component: ForumPage,
      children: [
        {
          path: "",
          name: "ForumPosts",
          component: ForumPosts
        },
        {
          path: "posts/:PostId",
          name: "PostDetail",
          component: PostDetail
        },
        {
          path: "create",
          name: "CreatePost",
          component: CreatePost
        }
      ]
    },
    {
      path: "/genres",
      name: "GenresPage",
      component: GenresPage
    },
    {
      path: "/news",
      name: "NewsPage",
      component: NewsPage
    },
    {
      path: "/books",
      name: "BookList",
      component: BookList
    },
  ]
})

export default router
