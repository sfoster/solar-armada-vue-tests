import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/LandingPage.vue')
        },
        {
            path: '/lobby',
            component: () => import('../views/LobbyFeed.vue'),
        },
        {
            path: '/register',
            component: () => import('../views/RegisterUser.vue')
        },
        {
            path: '/sign-in',
            component: () => import('../views/SignIn.vue')
        },
        {
            path: '/tres',
            component: () => import('../views/TresScene.vue'),
        },
        {
            path: '/three',
            component: () => import('../views/ThreeScene.vue'),
        }
    ]
})

export default router