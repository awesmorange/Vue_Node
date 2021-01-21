import Vue from 'vue';
import Router from 'vue-router';

import  Home from '@/components/Home'
import AB from '@/components/test1-vuex/AB'
import Table from '@/components/test2-vuetify-table/Table'
import  DrawChart from '@/components/test3-echart/DrawEchart'
import  Message from '@/components/test4-vuetify-message/Message'
import Parent from "@/components/test5-vue/PropsAndEmit/Parent";
import CR from '@/components/test5-vue/ConditionalRendering';
import Rotate3DCard from "../components/test6-rotate3DCard/Rotate3DCard";
import SweetAlert from "../components/test7-sweetAlert/SweetAlert";
import TestAxios from "../components/test8-axios/TestAxios";
import Output from "../components/test9-BaseOfJS/Output";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/AB',
            name: 'AB',
            component: AB
        },
        {
            path: '/Table',
            name: 'Table',
            component: Table
        },
        {
            path: '/DrawChart',
            name: 'DrawChart',
            component: DrawChart
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message
        },
        {
            path: '/Parent',
            name: 'Parent',
            component: Parent
        },
        {
            path: '/CR',
            name: 'CR',
            component: CR
        },
        {
            path: '/Rotate3DCard',
            name: 'Rotate3DCard',
            component: Rotate3DCard
        },
        {
            path: '/SweetAlert',
            name: 'SweetAlert',
            component: SweetAlert
        },
        {
            path: '/TestAxios',
            name: 'TestAxios',
            component:TestAxios
        },
        {
            path: '/Output',
            name: 'Output',
            component: Output
        }
    ]
})