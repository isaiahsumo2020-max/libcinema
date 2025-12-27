import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import Search from '@/views/Search.vue'
import MovieDetails from '@/views/MovieDetails.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import WatchList from '@/views/WatchList.vue'
import AfricanSpotlight from '../views/AfricanSpotlight.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/browse', component: Browse },
  { path: '/search', component: Search },
  { path: '/movie/:id', component: MovieDetails },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/watchlist', component: WatchList },
  { path: '/african', component: AfricanSpotlight }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
