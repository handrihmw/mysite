import Home from './views/Home.vue'
import About from './views/About.vue'
import Blog from './views/Blog.vue'
import Portfolio from './views/Portfolio.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog' } },
  { path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio' } },
  { path: '/:path(.*)', component: NotFound },
]
