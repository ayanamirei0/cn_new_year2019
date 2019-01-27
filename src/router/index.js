import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import XunChun from '@/components/xunchun'
import NaoChun from '@/components/naochun'
import HuanChun from '@/components/huanchun'
import JiChun from '@/components/jichun'
import HeChun from '@/components/hechun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/src/components/xunchun.vue',
      name: 'xunchun',
      component: XunChun
    },
    {
      path: '/src/components/naochun.vue',
      name: 'naochun',
      component: NaoChun
    },
    {
      path: '/src/components/huanchun.vue',
      name: 'huanchun',
      component: HuanChun
    },
    {
      path: '/src/components/jichun.vue',
      name: 'jichun',
      component: JiChun
    },
    {
      path: '/src/components/hechun.vue',
      name: 'hechun',
      component: HeChun
    }
  ]
})
