import { DefaultFramesets } from '@/components/framesets'
export const SystemPage = {
    path: '/',
    component: DefaultFramesets,
    children: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/Home')
        }
    ]
}

export const VuePage = {
    path: '/',
    component: DefaultFramesets,
    name: 'VuePage',
    children: [
        {
            path: '/AB',
            name: 'AB',
            component: () => import('@/components/test1-vuex/AB')
        },
        {
            path: '/Message',
            name: 'Message',
            component: () => import('@/components/test4-vuetify-message/Message')
        },
        {
            path: '/Parent',
            name: 'Parent',
            component: () => import('@/components/test5-vue/PropsAndEmit/Parent')
        },
        {
            path: '/CR',
            name: 'CR',
            component: () => import('@/components/test5-vue/ConditionalRendering')
        },
        {
            path: '/TestAxios',
            name: 'TestAxios',
            component:() => import('@/components/test8-axios/TestAxios')
        }
    ]
}

export const VuetifyPage = {
    path: '/',
    component: DefaultFramesets,
    name: 'VuetifyPage',
    children: [
        {
            path: '/Table',
            name: 'Table',
            component: () => import('@/components/test2-vuetify-table/Table')
        },
        {
            path: '/AutoCompletes',
            name: 'AutoCompletes',
            component: () => import('@/components/test10-AutoCompletes/AutoCompletes')
        }
    ]
}

export const EchartsPage =
    {
        path: '/',
        component: DefaultFramesets,
        name: 'EchartsPage',
        children: [
            {
                path: '/DrawChart',
                name: 'DrawChart',
                component: () => import('@/components/test3-echart/DrawEchart')
            },
            {
                path: '/BasicChart',
                name: 'BasicChart',
                component: () => import('@/components/test3-echart/BasicChart')
            }
        ]
    }

export const SweetalertPage = {
    path: '/',
    component: DefaultFramesets,
    name: 'SweetalertPage',
    children: [
        {
            path: '/SweetAlert',
            name: 'SweetAlert',
            component: () => import('@/components/test7-sweetAlert/SweetAlert')
        }
    ]
}

export const CSSPage = {
    path: '/',
    component: DefaultFramesets,
    name: 'CSSPage',
    children: [
        {
            path: '/Rotate3DCard',
            name: 'Rotate3DCard',
            component: () => import('@/components/test6-rotate3DCard/Rotate3DCard')
        }
    ]
}

export const JSPage = {
    path: '/',
    component: DefaultFramesets,
    name: 'JSPage',
    children: [
        {
            path: '/Output',
            name: 'Output',
            component: () => import('@/components/test9-BaseOfJS/Output')
        }
    ]
}
