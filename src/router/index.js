import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import DataBinding from '@/components/DataBinding'
import EventHandling from '@/components/EventHandling'
import TodoList from '@/components/TodoList'
import Calculator from '@/components/Calculator'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            mode: 'history'
        },
        {
            path: '/data',
            name: 'data',
            component: DataBinding,
            mode: 'history'
        },
        {
            path: '/event',
            name: 'event',
            component: EventHandling,
            mode: 'history'
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: Calculator,
            mode: 'history'
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoList,
            mode: 'history'
        }

    ]
})