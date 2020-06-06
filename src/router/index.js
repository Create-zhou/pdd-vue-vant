import Vue from 'vue'
import router from 'vue-router'
//tabbar 组件
const Home = () => import('../views/Home/')
const chat = () => import('../views/chat/')
const user = () => import('../views/user/')
const shopping = () => import('../views/shopping/')
const recomend = () => import('../views/recomend/')
const NotFount = () => import('../views/NotFount/')
const goodsBuy = () => import('../views/goodsBuy/')
//子组件
const hot = () => import('../views/Home/subpage/hot.vue')
const Woment = () => import('../views/Home/subpage/woment.vue')
Vue.use(router)

export default new router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/Home',
      name:'Home',
      component: Home,
      redirect: 'Home.hot',
      children: [
        {
          path: '/',
          name: 'hot',
          component: hot
        },
        {
          path: '/Home/Woment',
          name: 'Woment',
          component: Woment
        }
      ]
    },
    {
      path: '/goodsBuy',
      name: 'goodsBuy',
      component: goodsBuy
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/recomend',
      name: 'recomend',
      component: recomend
    },
    {
      path: '*',
      name: 'NotFount',
      component: NotFount
    }
  ]
})
