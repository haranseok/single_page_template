import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: ()=> import('@/components/layout/Layout.vue')
        }
    ]
});

export default router