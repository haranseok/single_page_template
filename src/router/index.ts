import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path:'/',
            component: ()=> import('@/components/layout/Layout.vue'),
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
                }
            ]
        },
        {
            path: '/:paramToPage1',
            name: 'Page1',
            component: () => import('@/pages/subPage/Page1.vue'),
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
                            text: paramToPage1
                        }
                    ]
                }
            }
        },
        {
            path: '/:paramToPage1/page2',
            name: 'Page2',
            component: () => import('@/pages/subPage/Page2.vue'),
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
                            text: 'Page2'
                        }
                    ]
                }
            }
        }
    ]
});

export default router