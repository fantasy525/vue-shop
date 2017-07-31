  import Vue from 'vue'
  import Router from 'vue-router'
  import Index from '@/components/index'
  import Shopcar from '@/components/shopcar'
  import Person from '@/components/person'
  import Sort from '@/components/sort'
  import Info from '@/components/info'
  Vue.use(Router)
  export default new Router({
    mode: 'history',
    saveScrollPosition: true,
    routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        index: 0
      }
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort,
      meta: {
        index: 1
      }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar,
      meta: {
        index: 2
      }
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
      meta: {
        index: 3
      },
      children: [
        {
          path: '/person/info',
          name: 'info',
          component: Info
        }
      ]
    }
    ]
  })
