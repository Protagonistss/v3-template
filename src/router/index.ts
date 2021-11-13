import { createRouter, createWebHashHistory } from 'vue-router'
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import HelloWorld from "@/components/HelloWorld.vue"


const routes = [
  { path: '/', component: HelloWorld },
  { path: '/design', component: () => import("@/views/Design.vue") },
  { path: '/nest', component: () => import("@/views/HomePage.vue") }
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