import { createRouter, createWebHistory, Route } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path:'/',
            component: ()=> import('@/components/layout/MainLayout.vue'),
            children: [
                {
                    path:'home',
                    name:'Home',
                    component: () => import('@/pages/Home.vue'),
                    meta: {
                        breadCrumb: [
                            {
                                text: 'Home'
                            }
                        ]
                    }
                },
                {
                    path: '/:paramToPage1',
                    name: 'Page1',
                    component: () => import('@/pages/contentPage/Page1.vue'),
                    meta: {
                        breadCrumb(route: Route) {
                            const paramToPage1 = route.params.paramToPage1;
                            return [
                                {
                                    text: 'Home',
                                    to: { name: 'Home' },
                                    href: '/'
                                },
                                {
                                    text: paramToPage1,
                                    to: { name: 'Page1' },
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/:paramToPage1/page2',
                    name: 'Page2',
                    component: () => import('@/pages/contentPage/Page2.vue'),
                    meta: {
                        breadCrumb(route: Route) {
                            const paramToPage1 = route.params.paramToPage1;
                            return [
                                {
                                    text: 'Home',
                                    to: { name: 'Home' },
                                },
                                {
                                    text: paramToPage1,
                                    to: {
                                        name: 'Page1',
                                        params: {
                                            paramToPage1: paramToPage1
                                        }
                                    },
                                },
                                {
                                    text: 'Page2',
                                    to: { name: 'Page2' },
                                }
                            ]
                        }
                    }
                }
        
            ]
        },
        {
            path:'/test',
            name: 'Test',
            component: () => import('@/pages/contentPage/TestContent.vue')
        }
    ]
});

export default router