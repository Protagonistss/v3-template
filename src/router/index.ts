import { createRouter, createWebHashHistory } from 'vue-router'
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import Index from "@/views/index/Index.vue"


const routes = [
  { path: '/', component: Index },
  { path: '/login', component: () => import("@/views/login/Login.vue") },
  { path: '/design', component: () => import("@/views/design/Design.vue") },
  { path: '/explore', component: () => import("@/views/explore/Explore.vue") }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach((to) => {
  nprogress.done()
})

export default router