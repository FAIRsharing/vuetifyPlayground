import Vue from 'vue'
import VueRouter from 'vue-router'
import Records from "../views/Records";
import Record from "../views/Record";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Records',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Records
    },
    {
        path: '/record',
        name: 'Record',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Record
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
