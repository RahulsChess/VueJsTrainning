import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import DataBinding from '@/components/DataBinding'
import EventHandling from '@/components/EventHandling'
import TodoList from '@/components/TodoList'
import Calculator from '@/components/Calculator'
import Quiz from '@/components/Quiz'
import Demo from '@/components/Demo'
Vue.use(Router)

const routes = [{
        path: '/index',
        name: 'Index',
        component: Index,

    },
    {
        path: '/',
        name: 'Welcome',
        component: Index,

    },
    {
        path: '/data',
        name: 'data',
        component: DataBinding,

    },
    {
        path: '/event',
        name: 'event',
        component: EventHandling,

    },
    {
        path: '/calculator',
        name: 'calculator',
        component: Calculator,

    },
    {
        path: '/quiz',
        name: 'quiz',
        component: Quiz,

    },
    {
        path: '/todo',
        name: 'todo',
        component: TodoList,

    },
    {
        path: '/demo',
        name: 'demo',
        component: Demo,

    }

]

export default new Router({
    mode: 'history',

    routes
});