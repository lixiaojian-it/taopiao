import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['@/views/home/index'], resolve),
            meta: {
                title: '热映',
                keepAlive: false,
                requireAuth: false,
                showFooterBar: true
            }
        },
        {
            path: '/movie',
            name: 'movie',
            component: resolve => require(['@/views/movie/index'], resolve),
            meta: {
                title: '影院',
                keepAlive: false,
                requireAuth: false,
                showFooterBar: true
            }
        },
        {
            path: '/me',
            name: 'me',
            component: resolve => require(['@/views/me/index'], resolve),
            meta: {
                title: '我的',
                keepAlive: false,
                requireAuth: false,
                showFooterBar: true
            }
        }
    ]
})
