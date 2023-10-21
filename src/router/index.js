import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import ForumPage from '../views/ForumPage.vue';
import GenresPage from '../views/GenresPage.vue';
import NewsPage from '../views/NewsPage.vue';
import SearchPage from '../views/SearchPage.vue';


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
      path: "/books/:id",
      name: "ForumPage",
      component: ForumPage
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
  ]
})

export default router
