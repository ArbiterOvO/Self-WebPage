import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/start/StartView.vue')
    },
    {
      path: '/index',
      component: () => import('../views/LayoutView.vue'),
      children: [
        {
          path: '/home',
          component: () => import('../views/home/HomeView.vue')
        },
        {
          path: '/self',
          component: () => import('../views/self/SelfView.vue')
        },
        {
          path: '/unityProject',
          component: () => import('../views/unityProject/UnityProjectView.vue')
        },
        {
          path: '/javaProject',
          component: () => import('../views/javaProject/JavaProjectView.vue')
        },
        {
          path: '/about',
          component: () => import('../views/about/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
