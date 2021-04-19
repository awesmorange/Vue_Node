import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import { SystemPage, VuePage, VuetifyPage, EchartsPage, SweetalertPage, CSSPage, JSPage } from './config'
const routes = [
    {
        path: '/',
        name: 'signIn',
        component: () => import('@/views/sys/SignIn')
    },
    SystemPage,
    VuePage,
    VuetifyPage,
    EchartsPage,
    SweetalertPage,
    CSSPage,
    JSPage
]
const router = new Router({routes})
export default router
